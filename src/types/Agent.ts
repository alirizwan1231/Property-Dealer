export type Agent = {
  id: string;
  name: string;
  photo: string;
  role: string;
  phone: string;
  email: string;
  bio: string;
  properties?: string[];
  rating?: number;
  featured?: boolean;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
};