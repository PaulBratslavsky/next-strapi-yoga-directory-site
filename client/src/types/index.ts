export interface School {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website?: string;
  email?: string;
  description?: string;
  imageUrl?: string;
  rating?: number;
  styles?: string[];
  instructors?: string[];
  schedule?: string;
  hasDropInClasses?: boolean;
  dropInFee?: string;
  amenities?: string[];
  classLevels?: string[];
  parking?: string;
}

export interface SearchParams {
  query: string;
  type: 'location' | 'name';
}
