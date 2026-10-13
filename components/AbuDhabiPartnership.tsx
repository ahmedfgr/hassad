'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Globe2, Building } from 'lucide-react';

interface AbuDhabiPartnershipProps {
  onOpenQuote: () => void;
}

export default function AbuDhabiPartnership({ onOpenQuote }: AbuDhabiPartnershipProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const partnerImageUrl = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80';

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Right Column in RTL: Image on the right */}
          <div className="lg:col-span-6 order-1 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden border border-stone-200/80 shadow-lg group">
              {!imgFailed ? (
                <Image
                  src={partnerImageUrl}
                  alt="شراكة شركة حصاد مع منصة أبوظبي للتجارة الزراعية"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-amber-950 flex items-center justify-center text-white">
                  <Building className="w-20 h-20 text-[#E5B842] opacity-60" />
                </div>
              )}

              {/* Gentle gradient scrim at bottom of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 right-6 left-6 z-10 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#F3D78A] mb-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#E5B842]" />
                  <span>محور التوزيع الإقليمي • أبوظبي</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  منصة أبوظبي للتجارة وسلاسل الإمداد الزراعي
                </h4>
              </div>
            </div>
          </div>

          {/* Left Column in RTL: Condensed Text on the left */}
          <div className="lg:col-span-6 order-2 lg:order-2 flex flex-col justify-center">
            {/* Tag / Kicker in Bright Gold */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C99726] uppercase tracking-widest mb-2.5">
              <span>شراكة استراتيجية</span>
            </div>

            {/* Concise Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug mb-3.5">
              تكامل سلاسل التوريد <br />
              <span className="text-[#DFB235]">مع منصة التجارة الذكية بأبوظبي</span>
            </h2>

            {/* Condensed Paragraph */}
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 text-balance">
              ربط رقمي مباشر لتسريع تدفق المحاصيل المعتمدة من شركة حصاد إلى أسواق دولة الإمارات والمنطقة بأعلى معايير الكفاءة والأمان الغذائي.
            </p>

            {/* Action button in Bright Gold */}
            <div>
              <button
                onClick={onOpenQuote}
                type="button"
                className="px-6 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#E5B842]/25 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>طلب شراكة وتوريد عبر المنصة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
