'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreCrops: () => void;
  onOpenAbout?: () => void;
  onOpenQuote: () => void;
}

const HERO_IMAGES = [
  {
    src: '/hero_image.png',
    alt: 'حقول أعلاف حصاد الخضراء',
  },
  {
    src: '/hero_image_2.png',
    alt: 'بالات الأعلاف الجافة الجاهزة للتوريد',
  },
  {
    src: '/hero_image_3.png',
    alt: 'حصاد الأعلاف وسلاسل الإمداد',
  },
];

export default function Hero({ onExploreCrops, onOpenAbout, onOpenQuote }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic smooth slideshow transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    if (onOpenAbout) {
      onOpenAbout();
      return;
    }
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white rounded-b-2xl sm:rounded-b-3xl border-b border-stone-800/80">
      {/* 1. Cinematic Slideshow of Hero Images with Ken Burns Zoom Effect */}
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
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/35 to-black/45 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-radial-[at_center] from-transparent via-transparent to-black/45 pointer-events-none" />

      {/* 3. Hero Content Container */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 sm:pt-44 sm:pb-28 text-center flex flex-col items-center">
        {/* Subtle Brand Tag with Wheat Gold Tone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#E5B842]/40 text-xs font-semibold text-[#F3D78A] mb-8 shadow-sm"
        >
          <span>شركة حصاد لتوريد الأعلاف</span>
        </motion.div>

        {/* High-Contrast Cinematic Headline with Radiant Bright Gold Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto mb-6 text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
        >
          أعلاف نقية. <br />
          <span className="text-[#F3D78A] drop-shadow-[0_4px_24px_rgba(229,184,66,0.45)]">
            توريد موثوق ومستدام.
          </span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-stone-100 max-w-2xl mx-auto mb-12 leading-relaxed text-balance font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          نوفر ونورّد أجود الأعلاف الخضراء والجافة ومكونات العلف للمزارع ومصانع الأعلاف وفق أعلى مقاييس النقاء والمواصفات المعتمدة.
        </motion.p>

        {/* Minimal High-Contrast CTAs in Radiant Bright Gold - Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto mb-10"
        >
          <motion.button
            onClick={onExploreCrops}
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 sm:flex-initial px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] rounded-xl border border-[#E5B842] transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-lg shadow-[#E5B842]/20"
          >
            <span>استعراض المنتجات</span>
            <ArrowLeft className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={onOpenQuote}
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 sm:flex-initial px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-black/50 hover:bg-black/70 border border-white/30 rounded-xl transition-all backdrop-blur-md cursor-pointer whitespace-nowrap shadow-md"
          >
            طلب عرض سعر
          </motion.button>
        </motion.div>

        {/* Slideshow Progress Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex items-center gap-2.5 pt-2"
        >
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              type="button"
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentIndex
                  ? 'w-8 bg-[#E5B842]'
                  : 'w-2 bg-white/35 hover:bg-white/60'
              }`}
              aria-label={`عرض الصورة ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* 4. Floating Scroll-Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        type="button"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
        }}
        aria-label="الانتقال إلى تفاصيل الرؤية والمنتجات"
        className="absolute bottom-5 sm:bottom-7 z-20 flex flex-col items-center gap-1 text-stone-300 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[11px] font-medium tracking-wide text-stone-400 group-hover:text-[#F3D78A] transition-colors">
          استكشف المزيد
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#E5B842]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
