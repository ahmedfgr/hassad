'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageProvider/component';
import { HERO_CONTENT_I18N, HERO_IMAGES_I18N } from './data';
import type { HeroProps, PaperBackgroundProps } from './types';

function PaperBackground({ children }: PaperBackgroundProps) {
  return <div className="relative z-0">{children}</div>;
}

export default function Hero({ onExploreCrops, onOpenAbout, onOpenQuote }: HeroProps) {
  const { locale, direction } = useLanguage();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const content = HERO_CONTENT_I18N[locale];
  const images = HERO_IMAGES_I18N[locale];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

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
    <PaperBackground>
      <section
        id="hero"
        dir={direction}
        className="relative mx-3 mt-24 flex min-h-[calc(100svh-7.5rem)] max-w-6xl items-center justify-center overflow-hidden rounded-[1.75rem] border border-stone-800/80 bg-stone-950 text-white sm:mx-6 sm:mt-28 sm:min-h-[min(42rem,calc(100svh-9rem))] sm:rounded-[2rem] lg:mx-auto"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          {images.map((img, idx) => {
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

        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/35 to-black/45 pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-radial-[at_center] from-transparent via-transparent to-black/45 pointer-events-none" />

        <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-24 pb-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5B842]/40 bg-black/40 px-4 py-1.5 text-xs font-semibold text-[#F3D78A] shadow-sm backdrop-blur-md sm:mb-8"
          >
            <span>{content.companyName}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.2] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:mb-6 sm:text-6xl lg:text-7xl"
          >
            {content.titleLead} <br />
            <span className="text-[#F3D78A] drop-shadow-[0_4px_24px_rgba(229,184,66,0.45)]">
              {content.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-8 max-w-2xl text-balance text-sm font-medium leading-relaxed text-stone-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:mb-10 sm:text-lg"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto flex w-full max-w-md flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.button
              onClick={onExploreCrops}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 sm:flex-initial px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] rounded-full border border-[#E5B842] transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-lg shadow-[#E5B842]/20"
            >
              <span>{content.exploreCropsLabel}</span>
              <ArrowLeft
                aria-hidden="true"
                className={`w-4 h-4 ${direction === 'ltr' ? 'rotate-180' : ''}`}
              />
            </motion.button>

            <motion.button
              onClick={onOpenQuote}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 sm:flex-initial px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-black/40 hover:bg-black/60 border border-white/40 rounded-full transition-all backdrop-blur-md cursor-pointer whitespace-nowrap shadow-md"
            >
              {content.quoteLabel}
            </motion.button>
          </motion.div>
        </div>

        <motion.button
          onClick={handleScrollDown}
          type="button"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          aria-label={content.scrollAriaLabel}
          className="group absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-stone-300 transition-colors hover:text-white sm:bottom-6"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-4 w-4 text-[#E5B842] transition-colors group-hover:text-[#F3D78A]" />
          </motion.div>
        </motion.button>
      </section>
    </PaperBackground>
  );
}
