/**
 * Global interface definitions for CISGEIN
 */

export interface Feature {
  text: string;
  isHigh?: boolean;
}

export interface WebPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  idealFor: string;
  isPopular?: boolean;
}

export interface WhyFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  subValue: string;
  href?: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  paquete: string;
  mensaje: string;
}
