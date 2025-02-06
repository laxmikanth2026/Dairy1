import React from 'react';
import Carousel from './Carousel';

const farmersCarouselItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=2070',
    title: 'Fresh Valley Farm',
    description: 'Family-owned dairy farm with over 35 years of tradition in organic farming.',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=2070',
    title: 'Green Meadows Dairy',
    description: 'Sustainable farming practices with happy, grass-fed cows.',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1594761077961-cadd5ce417f8?auto=format&fit=crop&q=80&w=2070',
    title: 'Mountain View Dairy',
    description: 'Premium dairy products from our mountain pastures.',
  },
];

export default function CarouselSection() {
  return (
    <div className="mb-8">
      <Carousel items={farmersCarouselItems} autoPlayInterval={6000} />
    </div>
  );
}