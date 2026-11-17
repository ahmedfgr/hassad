'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';
import {
  getLocaleDirection,
  LOCALE_STORAGE_KEY,
  type Locale,
  type Localized,
  type TextDirection,
} from '@/lib/i18n';

const SITE_METADATA: Localized<{title: string; description: string}> = {
  ar: {
    title: 'شركة حصاد لتوريد الأعلاف',
    description:
      'الموقع الرسمي لشركة حصاد المتخصصة في توريد وتوفير أجود الأعلاف الخضراء والجافة ومكونات العلف لمزارع الإنتاج الحيواني ومصانع الأعلاف.',
  },
  en: {
    title: 'Hassad Fodder Supply',
    description:
      'The official website of Hassad, specializing in supplying high-quality green and dry fodder and feed ingredients to livestock farms and feed manufacturers.',
  },
};

interface LanguageContextValue {
  locale: Locale;
  direction: TextDirection;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

function isLocale(value: string | null): value is Locale {
  return value === 'ar' || value === 'en';
}

const localeListeners = new Set<() => void>();
let sessionLocale: Locale = 'ar';

function readLocale(): Locale {
  try {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(storedLocale) ? storedLocale : sessionLocale;
  } catch {
    return sessionLocale;
  }
}

function subscribeToLocale(listener: () => void) {
  localeListeners.add(listener);
  const handleStorage = (event: StorageEvent) => {
    if (event.key === LOCALE_STORAGE_KEY || event.key === null) {
      listener();
    }
  };
  window.addEventListener('storage', handleStorage);

  return () => {
    localeListeners.delete(listener);
    window.removeEventListener('storage', handleStorage);
  };
}

function updateMetaContent(selector: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    const [attribute, value] = selector
      .replace(/^meta\[/, '')
      .replace(/\]$/, '')
      .split('=');
    element = document.createElement('meta');
    element.setAttribute(attribute, value.replace(/^["']|["']$/g, ''));
    document.head.appendChild(element);
  }

  if (element.content !== content) {
    element.content = content;
  }
}

export function LanguageProvider({children}: {children: ReactNode}) {
  const pathname = usePathname();
  const locale = useSyncExternalStore<Locale>(
    subscribeToLocale,
    readLocale,
    () => 'ar',
  );

  const setLocale = useCallback((nextLocale: Locale) => {
    sessionLocale = nextLocale;
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {
      // The selected language still applies for the current session.
    }
    localeListeners.forEach((listener) => listener());
  }, []);

  useEffect(() => {
    const direction = getLocaleDirection(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;

    const metadata = SITE_METADATA[locale];
    const syncMetadata = () => {
      if (document.title !== metadata.title) {
        document.title = metadata.title;
      }
      updateMetaContent('meta[name="description"]', metadata.description);
      updateMetaContent('meta[property="og:title"]', metadata.title);
      updateMetaContent('meta[property="og:description"]', metadata.description);
      updateMetaContent('meta[name="twitter:title"]', metadata.title);
      updateMetaContent('meta[name="twitter:description"]', metadata.description);
    };

    syncMetadata();
    const observer = new MutationObserver(syncMetadata);
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['content'],
    });

    return () => observer.disconnect();
  }, [locale, pathname]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      direction: getLocaleDirection(locale),
      setLocale,
      toggleLocale: () =>
        setLocale(locale === 'ar' ? 'en' : 'ar'),
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
