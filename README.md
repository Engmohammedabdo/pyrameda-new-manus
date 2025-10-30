# Pyramidia Marketing Agency - AI Division

![Pyramidia Logo](./client/public/logo.png)

## 🚀 نظرة عامة

موقع إلكتروني احترافي لوكالة **بيراميديا** للتسويق الرقمي والأتمتة بالذكاء الاصطناعي في دبي، الإمارات العربية المتحدة.

## ✨ المميزات

- 🎨 **تصميم عصري**: خلفية فاتحة مع ألوان متعددة وجريئة (بنفسجي، أخضر، برتقالي، وردي)
- 🌐 **متعدد اللغات**: دعم كامل للعربية والإنجليزية
- 📱 **متجاوب**: يعمل بسلاسة على جميع الأجهزة (موبايل، تابلت، ديسكتوب)
- ⚡ **سريع**: مبني بأحدث التقنيات (React 19 + TypeScript + Tailwind 4)
- 🔒 **آمن**: نظام مصادقة متكامل مع Manus OAuth
- 🗄️ **قاعدة بيانات**: MySQL/TiDB مع Drizzle ORM
- 🎯 **SEO محسّن**: جاهز لمحركات البحث

## 🛠️ التقنيات المستخدمة

### Frontend
- **React 19** - مكتبة واجهة المستخدم
- **TypeScript** - للكتابة الآمنة
- **Tailwind CSS 4** - للتصميم السريع
- **shadcn/ui** - مكونات UI جاهزة
- **Wouter** - للتوجيه (Routing)
- **Lucide React** - للأيقونات

### Backend
- **Express 4** - خادم Node.js
- **tRPC 11** - للاتصال بين Frontend و Backend
- **Drizzle ORM** - للتعامل مع قاعدة البيانات
- **MySQL/TiDB** - قاعدة البيانات

### الأدوات
- **Vite** - أداة البناء
- **pnpm** - مدير الحزم
- **ESLint** - للتحقق من الكود

## 📂 هيكل المشروع

```
pyramidia-website/
├── client/                 # تطبيق React
│   ├── public/            # الملفات الثابتة
│   │   └── logo.png       # شعار بيراميديا
│   └── src/
│       ├── components/    # المكونات القابلة لإعادة الاستخدام
│       ├── pages/         # صفحات الموقع
│       │   └── Home.tsx   # الصفحة الرئيسية
│       ├── index.css      # الأنماط العامة
│       └── App.tsx        # المكون الرئيسي
├── server/                # خادم Express + tRPC
│   ├── routers.ts         # مسارات tRPC
│   └── db.ts              # وظائف قاعدة البيانات
├── drizzle/               # ملفات قاعدة البيانات
│   └── schema.ts          # مخطط الجداول
├── mockups/               # نماذج التصميم
├── todo.md                # قائمة المهام
└── README.md              # هذا الملف
```

## 🎨 الهوية البصرية

### الألوان الرئيسية

```css
--brand-purple: #6246EA   /* بنفسجي */
--brand-green: #2CB67D    /* أخضر */
--brand-orange: #FF8E3C   /* برتقالي */
--brand-pink: #FF5470     /* وردي */
```

### الخطوط

- **Cairo** - للنصوص العربية
- **Poppins** - للنصوص الإنجليزية

### Border Radius

- **Large**: 28px
- **Medium**: 18px
- **Small**: 12px

## 📄 الأقسام الرئيسية

1. **Hero Section** - قسم البطل مع عنوان جريء وأزرار CTA
2. **Services** - 4 خدمات رئيسية (إعلانات، محتوى، سوشال ميديا، أتمتة)
3. **Why Pyramidia** - 4 مميزات تنافسية
4. **Portfolio** - معرض الأعمال
5. **Stats** - إحصائيات الشركة
6. **Pricing** - 3 باقات تسعير
7. **Testimonials** - آراء العملاء (carousel)
8. **FAQs** - الأسئلة الشائعة
9. **Contact** - نموذج التواصل
10. **Footer** - تذييل الموقع

## 🚀 التثبيت والتشغيل

### المتطلبات

- Node.js 22.x
- pnpm

### خطوات التثبيت

```bash
# 1. استنساخ المشروع
git clone https://github.com/Engmohammedabdo/pyrameda-new-manus.git
cd pyrameda-new-manus

# 2. تثبيت الحزم
pnpm install

# 3. إعداد قاعدة البيانات
pnpm db:push

# 4. تشغيل الخادم التطويري
pnpm dev
```

الموقع سيعمل على: `http://localhost:3000`

## 📝 الأوامر المتاحة

```bash
pnpm dev          # تشغيل الخادم التطويري
pnpm build        # بناء المشروع للإنتاج
pnpm preview      # معاينة البناء
pnpm db:push      # تحديث قاعدة البيانات
pnpm db:studio    # فتح Drizzle Studio
```

## 🔧 التخصيص

### تغيير الألوان

عدّل الألوان في `client/src/index.css`:

```css
:root {
  --brand-purple: 250 71% 60%;
  --brand-green: 159 55% 45%;
  --brand-orange: 25 100% 62%;
  --brand-pink: 352 100% 64%;
}
```

### تغيير المحتوى

عدّل المحتوى في `client/src/pages/Home.tsx`:

```typescript
const services = [
  {
    icon: <Megaphone className="w-10 h-10" />,
    title: "عنوان الخدمة",
    description: "وصف الخدمة",
    color: "purple",
  },
  // ...
];
```

## 📱 التواصل

- **الموقع**: [pyramedia.info](https://pyramedia.info)
- **البريد**: info@pyramedia.ae
- **الهاتف**: +971 XX XXX XXXX
- **الموقع**: دبي، الإمارات العربية المتحدة

## 📄 الترخيص

© 2025 Pyramidia Marketing Agency. جميع الحقوق محفوظة.

## 🙏 شكر خاص

تم بناء هذا المشروع باستخدام:
- [Manus AI](https://manus.im) - منصة تطوير الويب بالذكاء الاصطناعي
- [shadcn/ui](https://ui.shadcn.com) - مكونات UI جميلة
- [Tailwind CSS](https://tailwindcss.com) - إطار عمل CSS
- [Lucide](https://lucide.dev) - أيقونات جميلة

---

**صُنع بـ ❤️ في دبي**
