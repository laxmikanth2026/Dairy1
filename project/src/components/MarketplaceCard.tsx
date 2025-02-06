import React, { useState } from 'react';
import { MapPin, Hand, Star, Phone } from 'lucide-react';
import { User } from '../types';
import { useMarketplace } from '../context/MarketplaceContext';
import LocationMap from './LocationMap';
import UserProfileModal from './UserProfileModal';

interface MarketplaceCardProps {
  user: User;
}

export default function MarketplaceCard({ user }: MarketplaceCardProps) {
  const { toggleAvailability } = useMarketplace();
  const [showMap, setShowMap] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setShowProfile(true)}
      >
        <div className="relative h-48">
          <img
            src={user.image}
            alt={user.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              user.type === 'seller' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {user.type === 'seller' ? 'Seller' : 'Buyer'}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMap(true);
                }}
                className="flex items-center text-sm text-gray-500 mt-1 hover:text-blue-600"
              >
                <MapPin className="h-4 w-4 mr-1" />
                <span>{user.distance} km away</span>
              </button>
            </div>
            {user.rating && (
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium text-gray-700">{user.rating}</span>
                <span className="text-sm text-gray-500 ml-1">({user.reviewCount})</span>
              </div>
            )}
          </div>

          {user.bio && (
            <p className="text-sm text-gray-600 mb-4">{user.bio}</p>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {user.products.map((product) => (
              <div
                key={product.id}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                <span>{product.name}</span>
                {product.price && (
                  <span className="ml-1 font-medium">${product.price}/{product.unit}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${user.phoneNumber}`}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Contact
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleAvailability(user.id);
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                user.isAvailable
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Hand className="h-4 w-4" />
              {user.isAvailable ? 'Lower Hand' : 'Raise Hand'}
            </button>
          </div>
        </div>
      </div>

      {showMap && (
        <LocationMap
          latitude={user.location.latitude}
          longitude={user.location.longitude}
          name={user.name}
          onClose={() => setShowMap(false)}
        />
      )}

      {showProfile && (
        <UserProfileModal
          user={user}
          onClose={() => setShowProfile(false)}
        />
      )}
    </>
  );
}