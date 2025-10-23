import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X, MapPin, Phone } from 'lucide-react';
import logo from '../../assets/shreeannaabhiyan.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: 'http://localhost:5174' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-background border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-gray-600" />
              <span className="text-gray-700">Store Location: KIIT Millet Cafe, Campus 3, KIIT, Patia</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm">
              {/* <span className="text-gray-700">Eng</span>
              <span className="text-gray-700">INR</span> */}
              <button className="text-gray-700 hover:text-gray-900">Sign In / Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - White Background */}
      <div className="w-full bg-background shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-7">
              <img src={logo} alt="Shree Anna Yojana" className='size-16 mb-8 transform translate-y-4'/>
              <span className="text-2xl font-bold text-primary">
                Shakti Saathi
              </span>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 text-sm"
                />
                <button 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-primary rounded-md text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-3">
              {/* Cart Icon with Badge and Price */}
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="relative">
                  <ShoppingCart size={22} className="text-gray-700" />
                  <span 
                    className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full text-white text-xs flex items-center justify-center font-semibold"
                  >
                    2
                  </span>
                </div>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-xs text-gray-500">Shopping cart:</span>
                  <span className="text-sm font-semibold text-gray-900">$57.00</span>
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden pb-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 text-sm"
              />
              <button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-primary rounded-md text-white text-sm font-medium"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar - Brown Background */}
      <div className="w-full bg-tertiary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between h-14">
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target='_blank'
                  className="text-white text-sm font-medium hover:text-gray-200 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Phone Number */}
            {/* <div className="flex items-center gap-2 text-white">
              <Phone size={18} />
              <span className="text-sm font-medium">(219) 555-0114</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-base font-medium text-gray-700 hover-primary transition-colors border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
                <button className="flex items-center gap-2 py-2 w-full text-base font-medium text-gray-700">
                  <Phone size={18} />
                  <span>(219) 555-0114</span>
                </button>
                <button className="flex items-center gap-2 py-2 w-full text-base font-medium text-gray-700">
                  <User size={18} />
                  <span>Sign In / Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;