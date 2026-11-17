import type { NavbarLink, NavbarQuickContact } from './types';

export const NAVBAR_BRAND = {
  href: '/',
  ariaLabel: 'حصاد - الصفحة الرئيسية',
  logoSrc: '/logo.png',
  logoAlt: 'شعار حصاد',
  name: 'حصاد',
  subtitle: 'لتوريد الأعلاف',
} as const;

export const NAVBAR_LINKS: readonly NavbarLink[] = [
  { id: 'home', href: '/#hero', label: 'الرئيسية' },
  { id: 'about', href: '/#about-us', label: 'من نحن' },
  { id: 'products', href: '/products', label: 'منتجاتنا', badge: 'الكتالوج' },
  { id: 'contact', href: '/#contact', label: 'اتصل بنا' },
];

export const NAVBAR_QUICK_CONTACTS: readonly NavbarQuickContact[] = [
  { href: 'tel:+971544428196', value: '+971 54 442 8196', icon: 'phone' },
  { href: 'mailto:info@hassadfodders.com', value: 'info@hassadfodders.com', icon: 'mail' },
];

export const NAVBAR_COPY = {
  quoteCta: 'طلب عرض سعر',
  menuAriaLabel: 'القائمة الرئيسية',
  closeAriaLabel: 'إغلاق القائمة',
  sectionHeading: 'أقسام المنصة',
  productsMobileLabel: 'منتجات الأعلاف',
  quickContactHeading: 'تواصل مباشر وسريع',
  instantQuoteCta: 'طلب عرض سعر فوري',
} as const;

export const NAVBAR_BRAND_I18N = {
  ar: NAVBAR_BRAND,
  en: {
    href: '/',
    ariaLabel: 'Hassad — Home',
    logoSrc: '/logo.png',
    logoAlt: 'Hassad logo',
    name: 'HASSAD',
    subtitle: 'Fodder Supply',
  },
} as const;

export const NAVBAR_LINKS_I18N = {
  ar: NAVBAR_LINKS,
  en: NAVBAR_LINKS.map((link, index) => ({
    ...link,
    label: ['Home', 'About Us', 'Our Products', 'Contact Us'][index],
    ...(index === 2 ? { badge: 'Catalogue' } : {}),
  })),
} as const;

export const NAVBAR_COPY_I18N = {
  ar: NAVBAR_COPY,
  en: {
    quoteCta: 'Request a Quote',
    menuAriaLabel: 'Main menu',
    closeAriaLabel: 'Close menu',
    sectionHeading: 'Website Sections',
    productsMobileLabel: 'Feed Products',
    quickContactHeading: 'Quick and Direct Contact',
    instantQuoteCta: 'Request an Instant Quote',
  },
} as const;

export const NAVBAR_LANGUAGE_I18N = {
  ar: {
    label: 'Switch to English',
    shortLabel: 'EN',
  },
  en: {
    label: 'التبديل إلى العربية',
    shortLabel: 'عربي',
  },
} as const;
