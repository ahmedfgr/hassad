export interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCropName?: string;
}

export interface QuoteFormData {
  clientName: string;
  companyName: string;
  cropType: string;
  quantityTons: string;
  destination: string;
  phone: string;
  email: string;
  notes: string;
}

export type RequiredQuoteField = 'clientName' | 'phone' | 'cropType';

export interface QuoteValidationRule {
  field: RequiredQuoteField;
  requirement: 'trimmed' | 'present';
  message: string;
}
