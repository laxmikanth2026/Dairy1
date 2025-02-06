import React from 'react';
import { Briefcase, Users, Building, BookOpen, Award } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

const secondaryNavItems = [
  { name: 'Find Work', href: '/find-work', icon: Briefcase },
  { name: 'Dairy Network', href: '/network', icon: Users },
  { name: 'Companies', href: '/companies', icon: Building },
  { name: 'Learning', href: '/learning', icon: BookOpen },
  { name: 'Certifications', href: '/certifications', icon: Award },
];

export default function SecondaryNavbar() {
  const { currentPage, setCurrentPage } = useMarketplace();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {secondaryNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.href)}
                className={`flex items-center space-x-2 py-4 border-b-2 px-1 ${
                  currentPage === item.href
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="whitespace-nowrap font-medium text-sm">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}