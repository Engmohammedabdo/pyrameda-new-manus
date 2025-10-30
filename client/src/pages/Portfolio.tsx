import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import { Link } from "wouter";

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  services: string[];
  results: {
    label: string;
    value: string;
  }[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "حملة إعلانية متكاملة لمتجر إلكتروني",
    client: "متجر الأناقة",
    category: "advertising",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "حملة إعلانية شاملة على Meta و Google أدت إلى زيادة المبيعات بنسبة 320%",
    services: ["إعلانات Meta", "إعلانات Google", "تحليل البيانات"],
    results: [
      { label: "زيادة المبيعات", value: "+320%" },
      { label: "تكلفة الاكتساب", value: "-45%" },
      { label: "معدل التحويل", value: "8.5%" },
    ],
  },
  {
    id: 2,
    title: "استراتيجية محتوى لشركة عقارية",
    client: "العقارات الذهبية",
    category: "content",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop",
    description: "إنتاج محتوى عالي الجودة أدى إلى زيادة التفاعل والوعي بالعلامة التجارية",
    services: ["إنتاج المحتوى", "التصوير", "المونتاج"],
    results: [
      { label: "زيادة التفاعل", value: "+280%" },
      { label: "نمو المتابعين", value: "+150%" },
      { label: "الوصول الشهري", value: "2M+" },
    ],
  },
  {
    id: 3,
    title: "إدارة سوشال ميديا لمطعم فاخر",
    client: "مطعم النخبة",
    category: "social",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    description: "إدارة شاملة لحسابات السوشال ميديا مع محتوى إبداعي يومي",
    services: ["إدارة السوشال ميديا", "إنتاج المحتوى", "التصوير الاحترافي"],
    results: [
      { label: "زيادة الحجوزات", value: "+200%" },
      { label: "نمو المتابعين", value: "+180%" },
      { label: "معدل التفاعل", value: "12%" },
    ],
  },
  {
    id: 4,
    title: "أتمتة خدمة العملاء بالذكاء الاصطناعي",
    client: "شركة التقنية المتقدمة",
    category: "automation",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    description: "نظام ذكي للرد على استفسارات العملاء على مدار الساعة",
    services: ["Chatbot AI", "أتمتة العمليات", "تكامل الأنظمة"],
    results: [
      { label: "توفير الوقت", value: "85%" },
      { label: "رضا العملاء", value: "95%" },
      { label: "الاستجابة", value: "24/7" },
    ],
  },
  {
    id: 5,
    title: "حملة TikTok لعلامة تجارية شبابية",
    client: "براند الشباب",
    category: "advertising",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "حملة إبداعية على TikTok حققت ملايين المشاهدات",
    services: ["إعلانات TikTok", "إنتاج الفيديو", "التسويق المؤثر"],
    results: [
      { label: "المشاهدات", value: "5M+" },
      { label: "معدل التفاعل", value: "15%" },
      { label: "نمو المبيعات", value: "+250%" },
    ],
  },
  {
    id: 6,
    title: "استراتيجية تسويق متكاملة لشركة ناشئة",
    client: "ستارت أب تك",
    category: "content",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    description: "استراتيجية تسويقية شاملة من الصفر إلى النمو السريع",
    services: ["استراتيجية التسويق", "العلامة التجارية", "النمو"],
    results: [
      { label: "نمو الإيرادات", value: "+400%" },
      { label: "اكتساب العملاء", value: "10K+" },
      { label: "الوعي بالعلامة", value: "+350%" },
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "الكل" },
  { id: "advertising", label: "إعلانات" },
  { id: "content", label: "محتوى" },
  { id: "social", label: "سوشال ميديا" },
  { id: "automation", label: "أتمتة" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                  ▲
                </div>
                <div>
                  <h1 className="font-bold text-lg">بيراميديا</h1>
                  <p className="text-xs text-muted-foreground">معرض الأعمال</p>
                </div>
              </div>
            </Link>

            <Link href="/#contact">
              <Button className="gradient-primary text-white border-0">
                تواصل معنا
                <ArrowRight className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              معرض الأعمال
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              قصص نجاح عملائنا
            </h1>
            <p className="text-xl text-muted-foreground">
              اكتشف كيف ساعدنا عملاءنا في تحقيق أهدافهم وتجاوز توقعاتهم من خلال حلولنا الإبداعية
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-[73px] bg-background z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-muted-foreground shrink-0">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">تصفية:</span>
            </div>
            <div className="flex gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-[28px] border border-border overflow-hidden hover:shadow-soft transition-all"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {CATEGORIES.find((c) => c.id === project.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-primary font-semibold mb-1">{project.client}</p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {project.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <p className="text-lg font-bold text-gradient-primary">
                          {result.value}
                        </p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="outline"
                    className="w-full rounded-[12px] group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  >
                    عرض التفاصيل
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-green-500">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              هل أنت مستعد لتكون قصة النجاح القادمة؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              دعنا نساعدك في تحقيق أهدافك التسويقية وتجاوز توقعاتك
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-[12px]"
              >
                ابدأ مشروعك الآن
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </Link>
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
                <Link href="/">
                  <a className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    الرئيسية
                  </a>
                </Link>
                <Link href="/#services">
                  <a className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    الخدمات
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    معرض الأعمال
                  </a>
                </Link>
                <Link href="/#contact">
                  <a className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    تواصل معنا
                  </a>
                </Link>
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
