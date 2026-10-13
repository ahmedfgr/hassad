'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeroProps {
  onExploreCrops: () => void;
  onOpenAbout?: () => void;
  onOpenQuote: () => void;
}

export default function Hero({ onExploreCrops, onOpenQuote }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force muted and play to ensure zero browser block in iframes
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(() => {
        // Handled silently
      });
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 1. Video Layer: at z-0 on top of the black background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Soft Balanced Gradient Scrim at z-1 (Allows Video to Show Clearly) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

      {/* 3. Hero Content Container at z-10 */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 sm:pt-44 sm:pb-32 text-center flex flex-col items-center">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300 mb-8 shadow-sm">
          <span>توريد محاصيل زراعية معتمدة</span>
          <span aria-hidden="true" className="text-white/40">•</span>
          <span>سلاسل إمداد موثوقة</span>
        </div>

        {/* High-Contrast Cinematic Headline with Crisp Text Shadow */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto mb-6 text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          محاصيل نقية. <br />
          <span className="text-amber-400 drop-shadow-[0_4px_20px_rgba(217,119,6,0.6)]">
            أمن غذائي مستدام.
          </span>
        </h1>

        {/* 1-Sentence High-Contrast Value Proposition */}
        <p className="text-base sm:text-xl text-stone-100 max-w-2xl mx-auto mb-12 leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-medium">
          نوفر أجود الحبوب والبذور والأعلاف للأسواق الإقليمية والدولية وفق أعلى مقاييس النقاء والمواصفات المعتمدة.
        </p>

        {/* Minimal High-Contrast CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-black/40 hover:bg-black/60 border border-white/30 active:scale-[0.98] rounded-xl transition-all backdrop-blur-md cursor-pointer shadow-md"
          >
            طلب عرض سعر
          </button>
        </div>
      </div>
    </section>
  );
}
