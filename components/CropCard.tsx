'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Wheat } from 'lucide-react';
import { CropItem } from '@/lib/cropsData';

interface CropCardProps {
  crop: CropItem;
  onSelect: (crop: CropItem) => void;
  onRequestQuote: (cropName: string) => void;
}

export default function CropCard({ crop, onSelect }: CropCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

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
      className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden cursor-pointer border border-stone-200/60 shadow-xs hover:shadow-lg hover:border-[#E5B842]/70 transition-all select-none"
    >
      {/* 1. Full-Bleed Background Image (Entire Card) */}
      {!imageFailed ? (
        <Image
          src={crop.imageUrl}
          alt={crop.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
        />
      ) : (
        /* Resilient Fallback Container */
        <div className={`absolute inset-0 bg-gradient-to-br ${crop.bgGradient} flex items-center justify-center`}>
          <Wheat className={`w-16 h-16 ${crop.accentColor} opacity-40`} />
        </div>
      )}

      {/* 2. Soft Dark Scrim Overlay in the Lower Third */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5 pointer-events-none transition-opacity duration-300" />

      {/* 3. Bottom Content Container (Title + Category + Specifications Link) */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end text-white z-10">
        {/* Category Label in Bright Radiant Gold */}
        <span className="text-[11px] font-semibold tracking-wider text-[#F3D78A] mb-1.5 block">
          {crop.categoryLabel}
        </span>

        {/* Crop Name */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 text-balance leading-snug">
          {crop.name.split('(')[0].trim()}
        </h3>

        {/* Minimal Bottom Action: Text Link with Bright Radiant Gold Arrow */}
        <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs font-semibold text-stone-200 group-hover:text-white transition-colors">
          <span>عرض المواصفات</span>
          <ArrowLeft className="w-4 h-4 text-[#F3D78A] transition-transform duration-300 group-hover:-translate-x-1.5" />
        </div>
      </div>
    </div>
  );
}
