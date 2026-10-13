'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AbuDhabiPartnership from '@/components/AbuDhabiPartnership';
import AboutVision from '@/components/AboutVision';
import CropsCatalog from '@/components/CropsCatalog';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
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

        {/* Minimal Crops Catalog with Full-Bleed Image Cards */}
        <CropsCatalog
          onSelectCrop={(crop) => setSelectedCrop(crop)}
          onRequestQuote={(cropName) => handleOpenQuote(cropName)}
        />

        {/* Clients & Partners Cards Section */}
        <ClientsSection />

        {/* Minimalist Contact Section (2 Horizontal Cards: Email & Phone) */}
        <ContactSection />
      </main>

      {/* Official Footer with Light CTA Box */}
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
