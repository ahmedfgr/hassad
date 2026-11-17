import type { FooterContact, FooterLink } from './types';

export const FOOTER_BRAND = {
  logoSrc: '/logo.png',
  logoAlt: 'شعار حصاد',
  name: 'حصاد',
  subtitle: 'لتوريد الأعلاف',
  description:
    'نعمل في شركة حصاد على توريد وتوفير أجود الأعلاف الخضراء والجافة ومكونات العلف للمزارع ومصانع الأعلاف، وفق مواصفات جودة معتمدة وشراكات تجارية موثوقة.',
} as const;

export const FOOTER_PARTNERSHIP = {
  eyebrow: 'انضم لشركائنا',
  title: 'ابدأ شراكتك مع حصاد اليوم',
  description:
    'تواصل معنا للحصول على عروض أسعار تنافسية وجداول توريد أعلاف مخصصة تلبي احتياجات مزرعتك أو مصنعك.',
  quoteLabel: 'طلب عرض سعر',
  contactLabel: 'تواصل معنا',
  contactHref: '#contact',
} as const;

export const FOOTER_SOCIAL_LINKS: readonly FooterLink[] = [
  { href: '#', label: 'إكس', ariaLabel: 'منصة إكس' },
  { href: '#', label: 'لينكد', ariaLabel: 'لينكد إن' },
  { href: '#', label: 'إنستغرام', ariaLabel: 'إنستغرام' },
];

export const FOOTER_QUICK_LINKS: readonly FooterLink[] = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#about-us', label: 'من نحن' },
  { href: '/products', label: 'منتجات الأعلاف' },
  { href: '#contact', label: 'اتصل بنا' },
];

export const FOOTER_CONTACTS: readonly FooterContact[] = [
  { value: 'الإمارات العربية المتحدة', icon: 'location' },
  {
    href: 'mailto:info@hassadfodders.com',
    value: 'info@hassadfodders.com',
    icon: 'mail',
    direction: 'ltr',
  },
  {
    href: 'tel:+971544428196',
    value: '+971 54 442 8196',
    icon: 'phone',
    direction: 'ltr',
  },
];

export const FOOTER_COPY = {
  quickLinksTitle: 'روابط سريعة',
  contactTitle: 'تواصل معنا',
  newsletterTitle: 'النشرة الدورية لأسواق الأعلاف',
  newsletterSuccess: 'شكراً لاشتراكك في نشرة حصاد!',
  newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
  newsletterAriaLabel: 'اشتراك',
  copyright: 'شركة حصاد لتوريد الأعلاف. جميع الحقوق محفوظة.',
  legalLinks: ['سياسة الخصوصية', 'الشروط والأحكام', 'شهادات الجودة'] as const,
} as const;

export const FOOTER_BRAND_I18N = {
  ar: FOOTER_BRAND,
  en: {
    logoSrc: FOOTER_BRAND.logoSrc,
    logoAlt: 'Hassad logo',
    name: 'HASSAD',
    subtitle: 'Fodder Supply',
    description:
      'At Hassad, we supply premium green and dried fodder and feed ingredients to farms and feed manufacturers, backed by accredited quality specifications and reliable commercial partnerships.',
  },
} as const;

export const FOOTER_PARTNERSHIP_I18N = {
  ar: FOOTER_PARTNERSHIP,
  en: {
    eyebrow: 'Join our partners',
    title: 'Start your partnership with Hassad today',
    description:
      'Contact us for competitive quotations and tailored feed supply schedules that meet your farm or factory requirements.',
    quoteLabel: 'Request a Quote',
    contactLabel: 'Contact Us',
    contactHref: '#contact',
  },
} as const;

export const FOOTER_SOCIAL_LINKS_I18N = {
  ar: FOOTER_SOCIAL_LINKS,
  en: FOOTER_SOCIAL_LINKS.map((link, index) => ({
    ...link,
    label: ['X', 'LinkedIn', 'Instagram'][index],
    ariaLabel: ['X platform', 'LinkedIn', 'Instagram'][index],
  })),
} as const;

export const FOOTER_QUICK_LINKS_I18N = {
  ar: FOOTER_QUICK_LINKS,
  en: FOOTER_QUICK_LINKS.map((link, index) => ({
    ...link,
    label: ['Home', 'About Us', 'Feed Products', 'Contact Us'][index],
  })),
} as const;

export const FOOTER_CONTACTS_I18N = {
  ar: FOOTER_CONTACTS,
  en: FOOTER_CONTACTS.map((contact, index) => ({
    ...contact,
    value: ['United Arab Emirates', contact.value, contact.value][index],
  })),
} as const;

export const FOOTER_COPY_I18N = {
  ar: FOOTER_COPY,
  en: {
    quickLinksTitle: 'Quick Links',
    contactTitle: 'Contact Us',
    newsletterTitle: 'Feed Market Newsletter',
    newsletterSuccess: 'Thank you for subscribing to the Hassad newsletter.',
    newsletterPlaceholder: 'Enter your email address',
    newsletterAriaLabel: 'Subscribe',
    copyright: 'Hassad Fodder Supply. All rights reserved.',
    legalLinks: ['Privacy Policy', 'Terms and Conditions', 'Quality Certifications'] as const,
  },
} as const;
