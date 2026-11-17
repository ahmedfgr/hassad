'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CROPS_DATA } from '@/lib/cropsData';
import CropCard from '../CropCard/component';
import { useLanguage } from '../LanguageProvider/component';
import { CATALOG_COPY_I18N, CROP_CATEGORIES_I18N } from './data';
import type { CategoryType, CropsCatalogProps } from './types';

export default function CropsCatalog({ onSelectCrop, onRequestQuote }: CropsCatalogProps) {
  const { locale, direction } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const copy = CATALOG_COPY_I18N[locale];
  const categories = CROP_CATEGORIES_I18N[locale];

  const filteredCrops = useMemo(() => {
    return CROPS_DATA.filter((crop) => {
      return activeCategory === 'all' || crop.category === activeCategory;
    }).slice(0, 4);
  }, [activeCategory]);

  return (
    <section
      id="crops"
      dir={direction}
      className="py-20 sm:py-28 bg-white border-b border-stone-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-bold text-[#A87913] uppercase tracking-widest block mb-2">
            {copy.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {copy.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 w-full sm:mb-14"
        >
          <div
            role="group"
            aria-label={copy.filterAriaLabel}
            className="mx-auto flex w-full max-w-full gap-2 overflow-x-auto rounded-2xl border border-stone-200/60 bg-stone-100/90 p-2 sm:w-fit sm:gap-1 sm:rounded-xl sm:p-1"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                aria-pressed={activeCategory === cat.id}
                className={`min-h-11 shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A87913] sm:w-auto sm:px-5 sm:text-sm ${
                  activeCategory === cat.id
                    ? 'border border-[#E5B842] bg-[#E5B842] text-stone-950'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

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
            <span>{copy.catalogLink}</span>
            <ArrowLeft
              aria-hidden="true"
              className={`w-5 h-5 sm:w-6 sm:h-6 text-[#E5B842] transition-transform duration-300 ${
                direction === 'rtl'
                  ? 'group-hover:-translate-x-1.5'
                  : 'rotate-180 group-hover:translate-x-1.5'
              }`}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
