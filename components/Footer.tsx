'use client';

import React, { useState } from 'react';
import { Wheat, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

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
    <footer id="footer" className="bg-[#111612] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Action Box: Styled with the Light Theme matching the Clients Section */}
        <div className="rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-12 mb-16 shadow-sm text-stone-900">
          <div className="flex flex-col items-center justify-center gap-6 text-center max-w-2xl mx-auto">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
                انضم لشركائنا
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2.5">
                ابدأ شراكتك معنا اليوم
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-balance">
                تواصل معنا للحصول على عروض أسعار تنافسية وجداول توريد مخصصة تلبي احتياجات منشأتك ومشاريعك التجارية.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <button
                onClick={onOpenQuoteModal}
                type="button"
                className="px-7 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 active:scale-95 rounded-xl transition-all shadow-sm shadow-amber-500/20 whitespace-nowrap cursor-pointer"
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
        </div>

        {/* 4-Column Grid: Brand, Quick Links, Services, Contact & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 shadow-sm">
                <Wheat className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">محاصيل</span>
                <span className="text-[10px] tracking-widest font-semibold text-stone-400 uppercase font-mono">
                  MAHASEEL AGRI
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed text-balance">
              نحن نؤمن بأن الزراعة أساس لمستقبل أفضل. نعمل على توفير محاصيل زراعية نقية وعالية الجودة لدعم منظومة الأمن الغذائي وبناء شراكات تجارية موثوقة حول العالم.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="منصة إكس"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-400 transition-colors flex items-center justify-center text-xs font-bold"
              >
                X
              </a>
              <a
                href="#"
                aria-label="لينكد إن"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-400 transition-colors flex items-center justify-center text-xs font-bold"
              >
                in
              </a>
              <a
                href="#"
                aria-label="إنستغرام"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-400 transition-colors flex items-center justify-center text-xs font-bold"
              >
                IG
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) - Without Sustainability */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">روابط سريعة</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">من نحن</a>
              </li>
              <li>
                <a href="#crops" className="hover:text-amber-400 transition-colors">منتجاتنا</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-amber-400 transition-colors">عملاؤنا</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">اتصل بنا</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">خدماتنا التوريدية</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>توريد المحاصيل الاستراتيجية</li>
              <li>إدارة وتأمين سلاسل الإمداد</li>
              <li>الفحص المخبري وضبط الجودة</li>
              <li>الاستشارات الزراعية الحقلية</li>
              <li>حلول التخزين الصومعي والشحن المفرغ</li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">تواصل معنا</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span dir="ltr">info@mahaseel-agri.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span dir="ltr">+966 11 234 5678</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-stone-300 block mb-2">
                النشرة الدورية لأسواق الحبوب
              </span>
              {subscribed ? (
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-600/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>شكراً لاشتراكك في نشرة محاصيل!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="flex-1 px-3 py-2 text-xs bg-stone-900 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                    dir="rtl"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg transition-colors cursor-pointer shrink-0"
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
            © {new Date().getFullYear()} شركة محاصيل الزراعية. جميع الحقوق محفوظة.
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
    </footer>
  );
}
