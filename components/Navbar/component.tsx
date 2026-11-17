'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowLeft, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/components/LanguageProvider/component';
import {
  NAVBAR_BRAND_I18N,
  NAVBAR_COPY_I18N,
  NAVBAR_LANGUAGE_I18N,
  NAVBAR_LINKS_I18N,
  NAVBAR_QUICK_CONTACTS,
} from './data';
import type { NavbarProps } from './types';

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const pathname = usePathname();
  const { locale, direction, toggleLocale } = useLanguage();
  const isProducts = pathname === '/products';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brand = NAVBAR_BRAND_I18N[locale];
  const copy = NAVBAR_COPY_I18N[locale];
  const links = NAVBAR_LINKS_I18N[locale];

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-3 sm:top-4 z-[60] px-3 sm:px-6"
      >
        <div
          className="mx-auto max-w-6xl rounded-full border border-stone-200/80 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300 sm:px-6"
        >
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            <motion.a
              href={brand.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full px-2 py-1 text-stone-900 transition-all hover:bg-stone-100/80 sm:px-3"
              aria-label={brand.ariaLabel}
            >
              <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-stone-800 bg-stone-950 p-0.5 transition-transform group-hover:scale-105 sm:h-9 sm:w-9">
                <Image
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
              <div className="flex flex-col pl-1">
                <span className="text-sm sm:text-base font-bold tracking-tight text-stone-900">{brand.name}</span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-[#A87913] -mt-0.5">
                  {brand.subtitle}
                </span>
              </div>
            </motion.a>

            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center gap-5 lg:gap-7 text-xs lg:text-sm font-semibold text-stone-600"
            >
              {links.map((link) => {
                const isActive =
                  (link.id === 'products' && isProducts) ||
                  (link.id === 'home' && !isProducts);
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                      link.badge ? 'flex items-center gap-1.5' : ''
                    } ${
                      isActive
                        ? 'text-[#A87913] hover:text-[#8C6411] border-b-2 border-[#E5B842]'
                        : 'hover:text-stone-950 hover:border-b-2 hover:border-stone-300'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-[#E5B842]/20 text-[#F3D78A] border border-[#E5B842]/30 font-bold">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-2 sm:gap-3 shrink-0"
            >
              <motion.button
                onClick={() => onOpenQuoteModal()}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:flex items-center gap-1.5 px-4.5 py-2 text-xs sm:text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] rounded-full border border-[#E5B842] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{copy.quoteCta}</span>
                <span aria-hidden="true" className="text-stone-900">←</span>
              </motion.button>

              <button
                onClick={toggleLocale}
                type="button"
                className="h-9 min-w-9 px-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 flex items-center justify-center transition-colors cursor-pointer border border-stone-200 text-[11px] font-bold"
                aria-label={NAVBAR_LANGUAGE_I18N[locale].label}
              >
                {NAVBAR_LANGUAGE_I18N[locale].shortLabel}
              </button>

              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                type="button"
                className="md:hidden relative w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 flex items-center justify-center transition-colors cursor-pointer border border-stone-200"
                aria-label={mobileMenuOpen ? copy.closeAriaLabel : copy.menuAriaLabel}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <span
                  aria-hidden="true"
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45' : '-translate-y-[4px]'
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45' : 'translate-y-[4px]'
                  }`}
                />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sliding Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm md:hidden"
          />
        )}

        {mobileMenuOpen && (
          <motion.aside
            key="drawer-panel"
            id="mobile-navigation-drawer"
            initial={{ x: direction === 'rtl' ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: direction === 'rtl' ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className={`fixed top-0 bottom-0 z-50 w-[84vw] max-w-sm bg-stone-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-28 text-white md:hidden overflow-y-auto ${
              direction === 'rtl'
                ? 'right-0 border-l border-white/15'
                : 'left-0 border-r border-white/15'
            }`}
          >
            {/* Top Container */}
            <div>
              {/* Header with Capsule Logo & Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5 rounded-full px-3 py-1.5 bg-stone-900/90 border border-white/15">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 border border-white/20 p-0.5 flex items-center justify-center">
                    <Image
                      src={brand.logoSrc}
                      alt={brand.logoAlt}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-tight text-white">{brand.name}</span>
                    <span className="text-[10px] font-semibold text-[#F3D78A]">
                      {brand.subtitle}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15"
                  aria-label={copy.closeAriaLabel}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 space-y-1.5">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2 px-2">
                  {copy.sectionHeading}
                </span>
                {links.map((link) => {
                  const isActive =
                    (link.id === 'products' && isProducts) ||
                    (link.id === 'home' && !isProducts);
                  const label =
                    link.id === 'products'
                      ? copy.productsMobileLabel
                      : link.label;
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-colors ${
                        isActive
                          ? 'font-bold text-[#F0C446] bg-white/10'
                          : 'font-semibold text-stone-200 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{label}</span>
                        {link.badge && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-[#E5B842]/20 text-[#F3D78A] border border-[#E5B842]/30 font-bold">
                            {link.badge}
                          </span>
                        )}
                      </span>
                      <ArrowLeft className={`w-4 h-4 ${isActive ? 'text-[#F0C446]' : 'text-stone-500'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Direct Quick Contact Shortcuts */}
              <div className="pt-2 pb-4 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2 px-2">
                  {copy.quickContactHeading}
                </span>
                {NAVBAR_QUICK_CONTACTS.map((contact) => (
                  <a
                    key={contact.href}
                    href={contact.href}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 hover:text-white transition-colors"
                  >
                    {contact.icon === 'phone' ? (
                      <Phone className="w-4 h-4 text-[#E5B842] shrink-0" />
                    ) : (
                      <Mail className="w-4 h-4 text-[#E5B842] shrink-0" />
                    )}
                    <span dir="ltr" className="font-mono">{contact.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                type="button"
                className="w-full py-3 px-4 text-xs font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] rounded-xl border border-[#E5B842] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{copy.instantQuoteCta}</span>
                <span>←</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
