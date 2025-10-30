import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactMutation = trpc.quote.submit.useMutation({
    onSuccess: () => {
      toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    },
    onError: (error) => {
      toast.error("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // استخدام نموذج quote.submit مع تعديل البيانات
    contactMutation.mutate({
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.subject,
      services: [],
      budget: "غير محدد",
      timeline: "غير محدد",
      message: formData.message,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                  ▲
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">بيراميديا</h1>
                  <p className="text-xs text-white/80">إبداع. تقنية. نتائج.</p>
                </div>
              </div>
            </Link>

            {/* Back to Home */}
            <Link href="/">
              <Button className="bg-white/10 hover:bg-white/20 text-white font-semibold border-0">
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              تواصل معنا
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              دعنا نبني <span className="text-gradient-primary">نجاحك الرقمي</span> معاً
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك التسويقية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Cards */}
              <div className="bg-card rounded-[28px] p-8 border border-border shadow-soft">
                <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">الموقع</h3>
                <p className="text-muted-foreground">
                  دبي، الإمارات العربية المتحدة
                </p>
              </div>

              <div className="bg-card rounded-[28px] p-8 border border-border shadow-soft">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">الهاتف</h3>
                <p className="text-muted-foreground" dir="ltr">
                  +971 XX XXX XXXX
                </p>
              </div>

              <div className="bg-card rounded-[28px] p-8 border border-border shadow-soft">
                <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">
                  info@pyramedia.ae
                </p>
              </div>

              <div className="bg-card rounded-[28px] p-8 border border-border shadow-soft">
                <div className="w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">ساعات العمل</h3>
                <div className="space-y-1 text-muted-foreground text-sm">
                  <p>الأحد - الخميس: 9:00 - 18:00</p>
                  <p>الجمعة - السبت: مغلق</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card rounded-[28px] p-8 border border-border shadow-soft">
                <h3 className="text-lg font-bold mb-4">تابعنا</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-[28px] p-10 border border-border shadow-soft">
                <h2 className="text-3xl font-bold mb-2">أرسل لنا رسالة</h2>
                <p className="text-muted-foreground mb-8">
                  املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                        className="h-12 rounded-[12px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                        className="h-12 rounded-[12px]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        رقم الهاتف <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 XX XXX XXXX"
                        required
                        className="h-12 rounded-[12px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        الموضوع <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="موضوع الرسالة"
                        required
                        className="h-12 rounded-[12px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      الرسالة <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      required
                      rows={6}
                      className="rounded-[12px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full gradient-primary text-white border-0 h-14 text-lg font-semibold rounded-[12px]"
                  >
                    {contactMutation.isPending ? (
                      "جاري الإرسال..."
                    ) : (
                      <>
                        إرسال الرسالة
                        <Send className="w-5 h-5 mr-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Quick FAQ */}
              <div className="mt-12 bg-gradient-to-br from-purple-50 to-green-50 rounded-[28px] p-10 border border-purple-100">
                <h3 className="text-2xl font-bold mb-6">أسئلة سريعة؟</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">كم يستغرق الرد على استفساري؟</h4>
                      <p className="text-sm text-muted-foreground">
                        نرد على جميع الاستفسارات خلال 24 ساعة في أيام العمل.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">هل الاستشارة الأولى مجانية؟</h4>
                      <p className="text-sm text-muted-foreground">
                        نعم، نقدم استشارة مجانية لتقييم احتياجاتك التسويقية.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">هل تعملون مع الشركات الناشئة؟</h4>
                      <p className="text-sm text-muted-foreground">
                        بالتأكيد! لدينا باقات مرنة تناسب جميع أحجام الأعمال.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">موقعنا</h2>
            <p className="text-xl text-muted-foreground">
              زرنا في مكتبنا بدبي
            </p>
          </div>
          <div className="rounded-[28px] overflow-hidden border border-border shadow-soft h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828014627!2d54.947330849999995!3d25.0762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-primary rounded-[28px] p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك التسويقية
            </p>
            <Link href="/#quote">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 border-0 text-lg px-8 py-6 h-auto">
                احجز استشارة مجانية
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                  ▲
                </div>
                <h3 className="font-bold text-lg">بيراميديا</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                نصمم تجارب رقمية تثير الإعجاب وتدفع النمو
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <div className="space-y-2 text-sm">
                <Link href="/">
                  <span className="text-muted-foreground hover:text-foreground transition-colors block cursor-pointer">
                    الرئيسية
                  </span>
                </Link>
                <Link href="/portfolio">
                  <span className="text-muted-foreground hover:text-foreground transition-colors block cursor-pointer">
                    معرض الأعمال
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-foreground transition-colors block cursor-pointer">
                    اتصل بنا
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">الخدمات</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>إعلانات رقمية</p>
                <p>إنتاج المحتوى</p>
                <p>إدارة السوشال ميديا</p>
                <p>الأتمتة بالذكاء الاصطناعي</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>دبي، الإمارات العربية المتحدة</p>
                <p>info@pyramedia.ae</p>
                <p>+971 XX XXX XXXX</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Pyramidia Marketing Agency. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
