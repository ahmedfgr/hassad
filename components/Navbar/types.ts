export interface NavbarProps {
  onOpenQuoteModal: (cropName?: string) => void;
}

export interface NavbarLink {
  id: 'home' | 'about' | 'products' | 'contact';
  href: string;
  label: string;
  badge?: string;
}

export interface NavbarQuickContact {
  href: string;
  value: string;
  icon: 'phone' | 'mail';
}
