import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { ChevronRight, ChevronLeft, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
}

const SERVICES = [
  { id: "advertising", label: "إعلانات Meta و Google و TikTok", icon: "📢" },
  { id: "content", label: "إنتاج المحتوى", icon: "✍️" },
  { id: "social", label: "إدارة وسائل التواصل الاجتماعي", icon: "📱" },
  { id: "automation", label: "الأتمتة بالذكاء الاصطناعي", icon: "🤖" },
];

const BUDGETS = [
  { id: "5000-10000", label: "5,000 - 10,000 درهم" },
  { id: "10000-25000", label: "10,000 - 25,000 درهم" },
  { id: "25000-50000", label: "25,000 - 50,000 درهم" },
  { id: "50000+", label: "أكثر من 50,000 درهم" },
];

const TIMELINES = [
  { id: "urgent", label: "عاجل (أقل من أسبوع)" },
  { id: "1-month", label: "شهر واحد" },
  { id: "2-3-months", label: "2-3 أشهر" },
  { id: "flexible", label: "مرن" },
];

export default function QuoteRequestForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    budget: "",
    timeline: "",
    message: "",
  });

  const submitMutation = trpc.quote.submit.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        budget: "",
        timeline: "",
        message: "",
      });
      setStep(1);
    },
    onError: (error) => {
      toast.error(error.message || "حدث خطأ أثناء إرسال الطلب");
    },
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step === 1 && formData.services.length === 0) {
      toast.error("يجب اختيار خدمة واحدة على الأقل");
      return;
    }
    if (step === 2 && !formData.budget) {
      toast.error("يجب اختيار الميزانية");
      return;
    }
    if (step === 2 && !formData.timeline) {
      toast.error("يجب اختيار الإطار الزمني");
      return;
    }
    if (step === 3) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast.error("يجب ملء جميع الحقول المطلوبة");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    submitMutation.mutate(formData);
  };

  const toggleService = (serviceId: string) => {
    if (formData.services.includes(serviceId)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== serviceId),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, serviceId],
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            الخطوة {step} من {totalSteps}
          </span>
          <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 1: Services */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">ما هي الخدمات التي تحتاجها؟</h3>
            <p className="text-muted-foreground">يمكنك اختيار أكثر من خدمة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`p-6 rounded-[18px] border-2 transition-all text-right ${
                  formData.services.includes(service.id)
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl mb-2">{service.icon}</div>
                    <p className="font-semibold">{service.label}</p>
                  </div>
                  {formData.services.includes(service.id) && (
                    <Check className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Budget & Timeline */}
      {step === 2 && (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">ما هي ميزانيتك والإطار الزمني؟</h3>
            <p className="text-muted-foreground">ساعدنا في تقديم أفضل عرض لك</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">الميزانية الشهرية</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {BUDGETS.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => setFormData({ ...formData, budget: budget.id })}
                  className={`p-4 rounded-[12px] border-2 transition-all text-center ${
                    formData.budget === budget.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <p className="font-semibold">{budget.label}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">الإطار الزمني</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {TIMELINES.map((timeline) => (
                <button
                  key={timeline.id}
                  onClick={() => setFormData({ ...formData, timeline: timeline.id })}
                  className={`p-4 rounded-[12px] border-2 transition-all text-center ${
                    formData.timeline === timeline.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <p className="font-semibold">{timeline.label}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact Information */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">معلومات التواصل</h3>
            <p className="text-muted-foreground">كيف يمكننا التواصل معك؟</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم الكامل *</label>
              <Input
                type="text"
                placeholder="أدخل اسمك الكامل"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="rounded-[12px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني *</label>
              <Input
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-[12px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">رقم الهاتف *</label>
              <Input
                type="tel"
                placeholder="+971 XX XXX XXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-[12px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">اسم الشركة (اختياري)</label>
              <Input
                type="text"
                placeholder="أدخل اسم شركتك"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="rounded-[12px]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Additional Details & Review */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">تفاصيل إضافية</h3>
            <p className="text-muted-foreground">أخبرنا المزيد عن مشروعك</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">رسالة (اختياري)</label>
            <Textarea
              placeholder="أخبرنا عن أهدافك وتوقعاتك..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="rounded-[12px] min-h-[120px]"
            />
          </div>

          {/* Review Summary */}
          <div className="bg-muted/50 rounded-[18px] p-6 space-y-3">
            <h4 className="font-bold mb-4">ملخص طلبك</h4>
            
            <div>
              <p className="text-sm text-muted-foreground">الخدمات</p>
              <p className="font-medium">
                {formData.services
                  .map((s) => SERVICES.find((srv) => srv.id === s)?.label)
                  .join(", ")}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">الميزانية</p>
              <p className="font-medium">
                {BUDGETS.find((b) => b.id === formData.budget)?.label}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">الإطار الزمني</p>
              <p className="font-medium">
                {TIMELINES.find((t) => t.id === formData.timeline)?.label}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">معلومات التواصل</p>
              <p className="font-medium">{formData.fullName}</p>
              <p className="text-sm">{formData.email}</p>
              <p className="text-sm">{formData.phone}</p>
              {formData.company && <p className="text-sm">{formData.company}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={step === 1}
          className="rounded-[12px]"
        >
          <ChevronLeft className="w-4 h-4 ml-2" />
          السابق
        </Button>

        {step < totalSteps ? (
          <Button
            onClick={handleNext}
            className="rounded-[12px] bg-gradient-to-r from-purple-500 to-green-500"
          >
            التالي
            <ChevronRight className="w-4 h-4 mr-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={submitMutation.isPending}
            className="rounded-[12px] bg-gradient-to-r from-purple-500 to-green-500"
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                جاري الإرسال...
              </>
            ) : (
              <>
                إرسال الطلب
                <Check className="w-4 h-4 mr-2" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
