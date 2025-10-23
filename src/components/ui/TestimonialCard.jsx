import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, image, rating = 5 }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="text-green-400 text-5xl font-serif mb-4">"</div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        {quote}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
            <p className="text-gray-500 text-xs">{role}</p>
          </div>
        </div>
        
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, index) => (
            <Star 
              key={index} 
              size={16} 
              className="fill-orange-400 text-orange-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;