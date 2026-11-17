'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Wheat } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider/component';
import { getCropCopy } from '@/lib/cropsData';
import { CROP_CARD_COPY_I18N } from './data';
import type { CropCardProps } from './types';

export default function CropCard({ crop, onSelect }: CropCardProps) {
  const { locale } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const copy = CROP_CARD_COPY_I18N[locale];
  const cropCopy = getCropCopy(crop.id, locale);
  const name = cropCopy?.name ?? crop.name;
  const categoryLabel = cropCopy?.categoryLabel ?? crop.categoryLabel;

  return (
    <div
      onClick={() => onSelect(crop)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(crop);
        }
      }}
      className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden cursor-pointer border border-stone-200/80 hover:border-[#E5B842] transition-colors select-none bg-stone-900"
    >
      {/* 1. Progressive Loading Shimmer Placeholder */}
      {!isLoaded && !imageFailed && (
        <div className="absolute inset-0 bg-stone-800/90 animate-pulse flex items-center justify-center z-0">
          <Wheat className="w-8 sm:w-10 h-8 sm:h-10 text-stone-600/50" />
        </div>
      )}

      {/* 2. Full-Bleed Background Image (Entire Card) with Progressive Fade & Lazy Loading */}
      {!imageFailed ? (
        <Image
          src={crop.imageUrl}
          alt={name}
          fill
          sizes={copy.imageSizes}
          className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-xs'
          }`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setImageFailed(true)}
        />
      ) : (
        /* Resilient Fallback Container */
        <div className={`absolute inset-0 bg-gradient-to-br ${crop.bgGradient} flex items-center justify-center`}>
          <Wheat className={`w-12 sm:w-16 h-12 sm:h-16 ${crop.accentColor} opacity-40`} />
        </div>
      )}

      {/* 3. Soft Dark Scrim Overlay in the Lower Third */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none transition-opacity duration-300 z-10" />

      {/* 4. Bottom Content Container (Title + Category + Specifications Link) */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 md:p-6 flex flex-col justify-end text-white z-20">
        {/* Category Label in Bright Radiant Gold */}
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#F3D78A] mb-1 sm:mb-1.5 block">
          {categoryLabel}
        </span>

        {/* Crop Name */}
        <h3 className="text-sm sm:text-lg md:text-xl font-bold tracking-tight text-white mb-2 sm:mb-3 text-balance leading-snug">
          {name.split('(')[0].trim()}
        </h3>

        {/* Minimal Bottom Action: Text Link with Bright Radiant Gold Arrow */}
        <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/15 text-[11px] sm:text-xs font-semibold text-stone-200 group-hover:text-white transition-colors">
          <span>{copy.specificationsLabel}</span>
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3D78A] transition-transform duration-300 group-hover:-translate-x-1" />
        </div>
      </div>
    </div>
  );
}
