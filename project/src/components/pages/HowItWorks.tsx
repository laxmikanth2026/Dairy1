import React from 'react';
import { UserPlus, Search, MessageCircle, ThumbsUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-blue-600" />,
      title: 'Create an Account',
      description: 'Sign up as a buyer or seller to access the marketplace.'
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Browse Products',
      description: 'Search for dairy products or browse available listings.'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      title: 'Connect',
      description: 'Message sellers directly to discuss products and prices.'
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
      title: 'Complete Transaction',
      description: 'Finalize your purchase and arrange delivery.'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to start trading on DairyConnect
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}