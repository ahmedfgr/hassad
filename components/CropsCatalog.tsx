'use client';

import React, { useState, useMemo } from 'react';
import { CROPS_DATA, CropItem } from '@/lib/cropsData';
import CropCard from './CropCard';

interface CropsCatalogProps {
  onSelectCrop: (crop: CropItem) => void;
  onRequestQuote: (cropName?: string) => void;
}

type CategoryType = 'all' | 'grains' | 'seeds' | 'fodder' | 'other';

export default function CropsCatalog({ onSelectCrop, onRequestQuote }: CropsCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'grains', label: 'الحبوب' },
    { id: 'seeds', label: 'البذور' },
    { id: 'fodder', label: 'الأعلاف' },
  ];

  const filteredCrops = useMemo(() => {
    return CROPS_DATA.filter((crop) => {
      return activeCategory === 'all' || crop.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <section id="crops" className="py-20 sm:py-28 bg-white border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#A87913] uppercase tracking-widest block mb-2">
            منتجات حصاد
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            أصناف منتقاة بأعلى معايير النقاء والجودة
          </h2>
        </div>

        {/* Centered Category Filter Bar */}
        <div className="flex items-center justify-center mb-14">
          <div className="flex items-center gap-1 p-1 bg-stone-100/90 rounded-xl border border-stone-200/60">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryType)}
                type="button"
                className={`px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E5B842] text-stone-950 shadow-sm shadow-[#E5B842]/25'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCrops.map((crop) => (
            <CropCard
              key={crop.id}
              crop={crop}
              onSelect={onSelectCrop}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
