'use client';

import React from 'react';

export default function AboutVision() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Centered Kicker in Bright Radiant Gold */}
        <span className="text-xs font-bold text-[#C99726] uppercase tracking-widest block mb-3">
          رؤيتنا ورسالتنا
        </span>

        {/* Centered Main Headline */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-8 leading-snug">
          نزرع الموثوقية... <br />
          <span className="text-[#DFB235]">لتعزيز الأمن الغذائي واستدامة الحصاد</span>
        </h2>

        {/* Focused Institutional Prose (Only the primary paragraph) */}
        <div className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-balance">
          <p>
            نلتزم في شركة <strong className="text-stone-900 font-bold">حصاد (HSSAD)</strong> بأن نكون ركيزة أساسية وموثوقة في دعم منظومة الأمن الغذائي الوطني والإقليمي، عبر إدارة وتأمين سلاسل إمداد زراعية متطورة تضمن تدفق أجود المحاصيل الحقلية الاستراتيجية من المزارع النموذجية إلى كبرى مصانع الأغذية ومطاحن الدقيق ومجمعات الإنتاج الحيواني.
          </p>
        </div>
      </div>
    </section>
  );
}
