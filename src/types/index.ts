export type ActivityCategory = 
  | 'cultura' 
  | 'deporte' 
  | 'integracion' 
  | 'solidarias' 
  | 'infantiles';

export interface Activity {
  id: string;
  title: string;
  slug: string;
  category: ActivityCategory;
  date: string;
  time?: string;
  location: string;
  price: number | 'gratis';
  image?: string;
  description: string;
  excerpt: string;
  contactMethod: 'whatsapp' | 'email' | 'both';
  requirements?: string;
  capacity?: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  cover?: string;
  author?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface TransparencyRecord {
  id: string;
  date: string;
  type: 'donation' | 'expense' | 'income';
  description: string;
  amount: number;
  donor?: string;
}

export interface MatchResult {
  id: string;
  date: string;
  opponent: string;
  home: boolean;
  score?: string;
  result?: 'win' | 'loss' | 'draw';
  photos?: string[];
  time?: string;
  venue?: string;
}

export type LawyerCategory = 'extranjeria' | 'tramites' | 'laboral' | 'familiar';

export interface LawyerAppointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  category: LawyerCategory;
  modality: 'online' | 'presencial';
  urgency: 'low' | 'medium' | 'high';
  notes?: string;
  date?: string;
}
