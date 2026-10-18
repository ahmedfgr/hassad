'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Wheat } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CropCard from '@/components/CropCard';
import { CROPS_DATA, CropItem } from '@/lib/cropsData';

// Dynamically import heavy modals to optimize initial bundle & cache performance
const ProductDetailModal = dynamic(() => import('@/components/ProductDetailModal'), {
  ssr: false,
});
const QuoteRequestModal = dynamic(() => import('@/components/QuoteRequestModal'), {
  ssr: false,
});

const FILTER_CATEGORIES = [
  { id: 'all', label: 'جميع المنتجات' },
  { id: 'fodder', label: 'الأعلاف' },
  { id: 'seeds', label: 'بذور ومكونات الأعلاف' },
  { id: 'grains', label: 'حبوب الأعلاف' },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ProductsPage() {
  const [selectedCrop, setSelectedCrop] = useState<CropItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCropForQuote, setSelectedCropForQuote] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCrops = useMemo(() => {
    if (activeCategory === 'all') return CROPS_DATA;
    return CROPS_DATA.filter((crop) => crop.category === activeCategory);
  }, [activeCategory]);

  const handleOpenQuote = (cropName?: string) => {
    setSelectedCropForQuote(cropName || '');
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFC] text-stone-900">
      {/* Top Navbar with Route-Aware Active Highlights */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      <main className="flex-grow pb-20 sm:pb-28">
        {/* Seamless Blended Hero Header - Starts at absolute top behind floating Navbar */}
        <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-[#0E1410] border-b border-stone-800/80 rounded-b-2xl sm:rounded-b-3xl overflow-hidden text-white">
          {/* Subtle Ambient Golden Wheat Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#E5B842]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#1F2E22]/30 blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Top Navigation & Breadcrumb Row - Back button positioned on the right */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-semibold">
              {/* Back to Home Button placed first on the right in RTL */}
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer text-xs font-semibold"
                >
                  <ArrowRight className="w-4 h-4 text-[#E5B842]" />
                  <span>العودة للرئيسية</span>
                </Link>

                <div className="hidden sm:flex items-center gap-2 text-stone-400">
                  <span>/</span>
                  <span className="text-[#F3D78A]">كتالوج الأعلاف</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/90 border border-[#E5B842]/30 text-[11px] font-semibold text-[#F3D78A]">
                <Wheat className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>توريد موثوق طوال العام</span>
              </div>
            </div>

            {/* Header Content */}
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight">
                كافة منتجات الأعلاف
              </h1>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed text-balance max-w-2xl">
                نوفر ونورّد أجود الأعلاف الخضراء والجافة ومكونات العلف وفق أعلى معايير الجودة، مع إمكانية التوريد المباشر لكبرى مزارع الإنتاج الحيواني ومصانع الأعلاف.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid & Filter Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
          {/* Simple & Streamlined Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200/80">
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {FILTER_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    type="button"
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#E5B842] text-stone-950 shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200/80 text-stone-600'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Active Count */}
            <div className="text-xs font-medium text-stone-500 shrink-0">
              عرض <strong className="text-stone-900 font-bold">{filteredCrops.length}</strong> من أصل {CROPS_DATA.length} منتج
            </div>
          </div>

          {/* Grid Layout or Empty state */}
          {filteredCrops.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-6 sm:mt-8"
            >
              {filteredCrops.map((crop) => (
                <motion.div
                  key={crop.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <CropCard
                    crop={crop}
                    onSelect={(c) => setSelectedCrop(c)}
                    onRequestQuote={(name) => handleOpenQuote(name)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200/60 mt-8">
              <Wheat className="w-10 h-10 text-stone-400 mx-auto mb-3 opacity-60" />
              <p className="text-sm font-bold text-stone-700">لا توجد منتجات ضمن هذا التصنيف حالياً</p>
              <button
                onClick={() => setActiveCategory('all')}
                type="button"
                className="mt-3 px-4 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                عرض كل المنتجات
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Modal: Full Product Specifications (Dynamically loaded) */}
      <AnimatePresence>
        {selectedCrop && (
          <ProductDetailModal
            crop={selectedCrop}
            onClose={() => setSelectedCrop(null)}
            onRequestQuote={(cropName) => {
              setSelectedCrop(null);
              handleOpenQuote(cropName);
            }}
          />
        )}
      </AnimatePresence>

      {/* Modal: Instant Quote Request (Dynamically loaded) */}
      <AnimatePresence>
        {quoteModalOpen && (
          <QuoteRequestModal
            isOpen={quoteModalOpen}
            initialCropName={selectedCropForQuote}
            onClose={() => setQuoteModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
