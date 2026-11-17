import type { ReactNode } from 'react';

export interface HeroProps {
  onExploreCrops: () => void;
  onOpenAbout?: () => void;
  onOpenQuote: () => void;
}

export interface PaperBackgroundProps {
  children: ReactNode;
}

export interface HeroImage {
  src: string;
  alt: string;
}
