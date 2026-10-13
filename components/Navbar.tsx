'use client';

import React, { useState } from 'react';
import { Menu, X, Wheat } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (cropName?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FDFDFC]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-stone-900 group whitespace-nowrap shrink-0"
            aria-label="محاصيل - الصفحة الرئيسية"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Wheat className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-stone-900">محاصيل</span>
              <span className="text-[10px] tracking-widest font-semibold text-stone-500 uppercase -mt-1 font-mono">
                MAHASEEL AGRI
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line prose, no pills) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <a
              href="#hero"
              className="text-amber-700 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 border-b-2 border-amber-600 pb-1"
            >
              الرئيسية
            </a>
            <a
              href="#about"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-stone-400 pb-1"
            >
              من نحن
            </a>
            <a
              href="#crops"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-stone-400 pb-1"
            >
              منتجاتنا
            </a>
            <a
              href="#sustainability"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-stone-400 pb-1"
            >
              الاستدامة
            </a>
            <a
              href="#contact"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-stone-400 pb-1"
            >
              اتصل بنا
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="px-5 py-2.5 text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] rounded-xl transition-all shadow-sm shadow-amber-500/20 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>طلب عرض سعر</span>
              <span aria-hidden="true" className="text-stone-800">←</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FDFDFC] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-amber-700 rounded-lg hover:bg-stone-50"
          >
            الرئيسية
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-stone-700 rounded-lg hover:bg-stone-50"
          >
            من نحن
          </a>
          <a
            href="#crops"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-stone-700 rounded-lg hover:bg-stone-50"
          >
            منتجاتنا
          </a>
          <a
            href="#sustainability"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-stone-700 rounded-lg hover:bg-stone-50"
          >
            الاستدامة
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-stone-700 rounded-lg hover:bg-stone-50"
          >
            اتصل بنا
          </a>
          <div className="pt-2 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 text-center text-sm font-bold text-stone-950 bg-amber-500 rounded-xl hover:bg-amber-400 transition-colors"
            >
              طلب عرض سعر فوري
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
