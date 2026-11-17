import type { CropItem, CropSpecification } from '@/lib/cropsData';

export interface ProductDetailModalProps {
  crop: CropItem | null;
  onClose: () => void;
  onRequestQuote: (cropName: string) => void;
}

export type SpecificationIcon = 'check' | 'droplets' | 'box' | 'target';

export interface SpecificationField {
  key: keyof CropSpecification;
  label: string;
  icon: SpecificationIcon;
  iconClassName: string;
  fallbackKey?: keyof CropSpecification;
}
