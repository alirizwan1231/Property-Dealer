export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  status: 'for-sale' | 'for-rent';
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  featured?: boolean;
  amenities: string[];
  yearBuilt: number;
  parkingSpaces: number;
  floors: number;
  agentId: string;
};