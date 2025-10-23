import React from 'react';

const Card = ({ title, image, buttonText = "Explore More", bgColor = "bg-orange-500" }) => {
  return (
    <div className={`${bgColor} rounded-xl overflow-hidden relative h-80 flex-1 mx-2 group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 p-6 flex flex-col justify-between">
        <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-lg">
          {title}
        </h3>
        
        <button className="bg-white text-gray-800 px-6 py-2.5 rounded-full font-semibold text-sm self-start hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;