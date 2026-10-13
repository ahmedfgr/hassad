'use client';

import React from 'react';
import { Users, TrendingUp, Leaf } from 'lucide-react';

export default function AboutVision() {
  const values = [
    {
      title: 'شراكات موثوقة',
      desc: 'علاقات توريد مباشرة ومستدامة مع المزارعين وكبرى المصانع والمطاحن.',
      icon: <Users className="w-5 h-5 text-stone-700" />,
    },
    {
      title: 'جودة استثنائية',
      desc: 'فحص مخبري صارم لمعدلات النقاء والرطوبة والبروتين لكل شحنة.',
      icon: <TrendingUp className="w-5 h-5 text-stone-700" />,
    },
    {
      title: 'استدامة الموارد',
      desc: 'ممارسات ري ذكي وحماية لخصوبة التربة للأجيال القادمة.',
      icon: <Leaf className="w-5 h-5 text-stone-700" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            رؤيتنا
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            نزرع الموثوقية بحلول زراعية مستدامة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-amber-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
