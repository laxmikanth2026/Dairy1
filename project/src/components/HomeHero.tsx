import React from 'react';
import { Milk, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

const stats = [
  { 
    icon: Users,
    label: 'Active Users',
    value: '10,000+',
    color: 'bg-blue-500'
  },
  { 
    icon: Milk,
    label: 'Daily Transactions',
    value: '₹50L+',
    color: 'bg-green-500'
  },
  { 
    icon: TrendingUp,
    label: 'Growth Rate',
    value: '125%',
    color: 'bg-purple-500'
  },
  { 
    icon: Award,
    label: 'Quality Score',
    value: '4.8/5',
    color: 'bg-yellow-500'
  }
];

export default function HomeHero() {
  const { setCurrentPage } = useMarketplace();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-[fadeIn_1s_ease-in]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Connect with India's Largest
              <span className="text-blue-600 block mt-2">
                Dairy Network
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Join thousands of dairy farmers and buyers across India. 
              Find the best deals, connect directly, and grow your dairy business.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setCurrentPage('/find-work')}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all"
              >
                Find Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentPage('/about')}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-[fadeIn_1s_ease-in]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated Wave Separator */}
        <div className="mt-16">
          <svg className="w-full h-12" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#EBF4FF"
              fillOpacity="0.5"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z;
                  M0,60L48,55C96,50,192,40,288,35C384,30,480,30,576,35C672,40,768,50,864,55C960,60,1056,60,1152,55C1248,50,1344,40,1392,35L1440,30L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z;
                  M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
              />
            </path>
          </svg>
        </div>
      </div>
    </div>
  );
}