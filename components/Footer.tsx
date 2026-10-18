'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { THEME_COLORS } from '@/lib/theme';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="footer" className="px-3 sm:px-6 lg:px-10 pb-6 sm:pb-8 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[2.5rem] sm:rounded-[3.5rem] lg:rounded-[4rem] bg-[#111612] text-stone-300 pt-14 sm:pt-16 pb-12 px-5 sm:px-8 lg:px-12 border border-stone-800 relative overflow-hidden"
      >
        {/* Subtle decorative wheat gold ambient glow in the footer */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5B842]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          {/* Pre-Footer Action Box: Light theme matching Clients section with Wheat Gold CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-12 mb-16 text-stone-900"
          >
            <div className="flex flex-col items-center justify-center gap-6 text-center max-w-2xl mx-auto">
              <div>
                <span className="text-xs font-bold text-[#A87913] uppercase tracking-widest block mb-2">
                  انضم لشركائنا
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2.5">
                  ابدأ شراكتك مع حصاد اليوم
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-balance">
                  تواصل معنا للحصول على عروض أسعار تنافسية وجداول توريد أعلاف مخصصة تلبي احتياجات مزرعتك أو مصنعك.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
                <button
                  onClick={onOpenQuoteModal}
                  type="button"
                  className="px-7 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] active:scale-95 rounded-xl border border-[#E5B842] transition-colors whitespace-nowrap cursor-pointer"
                >
                  طلب عرض سعر
                </button>
                <a
                  href="#contact"
                  className="px-6 py-3 text-xs sm:text-sm font-bold text-stone-800 bg-stone-50 hover:bg-stone-100 active:scale-95 border border-stone-200 rounded-xl transition-all whitespace-nowrap"
                >
                  تواصل معنا
                </a>
              </div>
            </div>
          </motion.div>

          {/* Grid: Brand, Quick Links, Contact & Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
            {/* Col 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-white/10 p-1 border border-white/20 flex items-center justify-center backdrop-blur-xs">
                  <Image
                    src="/logo.png"
                    alt="شعار حصاد"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white">حصاد</span>
                  <span className="text-[11px] font-semibold text-[#F3D78A]">
                    لتوريد الأعلاف
                  </span>
                </div>
              </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed text-balance">
              نعمل في شركة حصاد على توريد وتوفير أجود الأعلاف الخضراء والجافة ومكونات العلف للمزارع ومصانع الأعلاف، وفق مواصفات جودة معتمدة وشراكات تجارية موثوقة.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="منصة إكس"
                className="px-3 h-9 rounded-lg bg-stone-800 hover:bg-[#E5B842] hover:text-stone-950 text-stone-400 transition-colors flex items-center justify-center text-[11px] font-bold"
              >
                إكس
              </a>
              <a
                href="#"
                aria-label="لينكد إن"
                className="px-3 h-9 rounded-lg bg-stone-800 hover:bg-[#E5B842] hover:text-stone-950 text-stone-400 transition-colors flex items-center justify-center text-[11px] font-bold"
              >
                لينكد
              </a>
              <a
                href="#"
                aria-label="إنستغرام"
                className="px-3 h-9 rounded-lg bg-stone-800 hover:bg-[#E5B842] hover:text-stone-950 text-stone-400 transition-colors flex items-center justify-center text-[11px] font-bold"
              >
                إنستغرام
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">روابط سريعة</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#hero" className="hover:text-[#F3D78A] transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F3D78A] transition-colors">من نحن</a>
              </li>
              <li>
                <a href="/products" className="hover:text-[#F3D78A] transition-colors">منتجات الأعلاف</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#F3D78A] transition-colors">عملاؤنا</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F3D78A] transition-colors">اتصل بنا</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">تواصل معنا</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E5B842] shrink-0" />
                <span>الإمارات العربية المتحدة</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E5B842] shrink-0" />
                <a href="mailto:info@hassadfodders.com" className="hover:text-white transition-colors">
                  <span dir="ltr">info@hassadfodders.com</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5B842] shrink-0" />
                <a href="tel:+971544428196" className="hover:text-white transition-colors">
                  <span dir="ltr">+971 54 442 8196</span>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-stone-300 block mb-2">
                النشرة الدورية لأسواق الأعلاف
              </span>
              {subscribed ? (
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-600/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>شكراً لاشتراكك في نشرة حصاد!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="flex-1 px-3 py-2 text-xs bg-stone-900 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-[#E5B842]"
                    dir="rtl"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-[#E5B842] hover:bg-[#F0C446] text-stone-950 rounded-lg transition-colors cursor-pointer shrink-0"
                    aria-label="اشتراك"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Sub-Footer Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} شركة حصاد لتوريد الأعلاف. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">سياسة الخصوصية</a>
            <span aria-hidden="true">•</span>
            <a href="#" className="hover:text-stone-300 transition-colors">الشروط والأحكام</a>
            <span aria-hidden="true">•</span>
            <a href="#" className="hover:text-stone-300 transition-colors">شهادات الجودة</a>
          </div>
        </div>
      </div>
    </motion.div>
  </footer>
);
}
