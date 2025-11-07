import React, {useEffect} from 'react'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/ui/Hero'
import Card from '../components/ui/Card'
import Testimonial from '../components/sections/Testimonial';
import AboutUs from '../components/sections/AboutUs';
import Footer from '../components/ui/Footer';
import fs1 from '../assets/fs1.png'
import fs2 from '../assets/fs2.png'
import fs3 from '../assets/fs3.png'
import fs4 from '../assets/fs4.png'

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Healthy Millet-Based Products",
      image: fs1,
      buttonText: "Explore More",
      bgColor: "bg-amber-500"
    },
    {
      id: 2,
      title: "Instant Ordering & Smart Pickup",
      image: fs2,
      buttonText: "Explore More",
      bgColor: "bg-orange-400"
    },
    {
      id: 3,
      title: "Personalized Recommendations",
      image: fs3,
      buttonText: "Explore More",
      bgColor: "bg-green-600"
    },
    {
      id: 4,
      title: "Digital Payments & Loyalty Rewards",
      image: fs4,
      buttonText: "Explore More",
      bgColor: "bg-yellow-600"
    }
  ];

  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
      <Hero />
      {/* Featured Services Section */}
      <section className='py-12 px-4 md:px-8 lg:px-28'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Featured Services
            </h2>
            <button className='text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 text-sm md:text-base'>
              View All
              <span>→</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-0'>
            {services.map((service) => (
              <Card
                key={service.id}
                title={service.title}
                image={service.image}
                buttonText={service.buttonText}
                bgColor={service.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonial />

      <AboutUs />

      <Footer />
    </div>
  );
};

export default Home