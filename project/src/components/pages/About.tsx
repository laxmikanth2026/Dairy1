import React from 'react';
import { Milk, Users, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About DairyConnect</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connecting dairy farmers and buyers directly, creating a sustainable and efficient marketplace for fresh dairy products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Milk className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fresh Products</h3>
            <p className="text-gray-600">Direct from farms to your doorstep, ensuring quality and freshness.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">Building strong relationships between farmers and consumers.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">All products meet strict quality and safety standards.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Practice</h3>
            <p className="text-gray-600">Supporting eco-friendly and ethical dairy farming.</p>
          </div>
        </div>
      </div>
    </div>
  );
}