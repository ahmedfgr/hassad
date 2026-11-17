export interface ContactSectionCard {
  href: string;
  target?: '_blank';
  rel?: 'noopener noreferrer';
  icon: 'mail' | 'message-circle';
  label: string;
  value: string;
}
