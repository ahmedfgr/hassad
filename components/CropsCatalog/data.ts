import type { CategoryOption } from './types';

export const CROP_CATEGORIES: CategoryOption[] = [
  { id: 'all', label: 'الكل' },
  { id: 'fodder', label: 'الأعلاف' },
  { id: 'grains', label: 'حبوب الأعلاف' },
  { id: 'seeds', label: 'بذور ومكونات' },
];

export const CATALOG_COPY = {
  eyebrow: 'أعلاف حصاد',
  title: 'أصناف منتقاة بأعلى معايير النقاء والجودة',
  filterAriaLabel: 'تصفية الأعلاف حسب الفئة',
  catalogLink: 'الكتالوج',
} as const;

export const CROP_CATEGORIES_I18N = {
  ar: CROP_CATEGORIES,
  en: CROP_CATEGORIES.map((category) => ({
    ...category,
    label: {
      all: 'All',
      fodder: 'Animal Feed',
      grains: 'Feed Grains',
      seeds: 'Seeds and Ingredients',
      other: 'Other Products',
    }[category.id],
  })),
} as const;

export const CATALOG_COPY_I18N = {
  ar: CATALOG_COPY,
  en: {
    eyebrow: 'Hassad Feeds',
    title: 'Selected varieties meeting the highest standards of purity and quality',
    filterAriaLabel: 'Filter feed products by category',
    catalogLink: 'Catalogue',
  },
} as const;
