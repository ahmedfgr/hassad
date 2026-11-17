export const CROP_CARD_COPY = {
  specificationsLabel: 'المواصفات',
  imageSizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
} as const;

export const CROP_CARD_COPY_I18N = {
  ar: CROP_CARD_COPY,
  en: {
    specificationsLabel: 'Specifications',
    imageSizes: CROP_CARD_COPY.imageSizes,
  },
} as const;
