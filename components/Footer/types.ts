export interface FooterProps {
  onOpenQuoteModal: () => void;
}

export interface FooterLink {
  href: string;
  label: string;
  ariaLabel?: string;
}

export interface FooterContact {
  href?: string;
  value: string;
  icon: 'location' | 'mail' | 'phone';
  direction?: 'ltr';
}
