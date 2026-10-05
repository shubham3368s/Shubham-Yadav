export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  backgroundImage: string;
  accentColor: string; // e.g. '#A855F7', '#EC4899', '#7C3AED'
  videoBg?: string;
  deliverables?: string[];
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  projectDetails: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
}
