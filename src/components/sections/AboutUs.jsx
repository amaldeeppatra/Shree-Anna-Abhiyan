import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-28 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About <span className="text-primary">Millet Mission - Shree Anna Abhiyan</span>
            </h2>

            {/* Brief Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              The Millet Mission (Shree Anna Abhiyan) is a government initiative to revive and promote millets as nutritious superfoods. We empower farmers, especially women, by connecting them directly to consumers, promoting sustainable agriculture and healthy living through these ancient grains.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a href="/about" target='_blank'>
                <button className="bg-primary cursor-pointer hover:bg-tertiary text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:gap-4 shadow-md hover:shadow-lg">
                  Know More
                  <ArrowRight size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;