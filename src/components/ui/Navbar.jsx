import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Search, Heart, ShoppingCart, User, Menu, X, MapPin, Phone } from 'lucide-react';
import logo from '../../assets/shreeannaabhiyan.png';
import Cookies from 'js-cookie';
import ParseJWT from '../../utils/ParseJWT';

// Import Link from react-router-dom for internal navigation
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get('token');
    if (tokenFromUrl) {
      Cookies.set('token', tokenFromUrl, { secure: true, sameSite: 'none', expires: 1 / 48 }); // 30 minutes expiration
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = ParseJWT(token);
        setUserInfo(decoded?.user || null);
        // console.log("✅ User decoded:", decoded.user);
      } catch (error) {
        console.error("❌ Error decoding token:", error);
        setUserInfo(null);
      }
    }
  }, []);

  const locationText = 'KIIT Millet Cafe, Campus 3, KIIT, Patia';
  const googleMapsUrl = `https://www.google.com/maps/place/Koraput+Coffee+and+Millet+Hub/@20.3540974,85.8153915,20z/data=!4m10!1m2!2m1!1sKIIT+Millet+Cafe,+Campus+3,+KIIT,+Patia!3m6!1s0x3a19096937f7d133:0x85812b074b185790!8m2!3d20.3540974!4d85.8159387!15sCidLSUlUIE1pbGxldCBDYWZlLCBDYW1wdXMgMywgS0lJVCwgUGF0aWEiA4gBAVomIiRraWl0IG1pbGxldCBjYWZlIGNhbXB1cyAzIGtpaXQgcGF0aWGSAQtjb2ZmZWVfc2hvcKoBeAoNL2cvMTFja2t4djdrawoJL20vMGdmaDVtEAEqDyILbWlsbGV0IGNhZmUoADIfEAEiG7cyNTsSfjcLPFrMXAOYktuC9BmUgMyeefDBxjIoEAIiJGtpaXQgbWlsbGV0IGNhZmUgY2FtcHVzIDMga2lpdCBwYXRpYeABAA!16s%2Fg%2F11svm9tt6f?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D`;

  const navLinks = [
    { name: 'Home', href: '/', isExternal: false },
    { name: 'Shop', href: 'https://millet-kiosk-app.vercel.app', isExternal: true },
    { name: 'Services', href: '#services', isExternal: false },
    { name: 'About Us', href: '/about', isExternal: false },
    { name: 'Contact Us', href: '#contact', isExternal: false }
  ];

  const handleGoogleSignIn = () => {
    try {
      // Clear any old token cookies first (optional, avoids stale logins)
      Cookies.remove('token');

      // Redirect user to backend OAuth route with "state=integrated"
      window.location.href = `${API_URL}/auth/google?state=integrated`;
    } catch (error) {
      console.error('❌ Error during Google Sign-In:', error);
    }
  };


  

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-background border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex justify-between items-center">
            {/* 2. Wrap the location info in an anchor tag */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors duration-200"
            >
              <MapPin size={16} />
              <span>Store Location: {locationText}</span>
            </a>
            <div className="hidden md:flex items-center gap-4 text-sm">
              {/* <button className="text-gray-700 cursor-pointer hover:text-gray-900" >Sign In / Sign Up</button> */}
              {userInfo ? (
                <div className="flex items-center gap-2 cursor-pointer group">
                  {userInfo.avatar ? (
                    <img
                      src={userInfo.avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full object-cover border border-gray-300"
                      // onClick={() => navigate('/profile')}
                    />
                  ) : (
                    <div
                      className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold"
                      // onClick={() => navigate('/profile')}
                    >
                      {userInfo.name ? userInfo.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                  <span
                    className="font-medium text-gray-700 text-sm group-hover:text-primary"
                    // onClick={() => navigate('/profile')}
                  >
                    {userInfo.name?.split(' ')[0] || 'User'}
                  </span>
                </div>
              ) : (
                <button
                  onClick={handleGoogleSignIn}
                  className="text-gray-700 cursor-pointer hover:text-gray-900"
                >
                  Sign In / Sign Up
                </button>
              )}

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
              <img src={logo} alt="Shree Anna Yojana" className='size-16 mb-8 transform translate-y-4' />
              <span className="text-2xl font-bold text-primary">
                Shree Anna Abhiyan
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
            <div className="flex items-center gap-8">
              {/* 3. Using React Router Link for internal links */}
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium hover:text-gray-200 transition-colors">
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} to={link.href} className="text-white text-sm font-medium hover:text-gray-200 transition-colors">
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="block py-3 text-base font-medium text-gray-700 hover-primary transition-colors border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} to={link.href} className="block py-3 text-base font-medium text-gray-700 hover-primary transition-colors border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
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