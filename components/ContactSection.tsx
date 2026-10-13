'use client';

import React from 'react';
import { Mail, Phone, ArrowLeft } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            تواصل معنا
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-3">
            قنوات الاتصال المباشرة
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed text-balance">
            يسعد فريقنا التجاري بخدمتكم وتوفير الاستشارات الفنية وجداول التوريد على مدار ساعات العمل الرسمية.
          </p>
        </div>

        {/* 2 Horizontal Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Email */}
          <a
            href="mailto:info@mahaseel-agri.com"
            className="group flex items-center justify-between p-6 bg-white rounded-2xl border border-stone-200/80 hover:border-amber-400 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-medium text-stone-400 block mb-1">
                  البريد الإلكتروني الرسمي
                </span>
                <span className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors font-mono" dir="ltr">
                  info@mahaseel-agri.com
                </span>
              </div>
            </div>

            <div className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:border-amber-500 transition-all shrink-0">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
          </a>

          {/* Card 2: Phone & WhatsApp */}
          <a
            href="tel:+966112345678"
            className="group flex items-center justify-between p-6 bg-white rounded-2xl border border-stone-200/80 hover:border-amber-400 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-medium text-stone-400 block mb-1">
                  الاتصال المباشر والواتساب
                </span>
                <span className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors font-mono" dir="ltr">
                  +966 11 234 5678
                </span>
              </div>
            </div>

            <div className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shrink-0">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
