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
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-stone-200 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Clean Header with Crop Photo */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-stone-100 bg-stone-900">
          {!modalImgFailed ? (
            <Image
              src={crop.imageUrl}
              alt={crop.name}
              fill
              className="object-cover opacity-80"
              referrerPolicy="no-referrer"
              onError={() => setModalImgFailed(true)}
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${crop.bgGradient} flex items-center justify-center`}>
              <Wheat className={`w-16 h-16 ${crop.accentColor} opacity-50`} />
            </div>
          )}

          {/* Dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 left-5 p-2 rounded-xl bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-xs cursor-pointer z-10"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Category overlaid on the header */}
          <div className="absolute bottom-5 right-6 left-6 z-10 text-white">
            <span className="text-xs font-semibold text-[#F3D78A] tracking-wider mb-1 block">
              {crop.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {crop.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Detailed Paragraph */}
          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
              الوصف الفني للمحصول
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              {crop.fullDesc}
            </p>
          </div>

          {/* Specifications Table/Grid */}
          <div className="bg-stone-50/80 rounded-2xl p-6 border border-stone-200/80">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>المواصفات والتحاليل المخبرية المعتمدة | حصاد</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-700">نسبة النقاء: </span>
                  <span className="text-stone-600">{crop.specs.purity}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Droplets className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-700">الرطوبة القصوى: </span>
                  <span className="text-stone-600">{crop.specs.moisture}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Box className="w-4 h-4 text-[#A87913] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-700">التعبئة والشحن: </span>
                  <span className="text-stone-600">{crop.specs.packaging}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Target className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-700">شهادة المطابقة: </span>
                  <span className="text-stone-600">{crop.specs.standard}</span>
                </div>
              </div>

              {crop.specs.protein && (
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-700">نسبة البروتين: </span>
                    <span className="text-stone-600">{crop.specs.protein}</span>
                  </div>
                </div>
              )}

              {crop.specs.rfv && (
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-700">معيار RFV: </span>
                    <span className="text-stone-600">{crop.specs.rfv}</span>
                  </div>
                </div>
              )}

              {crop.specs.origin && (
                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-700">بلد المنشأ المعتمد: </span>
                    <span className="text-stone-600">{crop.specs.origin}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200/60 text-xs sm:text-sm">
              <span className="font-semibold text-stone-700">الاستخدامات الصناعية والغذائية: </span>
              <span className="text-stone-600">{crop.specs.usage}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-stone-50/60 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-bold text-stone-600 hover:text-stone-900 rounded-xl transition-colors cursor-pointer"
          >
            إغلاق
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(crop.name);
            }}
            type="button"
            className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] rounded-xl border border-[#E5B842] transition-colors cursor-pointer"
          >
            طلب تسعير لهذا المحصول
          </button>
        </div>
      </div>
    </div>
  );
}
