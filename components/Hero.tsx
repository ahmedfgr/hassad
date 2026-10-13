'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

interface HeroProps {
  onExploreCrops: () => void;
  onOpenAbout?: () => void;
  onOpenQuote: () => void;
}

const HERO_IMAGES = [
  {
    src: '/hero_image.png',
    alt: 'حقول حصاد الزراعية الذهبية',
  },
  {
    src: '/hero_image_2.png',
    alt: 'سنابل القمح والمحاصيل الناضجة',
  },
  {
    src: '/hero_image_3.png',
    alt: 'الحصاد الحديث وسلاسل الإمداد الزراعي',
  },
];

export default function Hero({ onExploreCrops, onOpenQuote }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic smooth slideshow transition every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white rounded-b-[2.5rem] sm:rounded-b-[4rem] shadow-2xl">
      {/* 1. Cinematic Slideshow Images with Ken Burns Slow Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_IMAGES.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={idx === 0}
                className={`object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}
      </div>

      {/* 2. Soft Balanced Cinematic Scrim Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-radial-[at_center] from-transparent via-transparent to-black/40 pointer-events-none" />

      {/* 3. Hero Content Container */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 sm:pt-44 sm:pb-32 text-center flex flex-col items-center">
        {/* Subtle Brand Tag with Wheat Gold Tone */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#E5B842]/35 text-xs font-semibold text-[#F3D78A] mb-8 shadow-sm">
          <span>شركة حصاد لتوريد المحاصيل الزراعية</span>
        </div>

        {/* High-Contrast Cinematic Headline with Radiant Bright Gold Accent */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto mb-6 text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          محاصيل نقية. <br />
          <span className="text-[#F3D78A] drop-shadow-[0_4px_22px_rgba(229,184,66,0.55)]">
            أمن غذائي مستدام.
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="text-base sm:text-xl text-stone-100 max-w-2xl mx-auto mb-12 leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-medium">
          نوفر أجود الحبوب والبذور والأعلاف للأسواق الإقليمية والدولية وفق أعلى مقاييس النقاء والمواصفات المعتمدة.
        </p>

        {/* Minimal High-Contrast CTAs in Radiant Bright Gold */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onExploreCrops}
            type="button"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] active:scale-[0.98] rounded-xl transition-all shadow-xl shadow-[#E5B842]/30 flex items-center justify-center gap-2 cursor-pointer"
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

        {/* 4. Elegant Slideshow Progress Indicators */}
        <div className="flex items-center gap-2.5 pt-4">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              type="button"
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentIndex
                  ? 'w-8 bg-[#E5B842] shadow-sm shadow-[#E5B842]/50'
                  : 'w-2 bg-white/35 hover:bg-white/60'
              }`}
              aria-label={`عرض الصورة ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
