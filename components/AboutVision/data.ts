import type { AboutVisionItem } from './types';

export const ABOUT_VISION_TITLE = 'رؤيتنا ورسالتنا';

export const ABOUT_VISION_ITEMS: AboutVisionItem[] = [
  {
    icon: 'eye',
    title: 'رؤيتنا',
    description:
      'أن نكون الشريك المرجعي الأكثر موثوقية في بناء جسور تجارية مستدامة تربط الأسواق الزراعية الدولية بقطاع الثروة الحيوانية الإقليمي، وتعزز شراكات استراتيجية طويلة الأمد تسهم في دعم الأمن الغذائي.',
    delay: 0,
  },
  {
    icon: 'target',
    title: 'رسالتنا',
    description:
      'نلتزم ببناء شراكات دولية استراتيجية مع أبرز الموردين العالميين لتأمين أجود الأعلاف الحيوانية والمواد الخام وتوريدها. ومن خلال منظومة مرنة وقادرة على الصمود لسلاسل الإمداد، نلبي احتياجات عملائنا بدقة، ونضمن استمرارية تدفق الأعلاف وفق أعلى معايير الجودة، بما يعزز كفاءتهم التشغيلية في مختلف الظروف.',
    delay: 0.15,
  },
];

export const ABOUT_VISION_TITLE_I18N = {
  ar: ABOUT_VISION_TITLE,
  en: 'Our Vision and Mission',
} as const;

export const ABOUT_VISION_ITEMS_I18N = {
  ar: ABOUT_VISION_ITEMS,
  en: ABOUT_VISION_ITEMS.map((item, index) => ({
    ...item,
    title: ['Our Vision', 'Our Mission'][index],
    description: [
      'To be the region’s most trusted reference partner in building sustainable trade links between international agricultural markets and the regional livestock sector, strengthening long-term strategic partnerships that support food security.',
      'We are committed to building strategic international partnerships with leading global suppliers to secure and supply premium animal feed and raw materials. Through a resilient, flexible supply chain, we meet our customers’ needs accurately and ensure continuity of feed supplies to the highest quality standards, strengthening their operational efficiency in all conditions.',
    ][index],
  })),
} as const;
