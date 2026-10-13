'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Wheat, ArrowLeft } from 'lucide-react';

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
      {/* Navbar Container: Seamless at top, floating with radius on scroll */}
      <div
        className={`transition-all duration-300 ease-out ${
          scrolled
            ? 'max-w-5xl mx-auto rounded-2xl bg-stone-950/90 backdrop-blur-md border border-white/15 shadow-2xl px-4 sm:px-8 py-2.5'
            : 'w-full bg-gradient-to-b from-black/70 via-black/25 to-transparent border-b border-white/10 px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4'
        }`}
      >
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 text-white group whitespace-nowrap shrink-0"
            aria-label="محاصيل - الصفحة الرئيسية"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform">
              <Wheat className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.4]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white drop-shadow-xs">محاصيل</span>
              <span className="text-[8px] sm:text-[9px] tracking-widest font-semibold text-stone-300 uppercase -mt-0.5 font-mono">
                MAHASEEL AGRI
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean White Text) - Without Sustainability */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs lg:text-sm font-semibold text-stone-200">
            <a
              href="#hero"
              className="text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 border-b-2 border-amber-400 pb-0.5"
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
            {/* Desktop CTA */}
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="hidden sm:flex items-center gap-1.5 px-4.5 py-2 text-xs sm:text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-amber-500/20 whitespace-nowrap cursor-pointer"
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

        {/* Mobile Dropdown Drawer: Properly proportioned, clean glassmorphic card */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-white/15 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-xs font-bold text-amber-400 rounded-xl bg-white/5 flex items-center justify-between"
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

            {/* Mobile Quote CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                type="button"
                className="w-full py-2.5 px-4 text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
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
