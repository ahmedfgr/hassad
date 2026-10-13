'use client';

import React from 'react';
import { Droplets, Sprout, ShieldCheck } from 'lucide-react';

export default function SustainabilitySection() {
  const pillars = [
    {
      metric: '35%',
      label: 'ترشيد استهلاك المياه',
      subtext: 'عبر تقنيات الري الذكي والمحاور المبرمجة.',
      icon: <Droplets className="w-5 h-5 text-stone-700" />,
    },
    {
      metric: '+50',
      label: 'مزرعة شريكة معتمدة',
      subtext: 'عقود شراء عادلة وتمكين المزارع المحلي.',
      icon: <Sprout className="w-5 h-5 text-stone-700" />,
    },
    {
      metric: '100%',
      label: 'مطابقة للمعايير البيئية',
      subtext: 'ممارسات زراعية خالية من الملوثات الضارة.',
      icon: <ShieldCheck className="w-5 h-5 text-stone-700" />,
    },
  ];

  return (
    <section id="sustainability" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-2">
            الاستدامة
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            مسؤولية بيئية تدعم استمرارية الإنتاج
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-emerald-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <div className="text-3xl font-extrabold text-stone-900 font-mono tracking-tight tabular-nums mb-2">
                {item.metric}
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
