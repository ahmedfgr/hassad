'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const IMPORT_MARKETS = [
  { name: 'الولايات المتحدة', flag: '/flagCountires/US.png' },
  { name: 'تنزانيا', flag: '/flagCountires/TNZ.png' },
  { name: 'مصر', flag: '/flagCountires/EG.png' },
  { name: 'باكستان', flag: '/flagCountires/PS.png' },
  { name: 'الإمارات', flag: '/flagCountires/AE.png' },
  { name: 'فرنسا', flag: '/flagCountires/FR.png' },
];

export default function ImportMarkets() {
  return (
    <section
      aria-labelledby="import-markets-title"
      className="overflow-hidden border-b border-stone-100 bg-[#FAFAFA] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#C99726]">
            مصادرنا العالمية
          </span>
          <h2
            id="import-markets-title"
            className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl"
          >
            أسواق نستورد منها
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
            نعمل مع أسواق متعددة لتأمين احتياجات عملائنا من الأعلاف ومكوناتها.
          </p>
        </motion.div>

        <ul className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-5 sm:gap-6 lg:grid-cols-6">
          {IMPORT_MARKETS.map((market, index) => (
            <motion.li
              key={market.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex w-full max-w-40 flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-stone-200/90 bg-gradient-to-br from-white to-stone-50 px-3 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E5B842] hover:shadow-lg sm:max-w-44 sm:gap-3"
            >
              <span className="relative h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full bg-white shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24">
                <Image
                  src={market.flag}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 96px, 72px"
                  className="rounded-full object-contain"
                />
              </span>
              <span className="max-w-full text-xs font-bold leading-relaxed text-stone-800 sm:text-sm">
                {market.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
