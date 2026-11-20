'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/components/LanguageProvider/component';
import {
  FOOTER_BRAND_I18N,
  FOOTER_CONTACTS_I18N,
  FOOTER_COPY_I18N,
  FOOTER_PARTNERSHIP_I18N,
  FOOTER_QUICK_LINKS_I18N,
  FOOTER_SOCIAL_LINKS_I18N,
} from './data';
import type { FooterProps } from './types';

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const { locale, direction } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const brand = FOOTER_BRAND_I18N[locale];
  const copy = FOOTER_COPY_I18N[locale];
  const partnership = FOOTER_PARTNERSHIP_I18N[locale];
  const socialLinks = FOOTER_SOCIAL_LINKS_I18N[locale];
  const quickLinks = FOOTER_QUICK_LINKS_I18N[locale];
  const contacts = FOOTER_CONTACTS_I18N[locale];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="footer" className="px-3 sm:px-6 lg:px-10 pb-6 sm:pb-8 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[2.5rem] sm:rounded-[3.5rem] lg:rounded-[4rem] bg-[#111612] text-stone-300 pt-14 sm:pt-16 pb-12 px-5 sm:px-8 lg:px-12 border border-stone-800 relative overflow-hidden"
      >
        {/* Subtle decorative wheat gold ambient glow in the footer */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5B842]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          {/* Pre-Footer Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mb-16 overflow-hidden rounded-3xl border border-[#E5B842]/60 bg-[#111612] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-12"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B842] to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#E5B842]/20 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-10 h-64 w-64 rounded-full bg-[#E5B842]/10 blur-3xl" />
            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 text-center">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-[#E5B842]/50 bg-[#E5B842]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E5B842] backdrop-blur-sm">
                  {partnership.eyebrow}
                </span>
                <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {partnership.title}
                </h3>
                <p className="text-xs leading-relaxed text-stone-300 text-balance sm:text-sm">
                  {partnership.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
                <button
                  onClick={onOpenQuoteModal}
                  type="button"
                  className="cursor-pointer whitespace-nowrap rounded-xl border border-[#E5B842] bg-[#E5B842] px-7 py-3 text-xs font-bold text-stone-950 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E5B842]/20 active:translate-y-0 sm:text-sm"
                >
                  {partnership.quoteLabel}
                </button>
                <a
                  href={partnership.contactHref}
                  className="whitespace-nowrap rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:border-[#E5B842]/60 hover:bg-white/10 active:translate-y-0 sm:text-sm"
                >
                  {partnership.contactLabel}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Grid: Brand, Quick Links, Contact & Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
            {/* Col 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-white/10 p-1 border border-white/20 flex items-center justify-center backdrop-blur-xs">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.logoAlt}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white">{brand.name}</span>
                  <span className="text-[11px] font-semibold text-[#F3D78A]">
                    {brand.subtitle}
                  </span>
                </div>
              </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed text-balance">
              {brand.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.ariaLabel}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className="px-3 h-9 rounded-lg bg-stone-800 hover:bg-[#E5B842] hover:text-stone-950 text-stone-400 transition-colors flex items-center justify-center text-[11px] font-bold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">{copy.quickLinksTitle}</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#F3D78A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">{copy.contactTitle}</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              {contacts.map((contact) => (
                <div key={contact.icon} className="flex items-center gap-2">
                  {contact.icon === 'location' && <MapPin className="w-4 h-4 text-[#E5B842] shrink-0" />}
                  {contact.icon === 'mail' && <Mail className="w-4 h-4 text-[#E5B842] shrink-0" />}
                  {contact.icon === 'phone' && <Phone className="w-4 h-4 text-[#E5B842] shrink-0" />}
                  {contact.href ? (
                    <a href={contact.href} className="hover:text-white transition-colors">
                      <span dir={contact.direction}>{contact.value}</span>
                    </a>
                  ) : (
                    <span>{contact.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-stone-300 block mb-2">
                {copy.newsletterTitle}
              </span>
              {subscribed ? (
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-600/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{copy.newsletterSuccess}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={copy.newsletterPlaceholder}
                    className="flex-1 px-3 py-2 text-xs bg-stone-900 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-[#E5B842]"
                    dir={direction}
                  />
                  <button
                    type="submit"
                    className="p-2 bg-[#E5B842] hover:bg-[#F0C446] text-stone-950 rounded-lg transition-colors cursor-pointer shrink-0"
                    aria-label={copy.newsletterAriaLabel}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Sub-Footer Copyright */}
        <div className="pt-8 flex items-center justify-center text-center text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {copy.copyright}
          </div>
        </div>
      </div>
    </motion.div>
  </footer>
);
}
