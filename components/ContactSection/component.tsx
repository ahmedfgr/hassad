'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/components/LanguageProvider/component';
import {
  CONTACT_SECTION_CARDS_I18N,
  CONTACT_SECTION_COPY_I18N,
} from './data';

export default function ContactSection() {
  const { locale, direction } = useLanguage();
  const copy = CONTACT_SECTION_COPY_I18N[locale];
  const cards = CONTACT_SECTION_CARDS_I18N[locale];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/5 px-4 py-2 text-sm font-medium text-[#A27B19]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            {copy.badge}
          </div>

          <h2 className="mb-3 text-2xl font-semibold text-slate-900 sm:text-4xl">
            {copy.title}
          </h2>

          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            {copy.description}
          </p>
        </motion.div>

        {/* Main Card */}
        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-white
          shadow-[0_4px_24px_rgba(15,23,42,0.04),0_24px_60px_rgba(15,23,42,0.06)]
          "
        >
          {/* Top Accent */}
          <div
            className="
            absolute
            inset-x-0
            top-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
          "
          />

          <div className="grid lg:grid-cols-[360px_1fr]">
            {/* Left Block */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                relative
                overflow-hidden
                bg-[#111612]
              "
            >
              {/* Glow */}
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative flex min-h-[260px] items-center justify-center p-6 sm:min-h-[320px] lg:min-h-[420px]">
                <div className="text-center">
                  {/* Circle */}
                  <div
                    className="
                    relative
                    mx-auto
                    mb-6
                    flex
                    h-32
                    w-32
                    items-center
                    justify-center
                    rounded-full
                    border-[4px]
                    border-[#D4AF37]
                    bg-[#111612]
                    sm:h-40
                    sm:w-40
                    lg:h-44
                    lg:w-44
                  "
                  >
                    <div className="absolute inset-[-8px] rounded-full border border-[#D4AF37]/30" />

                    <Image
                      src="/White Petal Mandala on Black.png"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 176px, (min-width: 640px) 160px, 128px"
                      className="rounded-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                    {copy.heading}
                  </h3>

                  <p className="mt-2 text-base font-medium text-[#EACD76] sm:text-lg">
                    {copy.englishHeading}
                  </p>

                  <div className="mt-5 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-[#D4AF37]" />

                    <span className="text-[11px] tracking-[0.25em] text-[#F3D78A]">
                      {copy.brand}
                    </span>

                    <span className="h-px w-10 bg-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="p-5 sm:p-8 lg:p-12">
              <div className="space-y-5">
                {cards.map((card) => (
                  <motion.a
                    key={card.icon}
                    href={card.href}
                    target={card.target}
                    rel={card.rel}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="group flex items-center justify-between rounded-[24px] bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex flex-1 flex-col items-center gap-4 sm:flex-row">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FFFDF6] text-[#B8860B] shadow-[0_8px_20px_rgba(212,175,55,0.15)] sm:h-20 sm:w-20">
                        {card.icon === 'mail' ? (
                          <Mail size={30} />
                        ) : (
                          <MessageCircle size={30} />
                        )}
                      </div>
                      <div dir={direction} className={`w-full text-center ${direction === 'rtl' ? 'sm:text-right' : 'sm:text-left'}`}>
                        <p className="text-lg font-medium text-slate-600 sm:text-xl">
                          {card.label}
                        </p>
                        <p
                          dir="ltr"
                          className="mt-2 break-all text-sm font-semibold text-slate-900 sm:text-base lg:text-xl"
                        >
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#FFF5D9] text-[#B8860B] transition-all duration-300 group-hover:-translate-x-1 md:flex">
                      <ArrowLeft size={18} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}