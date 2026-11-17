'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf } from 'lucide-react';
import { motion } from 'motion/react';

const ABOUT_TAGS = [
  'جودة معتمدة ومسؤولة',
  'إمداد مستدام',
  'شراكات استراتيجية',
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-us-title"
      className="overflow-hidden border-b border-stone-100 bg-[#FAFAFA] py-20 sm:py-24"
    >
      <div
        dir="ltr"
        className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
      >
        <motion.div
          dir="rtl"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 text-center lg:order-2 lg:text-right"
        >
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6 lg:justify-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5B842]/40 bg-[#E5B842]/10 text-[#C99726] shadow-sm">
              <Leaf className="h-5 w-5" />
            </div>
            <h2
              id="about-us-title"
              className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl"
            >
              عنّا
            </h2>
          </div>
          <p className="text-sm leading-8 text-stone-600 text-balance sm:text-base sm:leading-9">
            نعمل كشريك استراتيجي يربط بين نخبة الموردين المعتمدين والمزارع ومشاريع الثروة الحيوانية في المنطقة. وعبر منظومة لوجستية متكاملة وعالية الكفاءة، نوفر حلول تغذية مستدامة توازن بين القيمة الغذائية الفائقة والجدوى الاقتصادية، لدعم الأمن الغذائي وتعزيز استمرارية أعمال شركائنا.
          </p>

          <ul className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 lg:justify-start">
            {ABOUT_TAGS.map((tag, index) => (
              <motion.li
                key={tag}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[#E5B842]/35 bg-white px-4 py-2 text-xs font-semibold text-stone-700 shadow-sm sm:text-sm"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#C99726]" />
                {tag}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:order-1"
          aria-label="صور من الحقول الزراعية"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-stone-200/80 shadow-sm">
            <Image
              src="/hero_image_2.png"
              alt="سنابل القمح في الحقول الزراعية"
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-stone-200/80 shadow-sm">
            <Image
              src="/hero_image_3.png"
              alt="مشهد جوي للمزارع والحقول"
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
