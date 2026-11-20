import type { ContactSectionCard } from './types';

export const CONTACT_SECTION_COPY = {
  badge: 'تواصل مباشر مع حصاد',
  title: 'قنوات الاتصال والشراكة',
  description:
    'يسعد فريقنا التجاري واللوجستي بخدمتكم وتوفير عروض أسعار الأعلاف واتفاقيات التوريد على مدار الساعة.',
  heading: 'تواصل معنا',
  englishHeading: 'Contact Us',
  brand: 'HASSAD',
} as const;

export const CONTACT_SECTION_CARDS: readonly ContactSectionCard[] = [
  {
    href: 'mailto:info@hassadfodders.com',
    icon: 'mail',
    label: 'البريد الإلكتروني',
    value: 'info@hassadfodders.com',
  },
  {
    href: 'https://wa.me/971544428196',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: 'message-circle',
    label: 'الهاتف والواتساب الموحد',
    value: '+971 54 442 8196',
  },
];

export const CONTACT_SECTION_COPY_I18N = {
  ar: CONTACT_SECTION_COPY,
  en: {
    badge: 'Connect directly with Hassad',
    title: 'Contact and Partnership Channels',
    description:
      'Our commercial and logistics team is ready to provide feed quotations and supply agreements around the clock.',
    heading: 'Contact Us',
    englishHeading: 'Contact Us',
    brand: 'HASSAD',
  },
} as const;

export const CONTACT_SECTION_CARDS_I18N = {
  ar: CONTACT_SECTION_CARDS,
  en: CONTACT_SECTION_CARDS.map((card, index) => ({
    ...card,
    label: ['Email', 'Phone and Unified WhatsApp'][index],
  })),
} as const;
