'use client';

import React from 'react';

export default function AboutVision() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Centered Kicker */}
        <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-3">
          رؤيتنا ورسالتنا
        </span>

        {/* Centered Main Headline */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-8 leading-snug">
          نزرع الموثوقية... <br />
          <span className="text-amber-600">لتعزيز الأمن الغذائي واستدامة الإمداد</span>
        </h2>

        {/* Expanded Institutional Prose */}
        <div className="space-y-5 text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-balance">
          <p>
            نلتزم في شركة محاصيل بأن نكون ركيزة أساسية وموثوقة في دعم منظومة الأمن الغذائي الوطني والإقليمي، عبر إدارة وتأمين سلاسل إمداد زراعية متطورة تضمن تدفق أجود المحاصيل الحقلية الاستراتيجية من المزارع النموذجية إلى كبرى مصانع الأغذية ومطاحن الدقيق ومجمعات الإنتاج الحيواني.
          </p>
          <p className="text-stone-500 text-xs sm:text-sm">
            ترتكز مسيرتنا على الجمع بين تمكين شركائنا المزارعين، وتطبيق أدق بروتوكولات الفحص والرقابة المخبرية لنسب النقاء والرطوبة وفق المعايير الدولية، لبناء شراكات تجارية طويلة الأمد تتسم بالشفافية والمسؤولية الكاملة تجاه استدامة الموارد للأجيال القادمة.
          </p>
        </div>
      </div>
    </section>
  );
}
