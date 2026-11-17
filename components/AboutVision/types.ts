export type AboutVisionProps = Record<string, never>;

export type AboutVisionIcon = 'eye' | 'target';

export interface AboutVisionItem {
  icon: AboutVisionIcon;
  title: string;
  description: string;
  delay: number;
}
