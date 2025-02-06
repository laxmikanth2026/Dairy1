import React from 'react';
import { X, Star, MapPin, Phone, Mail, Clock, Package, DollarSign } from 'lucide-react';
import { User, Product } from '../types';

interface UserProfileModalProps {
  user: User;
  onClose: () => void;
}

interface ProductTableProps {
  products: Product[];
}

function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${product.price}/{product.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function UserProfileModal({ user, onClose }: UserProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header Image */}
          <div className="h-48 w-full">
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>

          {/* User Type Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              user.type === 'seller'
                ? 'bg-green-100 text-green-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {user.type === 'seller' ? 'Seller' : 'Buyer'}
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* User Info */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                {user.rating && (
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-700">
                      {user.rating}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({user.reviewCount} reviews)
                    </span>
                  </div>
                )}
              </div>

              {user.bio && (
                <p className="mt-4 text-gray-600">{user.bio}</p>
              )}

              <div className="mt-6 space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{user.distance} km away</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href={`tel:${user.phoneNumber}`} className="hover:text-blue-600">
                    {user.phoneNumber}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{user.isAvailable ? 'Currently Available' : 'Not Available'}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 md:w-64">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Package className="h-6 w-6 mx-auto text-blue-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {user.products.length}
                </div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <DollarSign className="h-6 w-6 mx-auto text-green-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {user.products.reduce((avg, p) => avg + (p.price || 0), 0) / user.products.length}
                </div>
                <div className="text-sm text-gray-500">Avg. Price</div>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {user.type === 'seller' ? 'Products Available' : 'Products Needed'}
            </h3>
            <ProductTable products={user.products} />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href={`tel:${user.phoneNumber}`}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Contact Now
            </a>
            <a
              href={`mailto:${user.email}`}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}