export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'Layout' | 'Code' | 'Sparkles' | 'Smartphone' | 'ShieldCheck' | 'BarChart3';
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Web Design' | 'Brand Identity' | 'Development' | 'Architecture';
  shortDescription: string;
  fullDescription: string;
  image: string;
  client: string;
  year: string;
  deliverables: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface SiteContent {
  siteName: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  businessHours: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    image: string;
  };
  intro: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    subtitle: string;
    story: string;
    experienceYears: string;
    mission: string;
    vision: string;
    image: string;
    stats: Array<{ label: string; value: string }>;
  };
  whyChooseUs: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  cta: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
  services: ServiceItem[];
  portfolio: PortfolioItem[];
}
