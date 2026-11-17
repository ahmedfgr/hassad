'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Send } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider/component';
import {
  QUOTE_CROP_OPTIONS,
  QUOTE_CROP_OPTIONS_I18N,
  QUOTE_MODAL_COPY_I18N,
  QUOTE_VALIDATION_RULES_I18N,
  createQuoteFormData,
} from './data';
import type { QuoteRequestModalProps } from './types';

function resolveCropOptionId(initialCropName: string) {
  return QUOTE_CROP_OPTIONS.find((option, index) => (
    option.id === initialCropName
    || option.value === initialCropName
    || option.label === initialCropName
    || QUOTE_CROP_OPTIONS_I18N.en[index]?.label === initialCropName
  ))?.id ?? '';
}

export default function QuoteRequestModal({
  isOpen,
  onClose,
  initialCropName = '',
}: QuoteRequestModalProps) {
  const [formData, setFormData] = useState(
    () => createQuoteFormData(resolveCropOptionId(initialCropName)),
  );
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { locale, direction } = useLanguage();
  const copy = QUOTE_MODAL_COPY_I18N[locale];
  const cropOptions = QUOTE_CROP_OPTIONS_I18N[locale];
  const validationRules = QUOTE_VALIDATION_RULES_I18N[locale];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const failedRule = validationRules.find((rule) => {
      const value = formData[rule.field];
      return rule.requirement === 'trimmed' ? !value.trim() : !value;
    });

    if (failedRule) {
      setErrorMsg(failedRule.message);
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(createQuoteFormData());
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      dir={direction}
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 bg-stone-900 text-white relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt={copy.logoAlt}
                width={40}
                height={40}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{copy.title}</h3>
              <p className="text-xs text-stone-300">{copy.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label={copy.closeAriaLabel}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-stone-900">
                {copy.successTitle}
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                {copy.successTextBeforePhone}
                <span dir="ltr">{formData.phone}</span>
                {copy.successTextAfterPhone}
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  type="button"
                  className="px-6 py-2.5 text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] rounded-xl border border-[#E5B842] transition-colors cursor-pointer"
                >
                  {copy.successButton}
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
                    {copy.clientNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder={copy.clientNamePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {copy.companyNameLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder={copy.companyNamePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {copy.cropTypeLabel} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.cropType}
                    onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] transition-colors"
                  >
                    <option value="">{copy.cropPlaceholder}</option>
                    {cropOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {copy.quantityLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.quantityTons}
                    onChange={(e) => setFormData({ ...formData, quantityTons: e.target.value })}
                    placeholder={copy.quantityPlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {copy.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={copy.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] transition-colors text-left"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {copy.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={copy.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] transition-colors text-left"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {copy.destinationLabel}
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder={copy.destinationPlaceholder}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {copy.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={copy.notesPlaceholder}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E5B842]/20 focus:border-[#E5B842] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold text-stone-950 bg-[#E5B842] hover:bg-[#F0C446] active:scale-[0.99] rounded-xl border border-[#E5B842] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{copy.submit}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
