import React from 'react';
import { X } from 'lucide-react';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  name: string;
  onClose: () => void;
}

export default function LocationMap({ latitude, longitude, name, onClose }: LocationMapProps) {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${latitude},${longitude}&zoom=15`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h3 className="text-lg font-semibold mb-4">{name}'s Location</h3>
        
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            title="Location Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src={mapUrl}
          ></iframe>
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          Coordinates: {latitude}, {longitude}
        </div>
      </div>
    </div>
  );
}