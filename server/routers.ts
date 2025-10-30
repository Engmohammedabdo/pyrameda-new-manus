import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createQuoteRequest, getAllQuoteRequests, getQuoteRequestById, updateQuoteRequestStatus } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Quote requests router
  quote: router({
    // Submit a new quote request (public)
    submit: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(2, "الاسم يجب أن يكون حرفين على الأقل"),
          email: z.string().email("البريد الإلكتروني غير صحيح"),
          phone: z.string().min(10, "رقم الهاتف غير صحيح"),
          company: z.string().optional(),
          services: z.array(z.string()).min(1, "يجب اختيار خدمة واحدة على الأقل"),
          budget: z.string().min(1, "يجب اختيار الميزانية"),
          timeline: z.string().min(1, "يجب اختيار الإطار الزمني"),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Save to database
        await createQuoteRequest({
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          company: input.company || null,
          services: input.services,
          budget: input.budget,
          timeline: input.timeline,
          message: input.message || null,
          status: "new",
        });

        // Notify owner
        await notifyOwner({
          title: "طلب عرض سعر جديد 💼",
          content: `تم استلام طلب عرض سعر جديد من ${input.fullName} (${input.company || "بدون شركة"})\n\nالخدمات: ${input.services.join(", ")}\nالميزانية: ${input.budget}\nالإطار الزمني: ${input.timeline}\n\nالبريد: ${input.email}\nالهاتف: ${input.phone}`,
        });

        return {
          success: true,
          message: "تم إرسال طلبك بنجاح! سنتواصل معك قريباً.",
        };
      }),

    // Get all quote requests (admin only)
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await getAllQuoteRequests();
    }),

    // Get quote request by ID (admin only)
    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return await getQuoteRequestById(input.id);
      }),

    // Update quote request status (admin only)
    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["new", "contacted", "quoted", "won", "lost"]),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }
        await updateQuoteRequestStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
