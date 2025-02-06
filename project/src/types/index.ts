export type UserType = 'buyer' | 'seller';
export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

export interface Product {
  id: string;
  name: string;
  quantity?: string;
  unit?: string;
  price?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  location: {
    latitude: number;
    longitude: number;
  };
  distance?: number;
  products: Product[];
  image: string;
  isAvailable: boolean;
  rating?: number;
  reviewCount?: number;
  bio?: string;
  phoneNumber?: string;
}

export interface SearchFilters {
  type: UserType;
  distance: number;
  products: string[];
  priceRange?: {
    min: number;
    max: number;
  };
}

export interface AuthContextType {
  user: User | null;
  status: AuthStatus;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  type: UserType;
  phoneNumber?: string;
}