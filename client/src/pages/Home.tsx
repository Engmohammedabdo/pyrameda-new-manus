import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Megaphone,
  Video,
  Users,
  Bot,
  Rocket,
  BarChart3,
  Zap,
  Target,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Check,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Services
  const services = [
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "إعلانات Meta و Google و TikTok",
      description: "حملات إعلانية مدفوعة على أكبر المنصات الرقمية لتحقيق أقصى وصول وتحويل.",
      color: "purple", // بنفسجي
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "إنتاج المحتوى",
      description: "محتوى مرئي ومكتوب احترافي يعكس هوية علامتك التجارية ويجذب جمهورك المستهدف.",
      color: "green", // أخضر
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "إدارة شاملة لحساباتك على منصات التواصل مع استراتيجيات نمو مدروسة.",
      color: "orange", // برتقالي
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "الأتمتة بالذكاء الاصطناعي",
      description: "حلول أتمتة متقدمة باستخدام n8n و ChatGPT و CRM لتبسيط عملياتك التسويقية.",
      color: "pink", // وردي
    },
  ];

  // Why Pyramidia
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "نتائج سريعة",
      description: "حقق أهدافك بسرعة وكفاءة من خلال استراتيجيات مدروسة ومجربة.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "تتبع شفاف",
      description: "راقب تقدمك برؤى واضحة ولوحات تحكم تفصيلية في الوقت الفعلي.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "أتمتة كاملة",
      description: "بسّط عملياتك بسهولة ودقة من خلال حلول الأتمتة الذكية.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "تقارير ذكية",
      description: "احصل على تحليلات مفصلة لاتخاذ قرارات مستنيرة ومبنية على البيانات.",
    },
  ];

  // Portfolio
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
      logo: "https://via.placeholder.com/120x40/6246EA/FFFFFF?text=ALNOOR",
    },
    {
      text: "فريق محترف وملتزم. حملاتهم الإعلانية حققت لنا زيادة 300% في المبيعات.",
      author: "فاطمة محمد",
      company: "المديرة التنفيذية - متجر الأناقة",
      logo: "https://via.placeholder.com/120x40/2CB67D/FFFFFF?text=ELEGANCE",
    },
    {
      text: "حلول الأتمتة التي قدموها وفرت لنا ساعات من العمل اليومي. استثمار يستحق كل قرش!",
      author: "خالد عبدالله",
      company: "مؤسس - تك سوليوشنز",
      logo: "https://via.placeholder.com/120x40/FF8E3C/FFFFFF?text=TECHSOL",
    },
  ];

  // Stats
  const stats = [
    { number: "500+", label: "عميل راضٍ" },
    { number: "1000+", label: "حملة ناجحة" },
    { number: "95%", label: "معدل الرضا" },
    { number: "24/7", label: "دعم متواصل" },
  ];

  // Pricing
  const pricing = [
    {
      name: "الباقة الأساسية",
      price: "7,500",
      currency: "درهم",
      period: "شهرياً",
      features: [
        "إدارة منصتين اجتماعيتين",
        "10 منشورات شهرياً",
        "تقرير شهري",
        "دعم عبر البريد",
      ],
    },
    {
      name: "الباقة الاحترافية",
      price: "15,000",
      currency: "درهم",
      period: "شهرياً",
      popular: true,
      features: [
        "إدارة 4 منصات اجتماعية",
        "20 منشور شهرياً",
        "حملة إعلانية واحدة",
        "تقارير أسبوعية",
        "دعم هاتفي",
      ],
    },
    {
      name: "الباقة المتقدمة",
      price: "30,000",
      currency: "درهم",
      period: "شهرياً",
      features: [
        "إدارة جميع المنصات",
        "محتوى غير محدود",
        "حملات إعلانية متعددة",
        "أتمتة كاملة",
        "مدير حساب مخصص",
        "تقارير يومية",
      ],
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "كم يستغرق إطلاق الموقع؟",
      answer: "غالبية المشاريع الأساسية تنطلق بين 6 إلى 8 أسابيع، بينما المشاريع المخصصة بالكامل قد تمتد إلى 12 أسبوعاً مع مراحل اختبار متعددة.",
    },
    {
      question: "هل يمكنكم إدارة المحتوى والحملات بعد الإطلاق؟",
      answer: "نعم، لدينا عقود شراكة مرنة تبدأ من إدارة المحتوى والمواقع وحتى بناء الحملات المتكاملة وحملات الأداء.",
    },
    {
      question: "كيف يتم تسليم التقارير والتحليلات؟",
      answer: "نوفر لوحة تحكم مخصصة ومحدثة لحظياً، مع مراجعات استراتيجية شهرية تعطي توصيات تنفيذية واضحة.",
    },
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

  // Get color classes
  const getColorClasses = (color: string) => {
    const colors = {
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                ▲
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">بيراميديا</h1>
                <p className="text-xs text-white/80">إبداع. تقنية. نتائج.</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm text-white/75 hover:text-white transition-colors">
                الخدمات
              </a>
              <a href="#why-us" className="text-sm text-white/75 hover:text-white transition-colors">
                لماذا نحن
              </a>
              <a href="#portfolio" className="text-sm text-white/75 hover:text-white transition-colors">
                الأعمال
              </a>
              <a href="#pricing" className="text-sm text-white/75 hover:text-white transition-colors">
                الباقات
              </a>
              <a href="#testimonials" className="text-sm text-white/75 hover:text-white transition-colors">
                العملاء
              </a>
              <a href="#faqs" className="text-sm text-white/75 hover:text-white transition-colors">
                الأسئلة
              </a>
              <a href="#contact" className="text-sm text-white/75 hover:text-white transition-colors">
                تواصل
              </a>
            </div>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-white/10 hover:bg-white/20 text-white font-semibold border-0">
              ابدأ الآن
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <a
                href="#services"
                className="block text-sm text-white/75 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الخدمات
              </a>
              <a
                href="#why-us"
                className="block text-sm text-white/75 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                لماذا نحن
              </a>
              <a
                href="#portfolio"
                className="block text-sm text-white/75 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الأعمال
              </a>
              <a
                href="#pricing"
                className="block text-sm text-white/75 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الباقات
              </a>
              <a
                href="#testimonials"
                className="block text-sm text-white/75 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                العملاء
              </a>
              <a
                href="#faqs"
                className="block text-sm text-white/75 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الأسئلة
              </a>
              <a
                href="#contact"
                className="block text-sm text-white/75 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                تواصل معنا
              </a>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold border-0">
                ابدأ الآن
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              وكالة متخصصة في قيادة النمو
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              نصمم تجارب رقمية
              <span className="block text-gradient-primary">تثير الإعجاب وتدفع النمو</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              بيراميديا تمزج بين الإبداع، البيانات، وتقنيات المستقبل لتصميم مواقع تترك أثراً لا يُنسى
              وتحوّل الزوار إلى عملاء أوفياء.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold text-lg px-8 hover:opacity-90 transition-opacity border-0 shadow-soft"
              >
                ابدأ مشروعك الآن
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:bg-foreground/5 text-lg px-8"
              >
                شاهد مشاريعنا
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gradient-primary">120+</p>
                <p className="text-sm text-muted-foreground mt-1">شراكات إطلاق</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gradient-primary">3.8x</p>
                <p className="text-sm text-muted-foreground mt-1">نمو التحويل</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gradient-primary">16</p>
                <p className="text-sm text-muted-foreground mt-1">سوق حول العالم</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              الخدمات
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا المتميزة</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              حلول تسويقية متكاملة تغطي كل جوانب حضورك الرقمي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group"
              >
                <div className={`w-16 h-16 rounded-[18px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${getColorClasses(service.color)}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pyramidia Section */}
      <section id="why-us" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              المميزات
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">لماذا بيراميديا؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              شراكة استراتيجية تبني أثراً مستداماً
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-[28px] p-8 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-soft"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              إضاءات
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">نماذج من أعمالنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مشاريع تمزج بين الذكاء البصري والابتكار التقني
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] cursor-pointer border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-soft"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-green-400 text-sm font-semibold mb-1">{item.category}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-gradient-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
              الباقات
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">باقات مرنة تناسب احتياجاتك</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اختر الباقة المناسبة لأهدافك مع إمكانية التخصيص الكامل
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-card rounded-[28px] p-8 border-2 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-soft ${
                  plan.popular ? "border-primary" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-3 py-1 gradient-primary text-white text-xs font-semibold rounded-full mb-4">
                    الأكثر طلباً
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gradient-primary">{plan.price}</span>
                  <span className="text-muted-foreground mr-2">{plan.currency}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "gradient-primary text-white border-0"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  اختر هذه الباقة
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              العملاء
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">عملاؤنا يتحدثون</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              قصص نجاح تحولت إلى شراكات ممتدة
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-card rounded-[28px] border border-border p-8 md:p-12 shadow-soft">
              <div className="flex items-start gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg text-gradient-primary">{testimonials[currentTestimonial].author}</p>
                  <p className="text-muted-foreground">{testimonials[currentTestimonial].company}</p>
                </div>
                <img
                  src={testimonials[currentTestimonial].logo}
                  alt="Company Logo"
                  loading="lazy"
                  className="h-10 opacity-70"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-soft"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-soft"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial ? "gradient-primary w-8" : "bg-border w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              الأسئلة
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">أسئلة شائعة</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              إجابات مختصرة لأكثر ما يشغل بال شركائنا
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-[28px] border border-border p-6 hover:border-primary/50 transition-all shadow-sm hover:shadow-soft"
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                تواصل مباشر
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">فلنصنع تجربة رقمية مذهلة</h2>
              <p className="text-xl text-muted-foreground">
                أرسل لنا تفاصيل مشروعك ودع فريق بيراميديا يتولى القيادة
              </p>
            </div>

            <div className="bg-card rounded-[28px] border border-border p-8 space-y-6 shadow-soft">
              <div className="space-y-2">
                <label className="text-sm font-medium">الاسم</label>
                <Input placeholder="أدخل اسمك" className="bg-background rounded-[12px]" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">البريد الإلكتروني</label>
                <Input type="email" placeholder="email@example.com" className="bg-background rounded-[12px]" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">رقم الهاتف</label>
                <Input type="tel" placeholder="+971 XX XXX XXXX" className="bg-background rounded-[12px]" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">الرسالة</label>
                <Textarea
                  placeholder="أخبرنا عن مشروعك..."
                  className="bg-background min-h-32 rounded-[12px]"
                />
              </div>

              <Button className="w-full gradient-primary text-white font-semibold text-lg py-6 hover:opacity-90 transition-opacity border-0">
                إرسال الرسالة
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                  ▲
                </div>
                <div>
                  <h3 className="font-bold text-lg">بيراميديا</h3>
                  <p className="text-xs text-muted-foreground">إبداع. تقنية. نتائج.</p>
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
