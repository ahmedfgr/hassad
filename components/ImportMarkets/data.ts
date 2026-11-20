import type { ImportMarket } from './types';

export const IMPORT_MARKETS_CONTENT = {
  eyebrow: 'مصادرنا العالمية',
  title: 'أسواق نستورد منها',
  description: 'نعمل مع أسواق متعددة لتأمين احتياجات عملائنا من الأعلاف ومكوناتها.',
} as const;

export const IMPORT_MARKETS: ImportMarket[] = [
  { name: 'الولايات المتحدة', flag: '/flagCountires/US.png' },
  { name: 'تنزانيا', flag: '/flagCountires/TNZ.png' },
  { name: 'مصر', flag: '/flagCountires/EG.png' },
  { name: 'باكستان', flag: '/flagCountires/PS.png' },
  { name: 'الإمارات', flag: '/flagCountires/AE.png' },
  { name: 'إسبانيا', flag: '/flagCountires/spain.png' },
];

export const IMPORT_MARKETS_CONTENT_I18N = {
  ar: IMPORT_MARKETS_CONTENT,
  en: {
    eyebrow: 'Our Global Sources',
    title: 'Our Import Markets',
    description:
      'We work with diverse markets to secure our customers’ requirements for animal feed and its ingredients.',
  },
} as const;

export const IMPORT_MARKETS_I18N = {
  ar: IMPORT_MARKETS,
  en: IMPORT_MARKETS.map((market, index) => ({
    ...market,
    name: ['United States', 'Tanzania', 'Egypt', 'Pakistan', 'United Arab Emirates', 'Spain'][index],
  })),
} as const;
