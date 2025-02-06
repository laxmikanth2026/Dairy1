import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import UserTypeSwitch from './components/UserTypeSwitch';
import MarketplaceCard from './components/MarketplaceCard';
import SearchBar from './components/SearchBar';
import CarouselSection from './components/CarouselSection';
import SpinningWheel from './components/SpinningWheel';
import About from './components/pages/About';
import HowItWorks from './components/pages/HowItWorks';
import SuccessStories from './components/pages/SuccessStories';
import Contact from './components/pages/Contact';
import { MarketplaceProvider, useMarketplace } from './context/MarketplaceContext';
import { AuthProvider } from './context/AuthContext';

function MarketplaceContent() {
  const { users, userType, filters, searchQuery, currentPage } = useMarketplace();
  const [showSpinningWheel, setShowSpinningWheel] = useState(false);
  
  useEffect(() => {
    // Show spinning wheel after a short delay when on home page
    if (currentPage === '/') {
      const timer = setTimeout(() => {
        setShowSpinningWheel(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const filteredUsers = users.filter((user) => {
    if (user.type === userType) return false;
    if (user.distance > filters.distance) return false;
    if (filters.products.length > 0) {
      const hasMatchingProduct = user.products.some(product =>
        filters.products.includes(product.name)
      );
      if (!hasMatchingProduct) return false;
    }
    if (filters.priceRange) {
      const hasProductInPriceRange = user.products.some(
        product =>
          product.price &&
          product.price >= filters.priceRange!.min &&
          product.price <= filters.priceRange!.max
      );
      if (!hasProductInPriceRange) return false;
    }
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        user.name.toLowerCase().includes(searchLower) ||
        user.products.some(product =>
          product.name.toLowerCase().includes(searchLower)
        ) ||
        (user.bio && user.bio.toLowerCase().includes(searchLower));
      if (!matchesSearch) return false;
    }
    return true;
  });

  const renderContent = () => {
    switch (currentPage) {
      case '/about':
        return <About />;
      case '/how-it-works':
        return <HowItWorks />;
      case '/success-stories':
        return <SuccessStories />;
      case '/contact':
        return <Contact />;
      default:
        return (
          <>
            <CarouselSection />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <UserTypeSwitch />
                <SearchBar />
              </div>
              {filteredUsers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredUsers.map((user) => (
                    <MarketplaceCard key={user.id} user={user} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No {userType === 'buyer' ? 'sellers' : 'buyers'} found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <SpinningWheel 
        isOpen={showSpinningWheel} 
        onClose={() => setShowSpinningWheel(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MarketplaceProvider>
        <MarketplaceContent />
      </MarketplaceProvider>
    </AuthProvider>
  );
}