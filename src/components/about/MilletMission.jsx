import React from 'react';
import logo from '../../assets/shreeannaabhiyan.png';

const MilletMission = () => {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl lg:text-5xl font-bold text-tertiary mb-4 leading-tight">
            Our Inspiration: <br />
            <span className="text-primary">Shree Anna Abhiyan</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            "Shree Anna" (The Mother of all Grains) is a government-led initiative to promote millets as a staple food, recognizing their immense nutritional value, climate resilience, and potential to empower small farmers. This mission drives our work at Shakti Saathi.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are committed to leveraging technology to support this vision. Our platform aims to connect farmers, consumers, and experts, creating a robust ecosystem for millet production and consumption, contributing to a healthier and more sustainable future for all.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src={logo} 
            alt="A vibrant field of millets" 
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MilletMission;