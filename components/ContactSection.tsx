'use client';

import React from 'react';
import { Mail, MessageCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAFAFA] border-b border-stone-100 relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#E5B842]/10 via-[#F3D78A]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/25 text-xs font-bold text-[#A87913] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" />
            <span>تواصل مباشر مع حصاد</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            قنوات الاتصال والشراكة
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed text-balance">
            يسعد فريقنا التجاري واللوجستي بخدمتكم وتوفير عروض الأسعار والاتفاقيات التوريدية على مدار الساعة.
          </p>
        </motion.div>

        {/* 2 Full-Color Modern Cards: Gold for Email & WhatsApp Green for WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Official Email - Full Gold Background */}
          <motion.a
            href="mailto:info@hssad-agri.com"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative flex items-center justify-between p-7 sm:p-8 bg-[#C2921D] rounded-3xl border border-[#B08115] hover:border-white/40 transition-colors duration-300 overflow-hidden"
          >
            {/* Subtle Lighting Sheen */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-5 relative z-10">
              {/* All-White Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <Mail className="w-6 h-6 stroke-[2.2] text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block mb-1">
                  البريد الإلكتروني المباشر
                </span>
                <span className="text-base sm:text-lg font-black text-[#FFF2B8] group-hover:text-white transition-colors font-mono tracking-tight" dir="ltr">
                  info@hssad-agri.com
                </span>
              </div>
            </div>

            <div className="w-11 h-11 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-stone-950 transition-colors duration-300 shrink-0 relative z-10">
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </div>
          </motion.a>

          {/* Card 2: WhatsApp - Full WhatsApp Green Background */}
          <motion.a
            href="https://wa.me/966112345678"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative flex items-center justify-between p-7 sm:p-8 bg-[#18663E] rounded-3xl border border-[#145634] hover:border-white/40 transition-colors duration-300 overflow-hidden"
          >
            {/* Subtle Lighting Sheen */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-5 relative z-10">
              {/* All-White WhatsApp Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <MessageCircle className="w-6 h-6 stroke-[2.2] text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block mb-1">
                  الهاتف والواتساب الموحد
                </span>
                <span className="text-base sm:text-lg font-black text-[#F3D78A] group-hover:text-[#FFF2B8] transition-colors font-mono tracking-tight" dir="ltr">
                  +966 11 234 5678
                </span>
              </div>
            </div>

            <div className="w-11 h-11 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-stone-950 transition-colors duration-300 shrink-0 relative z-10">
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
