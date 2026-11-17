import { CROPS_DATA } from '@/lib/cropsData';
import type { QuoteFormData, QuoteValidationRule } from './types';

export const QUOTE_MODAL_COPY = {
  logoAlt: 'شعار حصاد',
  title: 'طلب عرض سعر وتوريد أعلاف | حصاد',
  subtitle: 'فريق المبيعات واللوجستيات يتواصل معك خلال ساعات العمل الرسمية',
  closeAriaLabel: 'إغلاق النافذة',
  successTitle: 'تم استلام طلبك بنجاح!',
  successTextBeforePhone: 'شكراً لتواصلك مع شركة حصاد. تم إحالة طلب التسعير لممثلنا التجاري وسيقوم بالتواصل معكم قريباً عبر رقم الهاتف ',
  successTextAfterPhone: '.',
  successButton: 'حسناً، تم',
  clientNameLabel: 'اسم المسؤول / العميل',
  companyNameLabel: 'اسم المزرعة / الشركة / المصنع',
  cropTypeLabel: 'المنتج المطلوب',
  quantityLabel: 'الكمية التقديرية (بالطن)',
  phoneLabel: 'رقم الهاتف أو الواتساب',
  emailLabel: 'البريد الإلكتروني',
  destinationLabel: 'مدينة أو ميناء الوصول / الوجهة',
  notesLabel: 'ملاحظات أو مواصفات خاصة',
  clientNamePlaceholder: 'الاسم الكريم',
  companyNamePlaceholder: 'اسم المزرعة أو المنشأة',
  cropPlaceholder: 'اختر المنتج...',
  quantityPlaceholder: 'مثال: 50 طن أو صب 1000 طن',
  phonePlaceholder: 'مثال: +971 50 123 4567',
  emailPlaceholder: 'office@company.com',
  destinationPlaceholder: 'مثال: مستودعات أبوظبي، ميناء خليفة، ميناء جبل علي...',
  notesPlaceholder: 'أي اشتراطات خاصة بنسبة الرطوبة أو جدول مواعيد التوريد...',
  submit: 'إرسال طلب عرض السعر',
} as const;

export const QUOTE_CROP_OPTIONS = [
  ...CROPS_DATA.map((crop) => ({ value: crop.name, label: crop.name, id: crop.id })),
  {
    value: 'أخرى / شحنات مخصصة',
    label: 'أخرى / شحنات مخصصة',
    id: 'custom',
  },
];

export const QUOTE_VALIDATION_RULES: QuoteValidationRule[] = [
  {
    field: 'clientName',
    requirement: 'trimmed',
    message: 'يرجى إدخال اسم المسؤول أو جهة الاتصال.',
  },
  {
    field: 'phone',
    requirement: 'trimmed',
    message: 'يرجى إدخال رقم الهاتف أو الواتساب للتواصل.',
  },
  {
    field: 'cropType',
    requirement: 'present',
    message: 'يرجى تحديد المنتج المطلوب.',
  },
];

export function createQuoteFormData(cropType = ''): QuoteFormData {
  return {
    clientName: '',
    companyName: '',
    cropType,
    quantityTons: '',
    destination: '',
    phone: '',
    email: '',
    notes: '',
  };
}

export const QUOTE_MODAL_COPY_I18N = {
  ar: QUOTE_MODAL_COPY,
  en: {
    logoAlt: 'Hassad logo',
    title: 'Request a Feed Supply Quotation | Hassad',
    subtitle: 'Our sales and logistics team will contact you during official business hours',
    closeAriaLabel: 'Close dialog',
    successTitle: 'Your request has been received!',
    successTextBeforePhone: 'Thank you for contacting Hassad. Your quotation request has been referred to our commercial representative, who will contact you shortly on ',
    successTextAfterPhone: '.',
    successButton: 'Done',
    clientNameLabel: 'Contact Person / Client Name',
    companyNameLabel: 'Farm / Company / Factory Name',
    cropTypeLabel: 'Requested Product',
    quantityLabel: 'Estimated Quantity (metric tonnes)',
    phoneLabel: 'Phone or WhatsApp Number',
    emailLabel: 'Email Address',
    destinationLabel: 'Destination City or Port',
    notesLabel: 'Notes or Special Specifications',
    clientNamePlaceholder: 'Full name',
    companyNamePlaceholder: 'Farm or company name',
    cropPlaceholder: 'Select a product...',
    quantityPlaceholder: 'Example: 50 tonnes or bulk shipment of 1,000 tonnes',
    phonePlaceholder: 'Example: +971 50 123 4567',
    emailPlaceholder: 'office@company.com',
    destinationPlaceholder: 'Example: Abu Dhabi warehouses, Khalifa Port, Jebel Ali Port...',
    notesPlaceholder: 'Special moisture requirements or delivery schedule...',
    submit: 'Submit Quotation Request',
  },
} as const;

export const QUOTE_CROP_OPTIONS_I18N = {
  ar: QUOTE_CROP_OPTIONS,
  en: [
    ...QUOTE_CROP_OPTIONS.slice(0, CROPS_DATA.length).map((option, index) => ({
      ...option,
      label: [
        'Dried Fodder',
        'Straw and Fodder Stalks',
        'Concentrated Feed and Straw Pellets',
        'Feed Commodities and Ingredients',
        'Premium Timothy Hay',
        'Dehydrated Alfalfa',
        'Green Rhodes and Bermuda Grass',
        'Dried Coastal Bermuda Grass',
        'Premium Groundnuts',
        'High-Protein Soybean Meal',
        'Yellow Soybeans',
        'High-Energy Feed Pellets',
        'White Sorghum Grain',
        'High-Quality Hard Wheat',
        'Complete Feed Mix',
        'Cottonseed Meal and Oilseed Flakes',
      ][index],
      value: QUOTE_CROP_OPTIONS[index].value,
    })),
    {
      ...QUOTE_CROP_OPTIONS[CROPS_DATA.length],
      label: 'Other / Custom Shipments',
    },
  ],
} as const;

export const QUOTE_VALIDATION_RULES_I18N = {
  ar: QUOTE_VALIDATION_RULES,
  en: QUOTE_VALIDATION_RULES.map((rule, index) => ({
    ...rule,
    message: [
      'Please enter the contact person’s name.',
      'Please enter a phone or WhatsApp number.',
      'Please select the requested product.',
    ][index],
  })),
} as const;
