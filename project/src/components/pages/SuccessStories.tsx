import React from 'react';
import { Star } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: "John's Dairy Farm",
    image: "https://images.unsplash.com/photo-1594761077961-cadd5ce417f8?auto=format&fit=crop&q=80&w=800",
    story: "Increased our customer base by 300% within 3 months of joining DairyConnect.",
    rating: 5
  },
  {
    id: 2,
    name: "Green Valley Cafe",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800",
    story: "Found reliable suppliers for our organic dairy needs. Quality products, great service!",
    rating: 5
  },
  {
    id: 3,
    name: "Mountain Fresh Dairy",
    image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=800",
    story: "Connected with local restaurants and expanded our business significantly.",
    rating: 4
  }
];

export default function SuccessStories() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read about how DairyConnect has helped farmers and buyers achieve their goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                  <div className="flex items-center">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}