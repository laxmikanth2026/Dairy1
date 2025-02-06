import React, { useState } from 'react';
import { Search, MapPin, Filter, X } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export default function SearchBar() {
  const { filters, setFilters, searchQuery, setSearchQuery } = useMarketplace();
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="relative w-full sm:w-auto">
      <div className="flex items-center gap-2 w-full">
        <div className="relative flex-1 sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search by location or product..."
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`p-2 text-gray-400 hover:text-gray-600 bg-white border border-gray-200 rounded-lg ${
            showFilters ? 'bg-gray-100' : ''
          }`}
        >
          <Filter className="h-5 w-5" />
        </button>
      </div>

      {showFilters && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-900">Filters</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Distance
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={filters.distance}
                onChange={(e) =>
                  setFilters({ ...filters, distance: parseInt(e.target.value) })
                }
                className="w-full"
              />
              <div className="text-sm text-gray-500 mt-1">
                Within {filters.distance} km
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={filters.priceRange?.min}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      priceRange: { ...filters.priceRange!, min: Number(e.target.value) }
                    })
                  }
                  className="w-1/2 p-2 border rounded-lg"
                  placeholder="Min"
                />
                <input
                  type="number"
                  value={filters.priceRange?.max}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      priceRange: { ...filters.priceRange!, max: Number(e.target.value) }
                    })
                  }
                  className="w-1/2 p-2 border rounded-lg"
                  placeholder="Max"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Types
              </label>
              <div className="space-y-2">
                {['Fresh Milk', 'Yogurt', 'Cheese', 'Butter', 'Cream'].map((product) => (
                  <label key={product} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={filters.products.includes(product)}
                      onChange={(e) => {
                        const newProducts = e.target.checked
                          ? [...filters.products, product]
                          : filters.products.filter((p) => p !== product);
                        setFilters({ ...filters, products: newProducts });
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-600">{product}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}