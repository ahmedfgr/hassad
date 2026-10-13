'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeroProps {
  onExploreCrops: () => void;
  onOpenAbout?: () => void;
  onOpenQuote: () => void;
}

export default function Hero({ onExploreCrops, onOpenQuote }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-stone-800 bg-stone-950 text-white">
      {/* 1. Cinematic Background Video Layer with Fallback */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-stone-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-90 contrast-110"
          src="/hero.mp4"
        />
        {/* Visual Fallback Texture behind video */}
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      </div>

      {/* 2. Cinematic Multi-Layer Scrim & Shadow Overlays (for maximum text contrast) */}
      <div className="absolute inset-0 -z-10 bg-black/55 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950 via-stone-950/65 to-black/40 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-transparent to-stone-950 pointer-events-none" />

      {/* 3. Hero Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-amber-300 mb-8 shadow-md">
          <span>توريد محاصيل زراعية معتمدة</span>
          <span aria-hidden="true" className="text-white/40">•</span>
          <span>سلاسل إمداد موثوقة</span>
        </div>

        {/* High-Contrast Cinematic Headline with Shadows */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto mb-6 text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          محاصيل نقية. <br />
          <span className="text-amber-400 drop-shadow-[0_4px_20px_rgba(217,119,6,0.5)]">
            أمن غذائي مستدام.
          </span>
        </h1>

        {/* 1-Sentence High-Contrast Value Proposition */}
        <p className="text-base sm:text-xl text-stone-200 max-w-2xl mx-auto mb-12 leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-normal">
          نوفر أجود الحبوب والبذور والأعلاف للأسواق الإقليمية والدولية وفق أعلى مقاييس النقاء والمواصفات المعتمدة.
        </p>

        {/* Minimal High-Contrast CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20">
          <button
            onClick={onExploreCrops}
            type="button"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] rounded-xl transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>استعراض المحاصيل</span>
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenQuote}
            type="button"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 active:scale-[0.98] rounded-xl transition-all backdrop-blur-md cursor-pointer shadow-lg"
          >
            طلب عرض سعر
          </button>
        </div>

        {/* Cinematic Numerical Indicator Strip (Glassmorphism & High Contrast) */}
        <div className="w-full bg-stone-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/10 text-center">
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums mb-1 drop-shadow-sm">
                +20
              </div>
              <div className="text-xs font-medium text-stone-300">
                دولة تصدير وتوريد
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight tabular-nums mb-1 drop-shadow-sm">
                +500K
              </div>
              <div className="text-xs font-medium text-stone-300">
                طن متداول سنوياً
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums mb-1 drop-shadow-sm">
                +100
              </div>
              <div className="text-xs font-medium text-stone-300">
                شريك تجاري معتمد
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight tabular-nums mb-1 drop-shadow-sm">
                100%
              </div>
              <div className="text-xs font-medium text-stone-300">
                فحص مخبري ومطابقة
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
