'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { THEME_COLORS } from '@/lib/theme';

interface NavbarProps {
  onOpenQuoteModal: (cropName?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'top-2.5 sm:top-4 px-3 sm:px-6'
          : 'top-0 px-0'
      }`}
    >
      {/* Navbar Container */}
      <div
        className={`transition-all duration-300 ease-out ${
          scrolled
            ? 'max-w-5xl mx-auto rounded-2xl bg-stone-950/90 backdrop-blur-md border border-white/15 shadow-2xl px-4 sm:px-8 py-2.5'
            : 'w-full bg-gradient-to-b from-black/75 via-black/30 to-transparent border-b border-white/10 px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4'
        }`}
      >
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Zone 1: Official Brand Logo & Wordmark (حصاد - HSSAD) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0 rounded-full px-3.5 py-1.5 bg-stone-900/60 hover:bg-stone-900/80 backdrop-blur-md border border-white/15 shadow-sm transition-all"
            aria-label="حصاد - الصفحة الرئيسية"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-white/10 border border-white/20 p-0.5 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="شعار حصاد"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            <div className="flex flex-col pl-1">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white drop-shadow-xs">حصاد</span>
              <span className="text-[8px] sm:text-[9px] tracking-widest font-semibold text-[#F3D78A] uppercase -mt-0.5 font-mono">
                HSSAD AGRI
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean White & Radiant Gold Active State) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs lg:text-sm font-semibold text-stone-200">
            <a
              href="#hero"
              className="text-[#F0C446] hover:text-[#F8E39E] transition-colors whitespace-nowrap shrink-0 border-b-2 border-[#E5B842] pb-0.5"
            >
              الرئيسية
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 hover:border-b-2 hover:border-white/40"
            >
              من نحن
            </a>
            <a
              href="#crops"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 hover:border-b-2 hover:border-white/40"
            >
              منتجاتنا
            </a>
            <a
              href="#clients"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 hover:border-b-2 hover:border-white/40"
            >
              عملاؤنا
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 hover:border-b-2 hover:border-white/40"
            >
              اتصل بنا
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop CTA in Bright Radiant Gold */}
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="hidden sm:flex items-center gap-1.5 px-4.5 py-2 text-xs sm:text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#E5B842]/30 whitespace-nowrap cursor-pointer"
            >
              <span>طلب عرض سعر</span>
              <span aria-hidden="true" className="text-stone-900">←</span>
            </button>

            {/* Mobile Hamburger Button with proper touch size */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-white/15 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-xs font-bold text-[#F0C446] rounded-xl bg-white/5 flex items-center justify-between"
            >
              <span>الرئيسية</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-xs font-semibold text-stone-200 rounded-xl hover:bg-white/10 flex items-center justify-between transition-colors"
            >
              <span>من نحن</span>
              <ArrowLeft className="w-3.5 h-3.5 text-stone-400" />
            </a>
            <a
              href="#crops"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-xs font-semibold text-stone-200 rounded-xl hover:bg-white/10 flex items-center justify-between transition-colors"
            >
              <span>منتجاتنا</span>
              <ArrowLeft className="w-3.5 h-3.5 text-stone-400" />
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-xs font-semibold text-stone-200 rounded-xl hover:bg-white/10 flex items-center justify-between transition-colors"
            >
              <span>عملاؤنا</span>
              <ArrowLeft className="w-3.5 h-3.5 text-stone-400" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-xs font-semibold text-stone-200 rounded-xl hover:bg-white/10 flex items-center justify-between transition-colors"
            >
              <span>اتصل بنا</span>
              <ArrowLeft className="w-3.5 h-3.5 text-stone-400" />
            </a>

            {/* Mobile Quote CTA Button in Bright Gold */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                type="button"
                className="w-full py-2.5 px-4 text-xs font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>طلب عرض سعر فوري</span>
                <span>←</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
