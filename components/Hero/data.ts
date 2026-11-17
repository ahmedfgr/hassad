import type { HeroImage } from './types';

export const HERO_IMAGES: HeroImage[] = [
  {
    src: '/hero_image.png',
    alt: 'حقول أعلاف حصاد الخضراء',
  },
  {
    src: '/hero_image_2.png',
    alt: 'بالات الأعلاف الجافة الجاهزة للتوريد',
  },
  {
    src: '/hero_image_3.png',
    alt: 'حصاد الأعلاف وسلاسل الإمداد',
  },
];

export const HERO_CONTENT = {
  companyName: 'شركة حصاد لتوريد الأعلاف',
  titleLead: 'أعلاف نقية.',
  titleHighlight: 'توريد موثوق ومستدام.',
  description:
    'نوفر ونورّد أجود الأعلاف الخضراء والجافة ومكونات العلف للمزارع ومصانع الأعلاف وفق أعلى مقاييس النقاء والمواصفات المعتمدة.',
  exploreCropsLabel: 'استعراض المنتجات',
  quoteLabel: 'طلب عرض سعر',
  scrollAriaLabel: 'الانتقال إلى تفاصيل الرؤية والمنتجات',
} as const;

export const HERO_IMAGES_I18N = {
  ar: HERO_IMAGES,
  en: HERO_IMAGES.map((image, index) => ({
    ...image,
    alt: [
      'Hassad green fodder fields',
      'Dry fodder bales ready for supply',
      'Fodder harvesting and supply chains',
    ][index],
  })),
} as const;

export const HERO_CONTENT_I18N = {
  ar: HERO_CONTENT,
  en: {
    companyName: 'Hassad Fodder Supply',
    titleLead: 'Pure Feed.',
    titleHighlight: 'Reliable, Sustainable Supply.',
    description:
      'We source and supply premium green and dried fodder and feed ingredients to farms and feed manufacturers in line with the highest standards of purity and accredited specifications.',
    exploreCropsLabel: 'Explore Products',
    quoteLabel: 'Request a Quote',
    scrollAriaLabel: 'Go to our vision and products',
  },
} as const;
