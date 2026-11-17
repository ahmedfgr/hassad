import type { AboutImage } from './types';

export const ABOUT_US_CONTENT = {
  title: 'عنّا',
  description:
    'نعمل كشريك استراتيجي يربط بين نخبة الموردين المعتمدين والمزارع ومشاريع الثروة الحيوانية في المنطقة. وعبر منظومة لوجستية متكاملة وعالية الكفاءة، نوفر حلول تغذية مستدامة توازن بين القيمة الغذائية الفائقة والجدوى الاقتصادية، لدعم الأمن الغذائي وتعزيز استمرارية أعمال شركائنا.',
  galleryAriaLabel: 'صور من الحقول الزراعية',
} as const;

export const ABOUT_TAGS = [
  'جودة معتمدة ومسؤولة',
  'إمداد مستدام',
  'شراكات استراتيجية',
] as const;

export const ABOUT_IMAGES: AboutImage[] = [
  {
    src: '/hero_image_2.png',
    alt: 'سنابل القمح في الحقول الزراعية',
  },
  {
    src: '/hero_image_3.png',
    alt: 'مشهد جوي للمزارع والحقول',
  },
];

export const ABOUT_US_CONTENT_I18N = {
  ar: ABOUT_US_CONTENT,
  en: {
    title: 'About Us',
    description:
      'We act as a strategic partner connecting selected, accredited suppliers with farms and livestock projects across the region. Through an integrated, highly efficient logistics network, we provide sustainable feed solutions that balance superior nutritional value with commercial viability, supporting food security and the continuity of our partners’ operations.',
    galleryAriaLabel: 'Agricultural fields and farming',
  },
} as const;

export const ABOUT_TAGS_I18N = {
  ar: ABOUT_TAGS,
  en: [
    'Accredited and responsible quality',
    'Sustainable supply',
    'Strategic partnerships',
  ] as const,
} as const;

export const ABOUT_IMAGES_I18N = {
  ar: ABOUT_IMAGES,
  en: ABOUT_IMAGES.map((image, index) => ({
    ...image,
    alt: ['Wheat ears in agricultural fields', 'Aerial view of farms and fields'][index],
  })),
} as const;
