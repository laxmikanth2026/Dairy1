import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

interface SpinningWheelProps {
  isOpen: boolean;
  onClose: () => void;
}

const products = [
  { 
    name: 'Fresh Milk', 
    color: '#3B82F6', 
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=100'
  },
  { 
    name: 'Yogurt', 
    color: '#EF4444', 
    image: 'https://images.unsplash.com/photo-1571212515416-fca988684e60?auto=format&fit=crop&q=80&w=100'
  },
  { 
    name: 'Cheese', 
    color: '#F59E0B', 
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=100'
  },
  { 
    name: 'Butter', 
    color: '#10B981', 
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=100'
  },
  { 
    name: 'Cream', 
    color: '#8B5CF6', 
    image: 'https://images.unsplash.com/photo-1563599175592-c58dc214deff?auto=format&fit=crop&q=80&w=100'
  },
  { 
    name: 'Ice Cream', 
    color: '#EC4899', 
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=100'
  },
  { 
    name: 'Ghee', 
    color: '#6366F1', 
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=100'
  },
  { 
    name: 'Paneer', 
    color: '#14B8A6', 
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=100'
  }
];

export default function SpinningWheel({ isOpen, onClose }: SpinningWheelProps) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedProduct(null);

    const baseRotation = Math.floor(Math.random() * 5 + 5) * 360;
    const finalRotation = baseRotation + Math.floor(Math.random() * 360);

    setRotation(finalRotation);

    setTimeout(() => {
      const normalizedRotation = finalRotation % 360;
      const productIndex = Math.floor((360 - normalizedRotation) / (360 / products.length));
      setSelectedProduct(products[productIndex].name);
      setIsSpinning(false);
    }, 5000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Spin the Dairy Wheel!</h2>
          <p className="text-gray-600">
            Discover your dairy destiny - give it a spin!
          </p>
        </div>

        <div className="relative">
          {/* Wheel container with outer ring */}
          <div className="relative w-72 h-72 mx-auto">
            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-full border-8 border-blue-600/20" />
            
            {/* Center pin and arrow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 h-16 w-2 -translate-x-1/2 -translate-y-1/2 origin-top">
                <div className="w-2 h-full bg-blue-600 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rotate-45" />
              </div>
            </div>

            {/* Spinning wheel */}
            <div
              ref={wheelRef}
              className="w-full h-full rounded-full relative transition-transform duration-5000 ease-out shadow-2xl"
              style={{
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {products.map((product, index) => {
                const rotation = (360 / products.length) * index;
                return (
                  <div
                    key={product.name}
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: '50% 50%',
                      clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)',
                    }}
                  >
                    <div
                      className="w-full h-full"
                      style={{ backgroundColor: product.color }}
                    >
                      <div 
                        className="absolute left-1/2 top-12 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md"
                        style={{ transform: `rotate(${-rotation}deg)` }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Spin button */}
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className={`mt-12 w-full py-4 px-6 rounded-xl text-white font-medium transition-all transform ${
              isSpinning
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
          </button>

          {/* Selected product announcement */}
          {selectedProduct && (
            <div className="mt-6 text-center animate-fade-in">
              <div className="inline-block px-6 py-3 bg-blue-50 rounded-full">
                <p className="text-lg font-medium text-gray-900">
                  You got: <span className="text-blue-600 font-bold">{selectedProduct}</span>!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}