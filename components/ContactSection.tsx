'use client';

import React from 'react';
import { Mail, Phone, ArrowLeft, Sparkles } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAFAFA] border-b border-stone-100 relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#E5B842]/10 via-[#F3D78A]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
        </div>

        {/* 2 Ultra-Modern Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Official Email */}
          <a
            href="mailto:info@hssad-agri.com"
            className="group relative flex items-center justify-between p-7 sm:p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-stone-200/90 hover:border-[#E5B842] shadow-xs hover:shadow-2xl hover:shadow-[#E5B842]/15 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Top-Right Ambient Glow on Hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E5B842]/20 via-[#F3D78A]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-5 relative z-10">
              {/* Floating 3D Gold Vessel */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FDF6E2] via-[#F8E39E] to-[#E5B842]/30 border border-[#E5B842]/50 flex items-center justify-center text-[#A87913] shrink-0 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <Mail className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-stone-400 block mb-1">
                  البريد الإلكتروني المباشر
                </span>
                <span className="text-base sm:text-lg font-extrabold text-stone-900 group-hover:text-[#A87913] transition-colors font-mono tracking-tight" dir="ltr">
                  info@hssad-agri.com
                </span>
              </div>
            </div>

            <div className="w-11 h-11 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-center text-stone-400 group-hover:bg-[#E5B842] group-hover:text-stone-950 group-hover:border-[#E5B842] transition-all duration-300 shrink-0 shadow-2xs relative z-10">
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </div>
          </a>

          {/* Card 2: Phone & WhatsApp */}
          <a
            href="tel:+966112345678"
            className="group relative flex items-center justify-between p-7 sm:p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-stone-200/90 hover:border-[#E5B842] shadow-xs hover:shadow-2xl hover:shadow-[#E5B842]/15 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Top-Right Ambient Glow on Hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E5B842]/20 via-[#F3D78A]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-5 relative z-10">
              {/* Floating 3D Gold Vessel */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FDF6E2] via-[#F8E39E] to-[#E5B842]/30 border border-[#E5B842]/50 flex items-center justify-center text-[#A87913] shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Phone className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-stone-400 block mb-1">
                  الهاتف والواتساب الموحد
                </span>
                <span className="text-base sm:text-lg font-extrabold text-stone-900 group-hover:text-[#A87913] transition-colors font-mono tracking-tight" dir="ltr">
                  +966 11 234 5678
                </span>
              </div>
            </div>

            <div className="w-11 h-11 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-center text-stone-400 group-hover:bg-[#E5B842] group-hover:text-stone-950 group-hover:border-[#E5B842] transition-all duration-300 shrink-0 shadow-2xs relative z-10">
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
