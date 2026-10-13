'use client';

import React from 'react';
import { Building2, Factory, Wheat, Store, Warehouse, ShieldCheck } from 'lucide-react';

interface ClientItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export default function ClientsSection() {
  const clients: ClientItem[] = [
    {
      id: 'mills',
      name: 'شركة المطاحن الوطنية الكبرى',
      icon: <Wheat className="w-5 h-5 text-amber-700" />,
    },
    {
      id: 'food-ind',
      name: 'مجمع الصناعات الغذائية الخليجي',
      icon: <Factory className="w-5 h-5 text-amber-700" />,
    },
    {
      id: 'dairy-farms',
      name: 'مزارع الإنتاج الحيواني والألبان',
      icon: <Building2 className="w-5 h-5 text-amber-700" />,
    },
    {
      id: 'grain-silos',
      name: 'مجموعة الصوامع والتخزين الإقليمي',
      icon: <Warehouse className="w-5 h-5 text-amber-700" />,
    },
    {
      id: 'feed-comp',
      name: 'مصانع الأعلاف المركزة والسيلاج',
      icon: <ShieldCheck className="w-5 h-5 text-amber-700" />,
    },
    {
      id: 'retail-dist',
      name: 'سلاسل التوزيع والتموين الغذائي',
      icon: <Store className="w-5 h-5 text-amber-700" />,
    },
  ];

  return (
    <section id="clients" className="py-20 sm:py-28 bg-white border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            عملاؤنا
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            شركاء النجاح
          </h2>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative flex items-center justify-between p-4 sm:p-5 bg-white rounded-2xl border border-stone-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-300"
            >
              {/* Right Side in RTL: Circular Logo Vessel with Physical Separation & Connecting Void */}
              <div className="flex items-center">
                {/* Outer Circular Void / Negative-Space Ring */}
                <div className="relative w-16 h-16 rounded-full bg-stone-50/90 border border-dashed border-stone-300 flex items-center justify-center p-1.5 shrink-0 transition-colors group-hover:border-amber-300 group-hover:bg-amber-50/40">
                  {/* Floating Circular Emblem (Physically separated inside the circular void) */}
                  <div className="w-12 h-12 rounded-full bg-white border border-stone-200/90 shadow-xs flex items-center justify-center group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300">
                    {client.icon}
                  </div>
                </div>

                {/* Left Side in RTL: Company Name Only */}
                <div className="mr-4">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {client.name}
                  </h3>
                </div>
              </div>

              {/* Minimal Accent Dot connecting with the card space */}
              <div className="w-1.5 h-1.5 rounded-full bg-stone-200 group-hover:bg-amber-400 transition-colors shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
