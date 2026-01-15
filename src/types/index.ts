// Formation types
export interface Formation {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  price: number;
  priceFrom?: boolean;
  duration?: string;
  hours?: number;
  icon: string;
  features: string[];
  popular?: boolean;
  new?: boolean;
  comingSoon?: boolean;
  eligibleCPF?: boolean;
}

// Ville types for SEO pages
export interface Ville {
  slug: string;
  name: string;
  distance: number;
  population: number;
  priority: 'haute' | 'moyenne' | 'basse';
  transportInfo?: string;
  neighborhoods?: string[];
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  initials?: string;
  formation: string;
  text: string;
  rating: number;
  date?: string;
  city?: string;
  avatar?: string;
}

// Pricing types
export interface PricingItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  includes?: string[];
}

export interface PricingCategory {
  id: string;
  name: string;
  items: PricingItem[];
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  certifications?: string[];
  experience?: number;
}

// Vehicle types
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  type: 'manual' | 'automatic';
  year: number;
  color?: string;
  image?: string;
}

// Contact form types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  formation?: string;
  message: string;
  consent: boolean;
}

// Blog types
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  publishedAt: string;
  category: string;
  tags?: string[];
  readingTime: number;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: string;
}

// Stats types
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Metadata types
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
