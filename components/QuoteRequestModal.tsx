'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Send, Wheat } from 'lucide-react';
import { CROPS_DATA } from '@/lib/cropsData';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCropName?: string;
}

export default function QuoteRequestModal({
  isOpen,
  onClose,
  initialCropName = '',
}: QuoteRequestModalProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    companyName: '',
    cropType: initialCropName,
    quantityTons: '',
    destination: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.clientName.trim()) {
      setErrorMsg('يرجى إدخال اسم المسؤول أو جهة الاتصال.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('يرجى إدخال رقم الهاتف أو الواتساب للتواصل.');
      return;
    }
    if (!formData.cropType) {
      setErrorMsg('يرجى تحديد المحصول المطلوب.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      clientName: '',
      companyName: '',
      cropType: '',
      quantityTons: '',
      destination: '',
      phone: '',
      email: '',
      notes: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-stone-900 text-white relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
              <Wheat className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">طلب عرض سعر وتوريد محاصيل</h3>
              <p className="text-xs text-stone-300">
                فريق المبيعات واللوجستيات يتواصل معك خلال ساعات العمل الرسمية
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-stone-900">
                تم استلام طلبك بنجاح!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                شكراً لتواصلك مع شركة محاصيل. تم إحالة طلب التسعير لممثلنا التجاري وسيقوم بالتواصل معكم قريباً عبر رقم الهاتف {formData.phone}.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  type="button"
                  className="px-6 py-2.5 text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all cursor-pointer"
                >
                  حسناً، تم
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    اسم المسؤول / العميل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="الاسم الكريم"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    اسم الشركة / المطحنة / المصنع
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="اسم المنشأة التجارية"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    المحصول المطلوب <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.cropType}
                    onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                  >
                    <option value="">اختر نوع المحصول...</option>
                    {CROPS_DATA.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                    <option value="أخرى / شحنات مخصصة">أخرى / شحنات مخصصة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    الكمية التقديرية (بالطن)
                  </label>
                  <input
                    type="text"
                    value={formData.quantityTons}
                    onChange={(e) => setFormData({ ...formData, quantityTons: e.target.value })}
                    placeholder="مثال: 50 طن أو صب 1000 طن"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    رقم الهاتف أو الواتساب <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="مثال: +966 50 123 4567"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-left"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="office@company.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-left"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  مدينة أو ميناء الوصول / الوجهة
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="مثال: مستودعات الرياض، ميناء الملك عبدالعزيز بالدمام، ميناء جدة الإسلامي..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ملاحظات أو مواصفات خاصة
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="أي اشتراطات خاصة بنسبة الرطوبة أو جدول مواعيد التوريد..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال طلب عرض السعر</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
