import type { Localized } from '@/lib/i18n';

type FilterCategoryId = 'all' | 'fodder' | 'seeds' | 'grains';

interface ProductsPageCopy {
  backHome: string;
  breadcrumb: string;
  supplyBadge: string;
  title: string;
  description: string;
  filters: Record<FilterCategoryId, string>;
  count: {
    showing: string;
    of: string;
    products: string;
  };
  emptyTitle: string;
  showAll: string;
}

export const FILTER_CATEGORY_IDS = [
  'all',
  'fodder',
  'seeds',
  'grains',
] as const satisfies readonly FilterCategoryId[];

export const PRODUCTS_PAGE_COPY: Localized<ProductsPageCopy> = {
  ar: {
    backHome: 'العودة للرئيسية',
    breadcrumb: 'كتالوج الأعلاف',
    supplyBadge: 'توريد موثوق طوال العام',
    title: 'كافة منتجات الأعلاف',
    description:
      'نوفر ونورّد أجود الأعلاف الخضراء والجافة ومكونات العلف وفق أعلى معايير الجودة، مع إمكانية التوريد المباشر لكبرى مزارع الإنتاج الحيواني ومصانع الأعلاف.',
    filters: {
      all: 'جميع المنتجات',
      fodder: 'الأعلاف',
      seeds: 'بذور ومكونات الأعلاف',
      grains: 'حبوب الأعلاف',
    },
    count: {
      showing: 'عرض',
      of: 'من أصل',
      products: 'منتج',
    },
    emptyTitle: 'لا توجد منتجات ضمن هذا التصنيف حالياً',
    showAll: 'عرض كل المنتجات',
  },
  en: {
    backHome: 'Back to home',
    breadcrumb: 'Fodder catalogue',
    supplyBadge: 'Reliable supply all year round',
    title: 'All Fodder Products',
    description:
      'We provide and supply premium green and dry fodder and feed ingredients to the highest quality standards, with direct delivery available to major livestock farms and feed manufacturers.',
    filters: {
      all: 'All products',
      fodder: 'Fodder',
      seeds: 'Seeds and feed ingredients',
      grains: 'Feed grains',
    },
    count: {
      showing: 'Showing',
      of: 'of',
      products: 'products',
    },
    emptyTitle: 'There are currently no products in this category',
    showAll: 'Show all products',
  },
};
