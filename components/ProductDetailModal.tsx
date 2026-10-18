'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Wheat, Check, ShieldCheck, Box, Droplets, Target } from 'lucide-react';
import { CropItem } from '@/lib/cropsData';

interface ProductDetailModalProps {
  crop: CropItem | null;
  onClose: () => void;
  onRequestQuote: (cropName: string) => void;
}

export default function ProductDetailModal({
  crop,
  onClose,
  onRequestQuote,
}: ProductDetailModalProps) {
  const [modalImgFailed, setModalImgFailed] = useState(false);

  if (!crop) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Clean Header with Crop Photo */}
        <div className="relative h-36 sm:h-44 w-full overflow-hidden border-b border-stone-100 bg-stone-900">
          {!modalImgFailed ? (
            <Image
              src={crop.imageUrl}
              alt={crop.name}
              fill
              className="object-cover opacity-85"
              referrerPolicy="no-referrer"
              onError={() => setModalImgFailed(true)}
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${crop.bgGradient} flex items-center justify-center`}>
              <Wheat className={`w-12 h-12 ${crop.accentColor} opacity-50`} />
            </div>
          )}

          {/* Dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 left-4 p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-xs cursor-pointer z-10"
            aria-label="إغلاق النافذة"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Title & Category overlaid on the header */}
          <div className="absolute bottom-4 right-5 left-5 z-10 text-white">
            <span className="text-[11px] font-semibold text-[#F3D78A] tracking-wider mb-0.5 block">
              {crop.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {crop.name}
            </h3>
          </div>
        </div>

        {/* Modal Body - Concise & Responsive */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Brief Summary */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            {crop.shortDesc || crop.fullDesc}
          </p>

          {/* Essential Specs Grid */}
          <div className="bg-stone-50 rounded-xl p-3.5 sm:p-4 border border-stone-200/80">
            <div className="flex items-center gap-1.5 mb-3 text-stone-900 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>المواصفات الأساسية المعتمدة</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-stone-200/60 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E5B842] shrink-0" />
                <div className="truncate">
                  <span className="text-stone-400 block text-[10px]">نسبة النقاء</span>
                  <span className="font-semibold text-stone-800 text-[11px] sm:text-xs truncate block">{crop.specs.purity}</span>
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-stone-200/60 flex items-center gap-2">
                <Droplets className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <div className="truncate">
                  <span className="text-stone-400 block text-[10px]">الرطوبة القصوى</span>
                  <span className="font-semibold text-stone-800 text-[11px] sm:text-xs truncate block">{crop.specs.moisture}</span>
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-stone-200/60 flex items-center gap-2">
                <Box className="w-3.5 h-3.5 text-[#A87913] shrink-0" />
                <div className="truncate">
                  <span className="text-stone-400 block text-[10px]">التعبئة</span>
                  <span className="font-semibold text-stone-800 text-[11px] sm:text-xs truncate block">{crop.specs.packaging}</span>
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-stone-200/60 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                <div className="truncate">
                  <span className="text-stone-400 block text-[10px]">بلد المنشأ</span>
                  <span className="font-semibold text-stone-800 text-[11px] sm:text-xs truncate block">{crop.specs.origin || crop.specs.standard}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions - Responsive side-by-side on all screens */}
        <div className="p-4 sm:p-5 bg-stone-50/70 border-t border-stone-100 flex flex-row items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            type="button"
            className="flex-initial px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            إغلاق
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(crop.name);
            }}
            type="button"
            className="flex-1 sm:flex-initial px-5 py-2.5 text-xs sm:text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] rounded-lg border border-[#E5B842] transition-colors cursor-pointer text-center"
          >
            طلب تسعير لهذا المنتج
          </button>
        </div>
      </div>
    </div>
  );
}
