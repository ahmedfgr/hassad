import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import {LanguageProvider} from '@/components/LanguageProvider/component';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'شركة حصاد لتوريد الأعلاف',
  description: 'الموقع الرسمي لشركة حصاد المتخصصة في توريد وتوفير أجود الأعلاف الخضراء والجافة ومكونات العلف لمزارع الإنتاج الحيواني ومصانع الأعلاف.',
  openGraph: {
    title: 'شركة حصاد لتوريد الأعلاف',
    description: 'الموقع الرسمي لشركة حصاد المتخصصة في توريد وتوفير أجود الأعلاف الخضراء والجافة ومكونات العلف لمزارع الإنتاج الحيواني ومصانع الأعلاف.',
    type: 'website',
    locale: 'ar_AE',
    alternateLocale: ['en_AE'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة حصاد لتوريد الأعلاف',
    description: 'الموقع الرسمي لشركة حصاد المتخصصة في توريد وتوفير أجود الأعلاف الخضراء والجافة ومكونات العلف لمزارع الإنتاج الحيواني ومصانع الأعلاف.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`scroll-smooth ${cairo.className}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FDFDFC] text-stone-900 font-sans antialiased selection:bg-[#E5C378] selection:text-stone-950"
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
