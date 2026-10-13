'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutVision from '@/components/AboutVision';
import CropsCatalog from '@/components/CropsCatalog';
import SustainabilitySection from '@/components/SustainabilitySection';
import Footer from '@/components/Footer';
import ProductDetailModal from '@/components/ProductDetailModal';
import QuoteRequestModal from '@/components/QuoteRequestModal';
import { CropItem } from '@/lib/cropsData';

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
      {/* Navigation Top Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* Minimal Hero Section */}
        <Hero
          onExploreCrops={handleScrollToCrops}
          onOpenAbout={handleScrollToAbout}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Vision & Core Pillars */}
        <AboutVision />

        {/* Minimal Crops Catalog */}
        <CropsCatalog
          onSelectCrop={(crop) => setSelectedCrop(crop)}
          onRequestQuote={(cropName) => handleOpenQuote(cropName)}
        />

        {/* Sustainability & Environmental Stewardship */}
        <SustainabilitySection />
      </main>

      {/* Official Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Product Quick-View Modal */}
      <ProductDetailModal
        crop={selectedCrop}
        onClose={() => setSelectedCrop(null)}
        onRequestQuote={(cropName) => handleOpenQuote(cropName)}
      />

      {/* Interactive Quotation & Supply Request Modal */}
      <QuoteRequestModal
        key={selectedCropForQuote + '-' + (quoteModalOpen ? 'open' : 'closed')}
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialCropName={selectedCropForQuote}
      />
    </div>
  );
}
