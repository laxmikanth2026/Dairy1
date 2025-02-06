import React from 'react';
import { useMarketplace } from '../context/MarketplaceContext';

export default function UserTypeSwitch() {
  const { userType, setUserType } = useMarketplace();

  return (
    <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
      <button
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          userType === 'buyer'
            ? 'bg-blue-600 text-white'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => setUserType('buyer')}
      >
        Buyer
      </button>
      <button
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          userType === 'seller'
            ? 'bg-blue-600 text-white'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => setUserType('seller')}
      >
        Seller
      </button>
    </div>
  );
}