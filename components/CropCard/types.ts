import type { CropItem } from '@/lib/cropsData';

export interface CropCardProps {
  crop: CropItem;
  onSelect: (crop: CropItem) => void;
  onRequestQuote: (cropName: string) => void;
}
