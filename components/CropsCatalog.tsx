'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
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
    { id: 'fodder', label: 'الأعلاف' },
    { id: 'grains', label: 'حبوب الأعلاف' },
    { id: 'seeds', label: 'بذور ومكونات' },
  ];

  const filteredCrops = useMemo(() => {
    return CROPS_DATA.filter((crop) => {
      return activeCategory === 'all' || crop.category === activeCategory;
    }).slice(0, 4);
  }, [activeCategory]);

  return (
    <section id="crops" className="py-20 sm:py-28 bg-white border-b border-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-bold text-[#A87913] uppercase tracking-widest block mb-2">
            أعلاف حصاد
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            أصناف منتقاة بأعلى معايير النقاء والجودة
          </h2>
        </motion.div>

        {/* Centered Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center mb-14"
        >
          <div className="flex items-center gap-1 p-1 bg-stone-100/90 rounded-xl border border-stone-200/60">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryType)}
                type="button"
                className={`px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E5B842] text-stone-950 border border-[#E5B842]'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Crops Grid with Cascading Stagger: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredCrops.map((crop, idx) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (idx % 4) * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="h-full"
            >
              <CropCard
                crop={crop}
                onSelect={onSelectCrop}
                onRequestQuote={onRequestQuote}
              />
            </motion.div>
          ))}
        </div>

        {/* Action Button linking to Dedicated Products Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-14 flex justify-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-stone-900 hover:bg-stone-950 border border-stone-800 hover:border-[#E5B842]/50 transition-all text-lg sm:text-xl font-extrabold text-[#E5B842] group cursor-pointer"
          >
            <span>الكتالوج</span>
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5B842] transition-transform duration-300 group-hover:-translate-x-1.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
