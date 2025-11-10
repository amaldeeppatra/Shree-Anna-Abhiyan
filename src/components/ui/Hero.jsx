import React from 'react';
// 1. Import the Link component from react-router-dom
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import lady1 from '../../assets/lady1.png';
import robolady from '../../assets/robolady.png';
import quesmark from '../../assets/quesmark.png';

const KIOSK_URL = import.meta.env.VITE_KIOSK_APP_URL;
const SURVEY_URL = import.meta.env.VITE_SURVEY_APP_URL;

const Hero = () => {
  return (
    <section className="w-full bg-background py-8 px-4">
      <style>{`
        :root {
          --primary-color: #DE6B18;
          --secondary-color: #F3D1B0;
          --accent-color: #FFE7D1;
          --background-color: #FFFBF8;
          --text-color: #212121;
          --tertiary-color: #8C3F0B;
        }
        .bg-background {
          background-color: var(--background-color);
        }
        .bg-primary {
          background-color: var(--primary-color);
        }
        .bg-tertiary {
          background-color: var(--tertiary-color);
        }
        .text-primary {
          color: var(--primary-color);
        }
        .text-tertiary {
          color: var(--tertiary-color);
        }
        .hero-card {
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
          /* Add a transition for a subtle hover effect on the card */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        /* Make cards lift up on hover since they are links now */
        .grid > a:hover .hero-card, 
        .grid > a:focus .hero-card,
        .flex > a:hover .hero-card,
        .flex > a:focus .hero-card,
        .flex > a:hover .hero-card,
        .flex > a:focus .hero-card {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          font-size: 16px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Large Card - Wrapped in an <a> tag for an external link */}
          <div className="hero-card bg-gradient-to-br from-[#806743] to-[#DFCAAC] relative overflow-hidden min-h-[500px] lg:min-h-[600px]">
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Fresh and Healthy<br />Millet Products
                </h1>
                <div className="flex items-center gap-3 bg-tertiary text-white px-4 py-2 rounded-lg inline-flex w-fit">
                  <span className="text-sm font-medium">Sale up to</span>
                  <span className="text-xl font-bold">30% OFF</span>
                </div>
                <p className="text-white text-sm lg:text-base">
                  Free shipping on all your order.
                </p>
              </div>
              <div>
                <a
                  href={KIOSK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="hero-button bg-white text-gray-900 group-hover:shadow-lg group-hover:-translate-y-px">
                    Shop now
                    <ArrowRight size={20} />
                  </div>
                </a>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full">
              <div className="w-full h-full flex items-end justify-end">
                <img src={lady1} alt="Woman with millet products" className='' />
              </div>
            </div>
          </div>
          {/* </a> */}

          {/* Right Side - Two Cards Stacked */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* Top Card - Wrapped in <Link> for an internal route */}
            {/* <Link to="/chat" className="group"> */}
            <div className="hero-card bg-gradient-to-br from-[#C3C0A4] to-[#98957E] relative overflow-hidden min-h-[240px] lg:min-h-[290px]">
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-xs lg:text-sm font-medium text-gray-700 uppercase tracking-wide">
                    HAVE QUERIES ?
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-tertiary">
                    ASK OUR GUIDE!
                  </h2>
                  <p className="text-sm lg:text-base text-gray-700">
                    AI Powered Chat Guidance for members...
                  </p>
                </div>
                <div>
                  <Link to="/chat" className="group">
                    <div className="hero-button bg-white text-gray-900 text-sm lg:text-base group-hover:shadow-lg group-hover:-translate-y-px">
                      Talk with Us
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/3 h-full">
                <div className="w-full h-full flex items-end justify-end">
                  <img src={robolady} alt="AI Chat Guide" />
                </div>
              </div>
            </div>
            {/* </Link> */}
            <div className="hero-card bg-gradient-to-br from-[#C16623] to-[#FFA767] relative overflow-hidden min-h-[240px] lg:min-h-[290px]">
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-xs lg:text-sm font-medium text-white uppercase tracking-wide">
                    GIVE US YOUR VALUABLE INSIGHTS
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    FILL UP!
                  </h2>
                  <p className="text-sm lg:text-base text-gray-800">
                    A curated Survey helping us to understand you better...
                  </p>
                </div>
                <div>
                  <a
                    href={SURVEY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="hero-button bg-white text-gray-900 text-sm lg:text-base group-hover:shadow-lg group-hover:-translate-y-px">
                      Fill Now
                      <ArrowRight size={18} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/3 h-full">
                <div className="w-full h-full flex items-center justify-end">
                  <img src={quesmark} alt="Survey icon" />
                </div>
              </div>
            </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;