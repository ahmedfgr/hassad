'use client';

import React, { useState } from 'react';
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
        <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#0E1410] border-b border-stone-800/80 rounded-b-[2.5rem] sm:rounded-b-[3.5rem] overflow-hidden text-white">
          {/* Subtle Ambient Golden Wheat Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#E5B842]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#1F2E22]/30 blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Top Navigation & Breadcrumb Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-semibold">
              <div className="flex items-center gap-2 text-stone-400">
                <Link
                  href="/"
                  className="hover:text-[#F3D78A] transition-colors flex items-center gap-1.5"
                >
                  الرئيسية
                </Link>
                <span>/</span>
                <span className="text-[#F3D78A]">كتالوج المحاصيل الزراعية</span>
              </div>

              {/* Back to Home Button */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer text-xs font-semibold"
              >
                <ArrowRight className="w-4 h-4 text-[#E5B842]" />
                <span>العودة للرئيسية</span>
              </Link>
            </div>

            {/* Header Content */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-[#E5B842]/30 text-xs font-semibold text-[#F3D78A] mb-4">
                <Wheat className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>كتالوج التوريد المعتمد للموسم الزراعي الحالي</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                كافة المحاصيل والمنتجات الزراعية
              </h1>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed text-balance">
                نوفر أجود المحاصيل الحقلية الاستراتيجية وفق أعلى معايير الجودة الدولية، مع إمكانية التوريد المباشر لكبرى المطاحن ومصانع الأغذية ومجمعات الإنتاج الحيواني في دول الخليج العربي والمنطقة.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid Section with Progressive Staggered Loading (Direct Display without Filters) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
          {/* Active Status Row (Without the readiness badge as requested) */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-200/80 text-xs font-semibold text-stone-500">
            <span>
              عرض <strong className="text-stone-900 font-bold">{CROPS_DATA.length}</strong> منتج معتمد
            </span>
          </div>

          {/* Grid Layout: Staggered reveal animation, 2 columns on mobile, 4 on desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-8"
          >
            {CROPS_DATA.map((crop) => (
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
