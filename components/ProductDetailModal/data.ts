import type { SpecificationField } from './types';

export const PRODUCT_DETAIL_COPY = {
  closeAriaLabel: 'إغلاق النافذة',
  specificationsTitle: 'المواصفات الأساسية المعتمدة',
  close: 'إغلاق',
  requestQuote: 'طلب تسعير لهذا المنتج',
} as const;

export const PRODUCT_SPECIFICATION_FIELDS: SpecificationField[] = [
  {
    key: 'purity',
    label: 'نسبة النقاء',
    icon: 'check',
    iconClassName: 'text-[#E5B842]',
  },
  {
    key: 'moisture',
    label: 'الرطوبة القصوى',
    icon: 'droplets',
    iconClassName: 'text-blue-600',
  },
  {
    key: 'packaging',
    label: 'التعبئة',
    icon: 'box',
    iconClassName: 'text-[#A87913]',
  },
  {
    key: 'origin',
    label: 'بلد المنشأ',
    icon: 'target',
    iconClassName: 'text-stone-600',
    fallbackKey: 'standard',
  },
];

export const PRODUCT_DETAIL_COPY_I18N = {
  ar: PRODUCT_DETAIL_COPY,
  en: {
    closeAriaLabel: 'Close dialog',
    specificationsTitle: 'Accredited Core Specifications',
    close: 'Close',
    requestQuote: 'Request a quote for this product',
  },
} as const;

export const PRODUCT_SPECIFICATION_FIELDS_I18N = {
  ar: PRODUCT_SPECIFICATION_FIELDS,
  en: PRODUCT_SPECIFICATION_FIELDS.map((field, index) => ({
    ...field,
    label: ['Purity', 'Maximum Moisture', 'Packaging', 'Country of Origin'][index],
  })),
} as const;
