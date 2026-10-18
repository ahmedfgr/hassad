'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function AboutVision() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Centered Kicker in Bright Radiant Gold */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold text-[#C99726] uppercase tracking-widest block mb-3"
        >
          رؤيتنا ورسالتنا
        </motion.span>

        {/* Centered Main Headline with Blur-to-Clear Reveal */}
        <motion.h2
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-8 leading-snug"
        >
          نزرع الموثوقية... <br />
          <span className="text-[#DFB235]">لتعزيز الأمن الغذائي واستدامة الحصاد</span>
        </motion.h2>

        {/* Focused Institutional Prose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-balance"
        >
          <p>
            نلتزم في شركة <strong className="text-stone-900 font-bold">حصاد (HSSAD)</strong> بأن نكون ركيزة أساسية وموثوقة في دعم منظومة الأمن الغذائي الوطني والإقليمي، عبر إدارة وتأمين سلاسل إمداد زراعية متطورة تضمن تدفق أجود المحاصيل الحقلية الاستراتيجية من المزارع النموذجية إلى كبرى مصانع الأغذية ومطاحن الدقيق ومجمعات الإنتاج الحيواني.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
