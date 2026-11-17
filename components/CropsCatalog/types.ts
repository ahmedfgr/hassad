import type { CropItem } from '@/lib/cropsData';

export interface CropsCatalogProps {
  onSelectCrop: (crop: CropItem) => void;
  onRequestQuote: (cropName?: string) => void;
}

export type CategoryType = 'all' | 'grains' | 'seeds' | 'fodder' | 'other';

export interface CategoryOption {
  id: CategoryType;
  label: string;
}
