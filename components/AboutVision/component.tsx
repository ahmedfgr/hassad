'use client';

import { Eye, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageProvider/component';
import { ABOUT_VISION_ITEMS_I18N, ABOUT_VISION_TITLE_I18N } from './data';
import type { AboutVisionProps } from './types';

export default function AboutVision(_props: AboutVisionProps) {
  const { locale, direction } = useLanguage();
  const items = ABOUT_VISION_ITEMS_I18N[locale];

  return (
    <section
      id="about"
      dir={direction}
      className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center text-2xl font-extrabold tracking-tight text-stone-900 sm:mb-16 sm:text-3xl"
        >
          {ABOUT_VISION_TITLE_I18N[locale]}
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
          {items.map((item) => (
            <motion.div
              key={item.icon}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              <h3 className="mb-4 flex items-center justify-center gap-3 text-xl font-extrabold tracking-tight text-[#A87913] sm:text-2xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B842]/15 text-[#A87913]">
                  {item.icon === 'eye' ? (
                    <Eye aria-hidden="true" className="h-5 w-5" />
                  ) : (
                    <Target aria-hidden="true" className="h-5 w-5" />
                  )}
                </span>
                {item.title}
              </h3>
              <p className="mx-auto max-w-xl text-sm leading-8 text-stone-600 text-balance sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
