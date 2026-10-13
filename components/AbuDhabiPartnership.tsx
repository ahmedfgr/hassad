'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ShieldCheck, Globe2, Building } from 'lucide-react';

interface AbuDhabiPartnershipProps {
  onOpenQuote: () => void;
}

export default function AbuDhabiPartnership({ onOpenQuote }: AbuDhabiPartnershipProps) {
  const [imgFailed, setImgFailed] = useState(false);

  // Modern Abu Dhabi logistics / architectural agricultural hub visual
  const partnerImageUrl = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80';

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Right Column in RTL: Image on the right */}
          <div className="lg:col-span-6 order-1 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden border border-stone-200/80 shadow-xl group">
              {!imgFailed ? (
                <Image
                  src={partnerImageUrl}
                  alt="شراكة منصة أبوظبي للتجارة الزراعية"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-amber-950 flex items-center justify-center text-white">
                  <Building className="w-20 h-20 text-amber-400 opacity-60" />
                </div>
              )}

              {/* Gentle gradient scrim at bottom of image with badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 right-6 left-6 z-10 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300 mb-2">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>محور التوزيع الإقليمي • أبوظبي</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  منصة أبوظبي للتجارة وسلاسل الإمداد الزراعي
                </h4>
              </div>
            </div>
          </div>

          {/* Left Column in RTL: Text on the left */}
          <div className="lg:col-span-6 order-2 lg:order-2 flex flex-col justify-center">
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">
              <span>شراكة استراتيجية</span>
              <span aria-hidden="true" className="text-amber-400">•</span>
              <span>مدينة أبوظبي</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-5">
              تكامل سلاسل التوريد <br />
              <span className="text-amber-600">مع منصة التجارة الذكية بأبوظبي</span>
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-8 text-balance">
              انطلاقاً من تعزيز منظومة الأمن الغذائي الخليجي، ترتبط شركة محاصيل بشراكة استراتيجية مع منصة التجارة الزراعية في أبوظبي؛ لتسريع تدفق شحنات الحبوب والبذور وتسهيل الربط المباشر مع أسواق دولة الإمارات والمنطقة.
            </p>

            {/* Value Highlights */}
            <div className="space-y-3.5 mb-9">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-stone-700">
                  ربط لوجستي رقمي لتتبع الشحنات والمواصفات من المصدر حتى الميناء
                </span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-stone-700">
                  اعتماد موحد لشهادات الجودة والسلامة الغذائية المعترف بها إقليمياً
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-stone-700">
                  عقود توريد مرنة تدعم احتياجات الصوامع والمطاحن الخليجية
                </span>
              </div>
            </div>

            {/* Action button */}
            <div>
              <button
                onClick={onOpenQuote}
                type="button"
                className="px-7 py-3.5 text-xs sm:text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
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
