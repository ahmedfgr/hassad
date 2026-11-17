export type Locale = 'ar' | 'en';

export type Localized<T> = Record<Locale, T>;

export type TextDirection = 'ltr' | 'rtl';

export const LOCALE_STORAGE_KEY = 'hassad-locale';

export function getLocaleDirection(locale: Locale): TextDirection {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
