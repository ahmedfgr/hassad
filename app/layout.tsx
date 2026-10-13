import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'شركة حصاد الزراعية | HSSAD',
  description: 'الموقع الرسمي لشركة حصاد الزراعية المتخصصة في إنتاج وتوريد أجود المحاصيل الغذائية والأعلاف والأمن الغذائي المستدام.',
  openGraph: {
    title: 'شركة حصاد الزراعية | HSSAD',
    description: 'الموقع الرسمي لشركة حصاد الزراعية المتخصصة في إنتاج وتوريد أجود المحاصيل الغذائية والأعلاف والأمن الغذائي المستدام.',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة حصاد الزراعية | HSSAD',
    description: 'الموقع الرسمي لشركة حصاد الزراعية المتخصصة في إنتاج وتوريد أجود المحاصيل الغذائية والأعلاف والأمن الغذائي المستدام.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={`scroll-smooth ${cairo.className}`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FDFDFC] text-stone-900 font-sans antialiased selection:bg-[#E5C378] selection:text-stone-950"
      >
        {children}
      </body>
    </html>
  );
}
