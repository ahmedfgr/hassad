'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutVision from '@/components/AboutVision';
import AbuDhabiPartnership from '@/components/AbuDhabiPartnership';
import CropsCatalog from '@/components/CropsCatalog';
import Footer from '@/components/Footer';
import { CropItem } from '@/lib/cropsData';

// Progressive dynamic component loading for optimal browser caching & code splitting
const ClientsSection = dynamic(() => import('@/components/ClientsSection'), {
  loading: () => <div className="py-20 bg-stone-50/40 min-h-[280px]" />,
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="py-20 min-h-[240px]" />,
});

const ProductDetailModal = dynamic(() => import('@/components/ProductDetailModal'), {
  ssr: false,
});

const QuoteRequestModal = dynamic(() => import('@/components/QuoteRequestModal'), {
  ssr: false,
});

export default function HomePage() {
  const [selectedCrop, setSelectedCrop] = useState<CropItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCropForQuote, setSelectedCropForQuote] = useState<string>('');

  const handleOpenQuote = (cropName?: string) => {
    setSelectedCropForQuote(cropName || '');
    setQuoteModalOpen(true);
  };

  const handleScrollToCrops = () => {
    const el = document.getElementById('crops');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFC]">
      {/* Navigation Top Bar (Responsive Floating Glass Navbar) */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* Main Cinematic Video Hero Section */}
        <Hero
          onExploreCrops={handleScrollToCrops}
          onOpenAbout={handleScrollToAbout}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Centered Institutional Vision (Prose without cards) - Immediately below Hero */}
        <AboutVision />

        {/* Secondary Hero: Strategic Partnership with Abu Dhabi Platform */}
        <AbuDhabiPartnership onOpenQuote={() => handleOpenQuote()} />

        {/* Crops Catalog with Strictly 4 Curated Crops */}
        <CropsCatalog
          onSelectCrop={(crop) => setSelectedCrop(crop)}
          onRequestQuote={(cropName) => handleOpenQuote(cropName)}
        />

        {/* Progressive Dynamic Clients Section */}
        <ClientsSection />

        {/* Progressive Dynamic Contact Section */}
        <ContactSection />
      </main>

      {/* Official Footer with Light CTA Box */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Product Quick-View Modal */}
      {selectedCrop && (
        <ProductDetailModal
          crop={selectedCrop}
          onClose={() => setSelectedCrop(null)}
          onRequestQuote={(cropName) => handleOpenQuote(cropName)}
        />
      )}

      {/* Interactive Quotation & Supply Request Modal */}
      {quoteModalOpen && (
        <QuoteRequestModal
          key={selectedCropForQuote + '-' + (quoteModalOpen ? 'open' : 'closed')}
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialCropName={selectedCropForQuote}
        />
      )}
    </div>
  );
}
