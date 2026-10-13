'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { CROPS_DATA, CropItem } from '@/lib/cropsData';
import CropCard from './CropCard';

interface CropsCatalogProps {
  onSelectCrop: (crop: CropItem) => void;
  onRequestQuote: (cropName?: string) => void;
}

type CategoryType = 'all' | 'grains' | 'seeds' | 'fodder' | 'other';

export default function CropsCatalog({ onSelectCrop, onRequestQuote }: CropsCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'grains', label: 'الحبوب' },
    { id: 'seeds', label: 'البذور' },
    { id: 'fodder', label: 'الأعلاف' },
  ];

  const filteredCrops = useMemo(() => {
    return CROPS_DATA.filter((crop) => {
      const matchesCategory =
        activeCategory === 'all' || crop.category === activeCategory;
      const matchesSearch =
        crop.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="crops" className="py-20 sm:py-28 bg-white border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            المنتجات
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            أصناف منتقاة بأعلى معايير النقاء
          </h2>
        </div>

        {/* Centered Filter & Search Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryType)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث سريع..."
              className="w-44 sm:w-52 pl-3 pr-8 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:border-stone-400 transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
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
