import React, { createContext, useContext, useState, useCallback } from 'react';
import type { User, AuthStatus, AuthContextType, SignUpData } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  type: 'buyer',
  location: { latitude: 40.7128, longitude: -74.0060 },
  products: [],
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
  isAvailable: true,
  rating: 4.5,
  reviewCount: 12,
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>('unauthenticated');

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setStatus('loading');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(mockUser);
      setStatus('authenticated');
    } catch (error) {
      setStatus('unauthenticated');
      throw error;
    }
  }, []);

  const signUp = useCallback(async (data: SignUpData) => {
    try {
      setStatus('loading');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ ...mockUser, ...data });
      setStatus('authenticated');
    } catch (error) {
      setStatus('unauthenticated');
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setStatus('loading');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(null);
      setStatus('unauthenticated');
    } catch (error) {
      setStatus('authenticated');
      throw error;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, status, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}