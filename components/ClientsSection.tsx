'use client';

import React, { useRef, useEffect } from 'react';
import { Building2, Factory, Wheat, Store, Warehouse, ShieldCheck, Landmark, Sprout } from 'lucide-react';

interface ClientItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

export default function ClientsSection() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const row1Clients: ClientItem[] = [
    {
      id: 'mills',
      name: 'شركة المطاحن الوطنية الكبرى',
      category: 'مطاحن وصوامع حبوب',
      icon: <Wheat className="w-9 h-9 text-[#A87913]" />,
    },
    {
      id: 'food-ind',
      name: 'مجمع الصناعات الغذائية الخليجي',
      category: 'تصنيع غذائي واستيراد',
      icon: <Factory className="w-9 h-9 text-[#A87913]" />,
    },
    {
      id: 'grain-silos',
      name: 'مجموعة الصوامع والتخزين الإقليمي',
      category: 'لوجستيات وتخزين استراتيجي',
      icon: <Warehouse className="w-9 h-9 text-[#A87913]" />,
    },
    {
      id: 'delta-trade',
      name: 'شركة التجارة الزراعية الدولية',
      category: 'توريد وتجارة جملة',
      icon: <Landmark className="w-9 h-9 text-[#A87913]" />,
    },
  ];

  const row2Clients: ClientItem[] = [
    {
      id: 'dairy-farms',
      name: 'مزارع الإنتاج الحيواني والألبان',
      category: 'مشاريع إنتاج زراعي وحيواني',
      icon: <Building2 className="w-9 h-9 text-[#A87913]" />,
    },
    {
      id: 'feed-comp',
      name: 'مصانع الأعلاف المركزة والسيلاج',
      category: 'تصنيع أعلاف متخصصة',
      icon: <ShieldCheck className="w-9 h-9 text-[#A87913]" />,
    },
    {
      id: 'retail-dist',
      name: 'سلاسل التوزيع والتموين الغذائي',
      category: 'سلاسل إمداد وتوزيع',
      icon: <Store className="w-9 h-9 text-[#A87913]" />,
    },
    {
      id: 'agri-coop',
      name: 'الاتحاد التعاوني الزراعي الإقليمي',
      category: 'تكتل مزارع وجمعيات زراعية',
      icon: <Sprout className="w-9 h-9 text-[#A87913]" />,
    },
  ];

  // Scroll to center item (index 1) on mount so the main card is centered with both edges visible
  useEffect(() => {
    const centerCard = (container: HTMLDivElement | null) => {
      if (!container) return;
      const cards = container.querySelectorAll<HTMLElement>('.client-card');
      if (cards.length > 1) {
        const targetCard = cards[1];
        const containerCenter = container.offsetWidth / 2;
        const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
        container.scrollTo({
          left: cardCenter - containerCenter,
          behavior: 'auto',
        });
      }
    };

    const timer = setTimeout(() => {
      centerCard(row1Ref.current);
      centerCard(row2Ref.current);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  const renderCard = (client: ClientItem) => (
    <div
      key={client.id}
      className="client-card shrink-0 w-[74vw] sm:w-[420px] md:w-[450px] snap-center group relative flex items-center justify-between p-5 sm:p-6 bg-white rounded-3xl border border-stone-200/90 hover:border-[#E5B842] hover:shadow-xl hover:shadow-[#E5B842]/10 transition-all duration-300"
    >
      {/* Right Side in RTL: Enlarged Circular Logo / Image Vessel */}
      <div className="flex items-center">
        {/* Outer Circular Void / Negative-Space Ring */}
        <div className="relative w-20 h-20 rounded-full bg-stone-50 border border-dashed border-stone-300 flex items-center justify-center p-2 shrink-0 transition-colors group-hover:border-[#E5B842]/80 group-hover:bg-[#FDF6E2]">
          {/* Floating Circular Emblem */}
          <div className="w-16 h-16 rounded-full bg-white border border-stone-200/90 shadow-xs flex items-center justify-center group-hover:scale-105 group-hover:border-[#E5B842] transition-all duration-300">
            {client.icon}
          </div>
        </div>

        {/* Text information */}
        <div className="mr-5">
          <span className="text-[11px] font-semibold text-[#A87913] block mb-0.5">
            {client.category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#A87913] transition-colors leading-snug">
            {client.name}
          </h3>
        </div>
      </div>

      {/* Minimal Accent Dot in Radiant Gold */}
      <div className="w-2.5 h-2.5 rounded-full bg-stone-200 group-hover:bg-[#E5B842] transition-colors shrink-0 mr-2" />
    </div>
  );

  return (
    <section id="clients" className="py-20 sm:py-28 bg-white border-b border-stone-100 overflow-hidden">
      <div className="w-full">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 px-4 sm:px-6">
          <span className="text-xs font-bold text-[#C99726] uppercase tracking-widest block mb-2">
            عملاء حصاد
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            شركاء النجاح وسلاسل الإمداد
          </h2>
        </div>

        {/* Row 1 with horizontal scroll and no scrollbar */}
        <div className="mb-6">
          <div
            ref={row1Ref}
            className="flex items-center gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-[13vw] sm:px-[calc((100%-420px)/2)] md:px-[calc((100%-450px)/2)]"
          >
            {row1Clients.map(renderCard)}
          </div>
        </div>

        {/* Row 2 with horizontal scroll and no scrollbar */}
        <div>
          <div
            ref={row2Ref}
            className="flex items-center gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-[13vw] sm:px-[calc((100%-420px)/2)] md:px-[calc((100%-450px)/2)]"
          >
            {row2Clients.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
