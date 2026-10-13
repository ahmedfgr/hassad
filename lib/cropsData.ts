export interface CropSpecification {
  purity: string;
  moisture: string;
  packaging: string;
  standard: string;
  usage: string;
}

export interface CropItem {
  id: string;
  name: string;
  category: 'grains' | 'seeds' | 'fodder' | 'other';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  specs: CropSpecification;
  accentColor: string;
  bgGradient: string;
  imageUrl: string;
}

export const CROPS_DATA: CropItem[] = [
  {
    id: 'wheat',
    name: 'القمح الذهبي (Wheat)',
    category: 'grains',
    categoryLabel: 'الحبوب',
    shortDesc: 'جودة استثنائية لصناعات الطحن والمخبوزات والمعكرونة',
    fullDesc: 'نورد حبوب القمح الصلب واللين بدرجات نقاء عالمية، ملائمة لأكبر مطاحن الدقيق ومصانع الأغذية، مع التزام تام بالمعايير الفسيولوجية ومعدلات البروتين المحددة.',
    badge: 'الأكثر طلباً',
    specs: {
      purity: '99.5% نقاوة دنيا',
      moisture: 'أقل من 11.5%',
      packaging: 'سائب / صوامع / أكياس 50 كجم وجامبو',
      standard: 'مطابق لمواصفات الهيئة العامة للغذاء والدواء و ISO',
      usage: 'مطاحن الدقيق، صناعة الخبز الفاخر، مصانع البسكويت والمكرونة'
    },
    accentColor: 'text-amber-700',
    bgGradient: 'from-amber-100 via-amber-50 to-stone-50',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'barley',
    name: 'الشعير عالي النقاء (Barley)',
    category: 'grains',
    categoryLabel: 'الحبوب',
    shortDesc: 'أصناف نقية ممتازة للأغذية والمخاليط العلفية المركزة',
    fullDesc: 'شعير منتقى من أفضل المزارع المروية، يحتوي على نسبة ألياف وطاقة متوازنة تدعم الاستخدامات الغذائية والصناعية ومشاريع التغذية الحيوانية.',
    specs: {
      purity: '98% نقاوة معتمدة',
      moisture: 'أقل من 12%',
      packaging: 'شحنات صب بحرية / أكياس بولي بروبلين 50 كجم',
      standard: 'شهادات خلو من الآفات وتحليل جودة معتمد',
      usage: 'صناعات الحبوب والشوفان، خخلطات الأعلاف المتخصصة'
    },
    accentColor: 'text-amber-800',
    bgGradient: 'from-amber-100/80 via-yellow-50 to-stone-50',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corn',
    name: 'الذرة الصفراء (Yellow Corn)',
    category: 'grains',
    categoryLabel: 'الحبوب',
    shortDesc: 'محصول غني بالطاقة ومثالي لمصانع الأعلاف والصناعات الغذائية',
    fullDesc: 'ذرة صفراء مجففة آلياً ومخزنة وفق أرقى شروط التهوية ومقاومة الفطريات، تتميز بكثافة نوعية عالية وحبات متجانسة وخالية من الشوائب.',
    badge: 'طاقة عالية',
    specs: {
      purity: '99% حبوب سليمة',
      moisture: '13% إلى 14% كحد أقصى',
      packaging: 'شحنات سائبة مفرغة أو معبأة بالجامبو باج 1000 كجم',
      standard: 'فحص مسبق لسموم الأفلاتوكسين والجودة الحقلية',
      usage: 'صناعة النشا والزيوت، مصانع أعلاف الدواجن والماشية'
    },
    accentColor: 'text-yellow-700',
    bgGradient: 'from-yellow-100 via-amber-50 to-stone-50',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rice',
    name: 'الأرز الفاخر (Premium Rice)',
    category: 'grains',
    categoryLabel: 'الحبوب',
    shortDesc: 'أصناف مختارة بعناية تلبي أعلى متطلبات التوزيع الغذائي',
    fullDesc: 'أرز أبيض وبسمتي مميز بحبوب طويلة ومتجانسة ونسبة كسر متدنية جداً، يخضع لعمليات فرز ليزري وتلميع دقيق لضمان تجربة طهي متفوقة.',
    specs: {
      purity: '99.8% ونسبة كسر أقل من 2%',
      moisture: '12% متوازنة',
      packaging: 'أكياس خيش وبوليستر 10 كجم، 25 كجم، 40 كجم',
      standard: 'شهادة الجودة النوعية وسلامة الأغذية HACCP',
      usage: 'سلاسل الهايبرماركت، الفنادق والمطاعم، الإمداد الغذائي الحكومي'
    },
    accentColor: 'text-stone-700',
    bgGradient: 'from-stone-200/60 via-stone-100 to-white',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soybeans',
    name: 'بذور الصويا (Soybeans)',
    category: 'seeds',
    categoryLabel: 'البذور',
    shortDesc: 'المصدر النباتي الأول للبروتين والزيوت الأساسية',
    fullDesc: 'بذور فول الصويا عالية المحتوى البروتيني والزيتي، تعد عنصراً استراتيجياً لمصانع عصر الزيوت ومصانع كسب الصويا ومزارع الإنتاج الحيواني المكثف.',
    badge: 'غني بالبروتين',
    specs: {
      purity: '99% نقاوة بذرية',
      moisture: 'أقل من 11%',
      packaging: 'حاويات شحن وسفن صب، وعبوات 50 كجم',
      standard: 'محتوى بروتين لا يقل عن 46% ومحتوى زيت 18%',
      usage: 'معاصر الزيوت الغذائية، صناعة كسب الصويا، إضافات غذائية'
    },
    accentColor: 'text-amber-900',
    bgGradient: 'from-amber-100 via-orange-50 to-stone-50',
    imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sunflower',
    name: 'بذور دوار الشمس (Sunflower Seeds)',
    category: 'seeds',
    categoryLabel: 'البذور',
    shortDesc: 'لتلبية احتياجات معاصر الزيوت النباتية والأعلاف الراقية',
    fullDesc: 'بذور دوار شمس زيتية ومخططة نقية، تمتاز بنسبة زيت مركزة وقشور رقيقة، مفرزة آلياً ومخزنة تحت درجات حرارة ورطوبة مضبوطة بعناية.',
    specs: {
      purity: '98.5% نقاوة قياسية',
      moisture: 'أقل من 9%',
      packaging: 'أكياس ورقية متعددة الطبقات وأكياس جامبو',
      standard: 'معدل استخلاص زيت يتجاوز 42%',
      usage: 'إنتاج زيت دوار الشمس المكرر، أغذية الطيور، الصناعات الخفيفة'
    },
    accentColor: 'text-amber-800',
    bgGradient: 'from-amber-200/50 via-yellow-50 to-white',
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mixed-seeds',
    name: 'بذور متنوعة وبقوليات (Legumes & Seed Stock)',
    category: 'seeds',
    categoryLabel: 'البذور',
    shortDesc: 'أصناف منتقاة للبذور الزراعية المعتمدة والبقول الغذائية',
    fullDesc: 'باقة من البذور الزراعية المحسنة (برسيم، حبة البركة، بذور سمسم، وعدس وحمص) ذات قدرة إنبات ممتازة ومقاومة بيئية عالية تلائم المناخ المحلي والإقليمي.',
    specs: {
      purity: '99.2% قدرة إنبات تتجاوز 90%',
      moisture: 'من 8% إلى 10%',
      packaging: 'أكياس مبطنة عازلة للرطوبة 25 كجم',
      standard: 'شهادة اعتماد وإكثار بذري رسمية',
      usage: 'الزراعة الحقلية، سلاسل التجزئة وتوزيع البقوليات'
    },
    accentColor: 'text-emerald-800',
    bgGradient: 'from-emerald-100/60 via-stone-50 to-white',
    imageUrl: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'animal-feed',
    name: 'أعلاف مركبة وسيلولوزية (Animal Feed & Forage)',
    category: 'fodder',
    categoryLabel: 'الأعلاف',
    shortDesc: 'تركيبات غذائية متوازنة لتعزيز إنتاجية الثروة الحيوانية',
    fullDesc: 'تشكيلة متكاملة تشمل بالات البرسيم الحجازي المجفف آلياً، وحبيبات الأعلاف المركزة المصنعة وفق أحدث المعايير الغذائية للماشية والدواجن والخيول.',
    badge: 'طاقة ومناعة',
    specs: {
      purity: 'خالٍ من العفن والشوائب المعدنية',
      moisture: '10% إلى 12%',
      packaging: 'بالات مضغوطة 400-700 كجم / أكياس 40 كجم',
      standard: 'تحليل دوري للأحماض الأمينية والطاقة الاستقلابية',
      usage: 'مشاريع الألبان الكبرى، مزارع التسمين، إسطبلات الخيول'
    },
    accentColor: 'text-stone-800',
    bgGradient: 'from-stone-200 via-amber-50 to-stone-50',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
  }
];

export const COMPANY_STATS = [
  {
    number: '+20',
    title: 'دولة نصل إليها',
    desc: 'شبكة تصدير وتوزيع ممتدة في الشرق الأوسط وأفريقيا وآسيا'
  },
  {
    number: '+500',
    unit: 'ألف طن سنوياً',
    title: 'طاقة التوريد والتداول',
    desc: 'قدرة استيعابية مستقرة تضمن استمرارية الإمداد دون انقطاع'
  },
  {
    number: '+100',
    title: 'شريك تجاري وموزع',
    desc: 'شراكات راسخة مع كبرى المطاحن ومصانع الأغذية والأعلاف'
  },
  {
    number: '100%',
    title: 'مواصفات عالمية',
    desc: 'فحص مخبري صارم واعتمادات جودة لسلامة الغذاء والبيئة'
  }
];

export const CORE_VALUES = [
  {
    id: 'partnerships',
    title: 'شراكات قوية ومستدامة',
    desc: 'نبني علاقات طويلة الأمد مع المزارعين المحليين والشركاء الدوليين قائمة على الشفافية والنمو المشترك.',
    iconName: 'Users'
  },
  {
    id: 'quality',
    title: 'جودة استثنائية ومعايير دولية',
    desc: 'نخضع كل شحنة لفحوصات مخبرية دقيقة تضمن أعلى نسب النقاء وأقل معدلات الرطوبة وفق اشتراطات الهيئات المعتمدة.',
    iconName: 'TrendingUp'
  },
  {
    id: 'sustainability',
    title: 'استدامة الموارد البيئية',
    desc: 'نطبق ممارسات زراعية مسؤولة تهدف إلى حماية التربة وترشيد استهلاك المياه للحد من الأثر البيئي للأجيال القادمة.',
    iconName: 'Leaf'
  }
];

export const SUSTAINABILITY_PILLARS = [
  {
    id: 'community',
    title: 'دعم المجتمعات الزراعية',
    desc: 'تمكين المزارعين عبر عقود شراء عادلة، توفير بذور معتمدة، وتقديم برامج إرشاد حقلية لرفع كفاءة الإنتاج المحلي.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'practices',
    title: 'ممارسات مسؤولة وتقنيات ري ذكية',
    desc: 'اعتماد أنظمة الري بالتنقيط والمحاور الذكية لخفض هدر المياه بنسبة 35% واستخدام الطاقة النظيفة في مرافق المعالجة.',
    iconName: 'Droplets'
  },
  {
    id: 'environment',
    title: 'حماية التربة والتنوع الحيوي',
    desc: 'تطبيق الدورات الزراعية المناسبة وتسميد عضوي يحمي حيوية الأرض ويحد من استخدام المركبات الكيميائية غير الصديقة.',
    iconName: 'ShieldCheck'
  }
];
