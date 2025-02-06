import React, { createContext, useContext, useState, useCallback } from 'react';
import type { User, UserType, SearchFilters } from '../types';

interface MarketplaceContextType {
  userType: UserType;
  setUserType: (type: UserType) => void;
  users: User[];
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  toggleAvailability: (userId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const MarketplaceContext = createContext<MarketplaceContextType | undefined>(undefined);

const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Fresh Valley Farm',
    type: 'seller',
    location: { latitude: 40.7128, longitude: -74.0060 },
    distance: 2.3,
    products: [
      { id: '1', name: 'Fresh Milk', quantity: '100L', price: 2.5, unit: 'liter' },
      { id: '2', name: 'Yogurt', quantity: '50kg', price: 3.0, unit: 'kg' }
    ],
    image: 'https://images.unsplash.com/photo-1594761077961-cadd5ce417f8?auto=format&fit=crop&q=80&w=800',
    isAvailable: true,
    rating: 4.8,
    reviewCount: 156,
    bio: 'Family-owned dairy farm since 1985, specializing in organic dairy products.',
    phoneNumber: '+1 (555) 123-4567'
  },
  {
    id: '2',
    name: 'Green Meadows Dairy',
    type: 'seller',
    location: { latitude: 40.7589, longitude: -73.9851 },
    distance: 3.1,
    products: [
      { id: '3', name: 'Organic Milk', quantity: '200L', price: 3.2, unit: 'liter' },
      { id: '4', name: 'Cheese', quantity: '75kg', price: 12.5, unit: 'kg' }
    ],
    image: 'https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=800',
    isAvailable: true,
    rating: 4.6,
    reviewCount: 98,
    bio: 'Certified organic dairy farm with grass-fed cows.',
    phoneNumber: '+1 (555) 234-5678'
  },
  {
    id: '3',
    name: 'Sarah Mitchell',
    type: 'buyer',
    location: { latitude: 40.7549, longitude: -73.9840 },
    distance: 1.8,
    products: [
      { id: '5', name: 'Fresh Milk', quantity: '20L', price: 2.8, unit: 'liter' }
    ],
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=800',
    isAvailable: true,
    rating: 4.9,
    reviewCount: 45,
    bio: 'Local café owner looking for fresh dairy supplies.',
    phoneNumber: '+1 (555) 345-6789'
  }
];

export function MarketplaceProvider({ children }: { children: React.ReactNode }) {
  const [userType, setUserType] = useState<UserType>('buyer');
  const [users] = useState<User[]>(MOCK_USERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('/');
  const [filters, setFilters] = useState<SearchFilters>({
    type: 'seller',
    distance: 10,
    products: [],
    priceRange: { min: 0, max: 100 }
  });

  const toggleAvailability = useCallback((userId: string) => {
    console.log('Toggling availability for user:', userId);
  }, []);

  return (
    <MarketplaceContext.Provider
      value={{
        userType,
        setUserType,
        users,
        filters,
        setFilters,
        toggleAvailability,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext);
  if (context === undefined) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
}