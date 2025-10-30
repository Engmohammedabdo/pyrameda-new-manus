import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Megaphone,
  Video,
  Heart,
  Settings,
  Rocket,
  BarChart3,
  Zap,
  FileText,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Services data
  const services = [
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "إعلانات Meta و Google و TikTok",
      description: "حملات إعلانية مدفوعة على أكبر المنصات الرقمية لتحقيق أقصى وصول وتحويل.",
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-500/20",
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "إنتاج المحتوى",
      description: "محتوى مرئي ومكتوب احترافي يعكس هوية علامتك التجارية ويجذب جمهورك المستهدف.",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500/20",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "إدارة شاملة لحساباتك على منصات التواصل مع استراتيجيات نمو مدروسة.",
      color: "from-pink-500 to-pink-600",
      iconBg: "bg-pink-500/20",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "الأتمتة بالذكاء الاصطناعي",
      description: "حلول أتمتة متقدمة باستخدام n8n و ChatGPT و CRM لتبسيط عملياتك التسويقية.",
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-500/20",
    },
  ];

  // Why Pyramidia features
  const features = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "نتائج سريعة",
      description: "حقق أهدافك بسرعة وكفاءة من خلال استراتيجيات مدروسة ومجربة.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "تتبع شفاف",
      description: "راقب تقدمك برؤى واضحة ولوحات تحكم تفصيلية في الوقت الفعلي.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "أتمتة كاملة",
      description: "بسّط عملياتك بسهولة ودقة من خلال حلول الأتمتة الذكية.",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "تقارير ذكية",
      description: "احصل على تحليلات مفصلة لاتخاذ قرارات مستنيرة ومبنية على البيانات.",
    },
  ];

  // Portfolio items
  const portfolio = [
    {
      title: "حملة علامة تجارية",
      category: "التسويق الرقمي",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "استراتيجية محتوى",
      category: "إنتاج المحتوى",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    },
    {
      title: "أتمتة CRM",
      category: "الذكاء الاصطناعي",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "حملة سوشال ميديا",
      category: "إدارة المنصات",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      text: "بيراميديا حولت تواجدنا الرقمي بالكامل. النتائج تجاوزت توقعاتنا بكثير!",
      author: "أحمد السعيد",
      company: "مدير التسويق - شركة النور",
      logo: "https://via.placeholder.com/120x40/1a1a1a/D4AF37?text=ALNOOR",
    },
    {
      text: "فريق محترف وملتزم. حملاتهم الإعلانية حققت لنا زيادة 300% في المبيعات.",
      author: "فاطمة محمد",
      company: "المديرة التنفيذية - متجر الأناقة",
      logo: "https://via.placeholder.com/120x40/1a1a1a/D4AF37?text=ELEGANCE",
    },
    {
      text: "حلول الأتمتة التي قدموها وفرت لنا ساعات من العمل اليومي. استثمار يستحق كل قرش!",
      author: "خالد عبدالله",
      company: "مؤسس - تك سوليوشنز",
      logo: "https://via.placeholder.com/120x40/1a1a1a/D4AF37?text=TECHSOL",
    },
  ];

  // Stats
  const stats = [
    { number: "500+", label: "عميل راضٍ" },
    { number: "1000+", label: "حملة ناجحة" },
    { number: "95%", label: "معدل الرضا" },
    { number: "24/7", label: "دعم متواصل" },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Pyramidia Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-foreground">PYRAMIDIA</h1>
                <p className="text-xs text-gradient-gold font-semibold">AI Division • Dubai</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                الخدمات
              </a>
              <a href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">
                لماذا نحن
              </a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
                الأعمال
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                العملاء
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                تواصل معنا
              </a>
            </div>

            {/* CTA Button */}
            <Button className="hidden md:flex gradient-gold text-black font-semibold hover:opacity-90 transition-opacity">
              ابدأ الآن
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <a
                href="#services"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الخدمات
              </a>
              <a
                href="#why-us"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                لماذا نحن
              </a>
              <a
                href="#portfolio"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الأعمال
              </a>
              <a
                href="#testimonials"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                العملاء
              </a>
              <a
                href="#contact"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                تواصل معنا
              </a>
              <Button className="w-full gradient-gold text-black font-semibold">ابدأ الآن</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <p className="text-sm text-gradient-gold font-semibold">
                  وكالة متخصصة في قيادة النمو
                </p>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                نحو وكالة تسويق
                <span className="block text-gradient-gold">تُدار بالذكاء الاصطناعي</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                بيراميديا تمزج بين الإبداع، البيانات، وتقنيات المستقبل لتصميم مواقع تترك أثراً لا يُنسى
                وتحوّل الزوار إلى عملاء أوفياء.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="gradient-gold text-black font-semibold text-lg px-8 hover:opacity-90 transition-opacity"
                >
                  ابدأ مشروعك الآن
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
                >
                  شاهد مشاريعنا
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <p className="text-3xl font-bold text-gradient-gold">120+</p>
                  <p className="text-sm text-muted-foreground">شراكات إطلاق</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient-gold">3.8x</p>
                  <p className="text-sm text-muted-foreground">نمو التحويل</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient-gold">16</p>
                  <p className="text-sm text-muted-foreground">سوق حول العالم</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Gradient circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-3xl" />
                <div className="absolute inset-10 bg-gradient-to-tl from-primary/30 to-orange-500/30 rounded-full blur-2xl" />
                
                {/* Center icon/illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-card border border-border rounded-3xl flex items-center justify-center shadow-2xl">
                    <Settings className="w-32 h-32 text-primary animate-spin" style={{ animationDuration: "20s" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا المتميزة</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              حلول تسويقية متكاملة تغطي كل جوانب حضورك الرقمي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pyramidia Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">لماذا بيراميديا؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              شراكة استراتيجية تبني أثراً مستداماً
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">نماذج من أعمالنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مشاريع تمزج بين الذكاء البصري والابتكار التقني
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-primary text-sm font-semibold mb-1">{item.category}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-gradient-gold mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">عملاؤنا يتحدثون</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              قصص نجاح تحولت إلى شراكات ممتدة
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <Card className="bg-background border-border">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].author}</p>
                    <p className="text-muted-foreground">{testimonials[currentTestimonial].company}</p>
                  </div>
                  <img
                    src={testimonials[currentTestimonial].logo}
                    alt="Company Logo"
                    className="h-10 opacity-70"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h2>
              <p className="text-xl text-muted-foreground">
                فلنصنع تجربة رقمية مذهلة معاً
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">الاسم</label>
                  <Input placeholder="أدخل اسمك" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">البريد الإلكتروني</label>
                  <Input type="email" placeholder="email@example.com" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">رقم الهاتف</label>
                  <Input type="tel" placeholder="+971 XX XXX XXXX" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">الرسالة</label>
                  <Textarea
                    placeholder="أخبرنا عن مشروعك..."
                    className="bg-background min-h-32"
                  />
                </div>

                <Button className="w-full gradient-gold text-black font-semibold text-lg py-6 hover:opacity-90 transition-opacity">
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Pyramidia Logo" className="h-10 w-auto" />
                <div>
                  <h3 className="font-bold text-lg">PYRAMIDIA</h3>
                  <p className="text-xs text-gradient-gold">AI Division • Dubai</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                وكالة تسويق رقمي متخصصة في حلول الذكاء الاصطناعي والأتمتة
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  الخدمات
                </a>
                <a href="#why-us" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  لماذا نحن
                </a>
                <a href="#portfolio" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  الأعمال
                </a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </a>
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
