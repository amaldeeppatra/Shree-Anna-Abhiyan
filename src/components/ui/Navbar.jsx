import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Search, Heart, ShoppingCart, User, Menu, X, MapPin, Phone, ArrowRight } from 'lucide-react';
import logo from '../../assets/shreeannaabhiyan.png';
import Cookies from 'js-cookie';
import ParseJWT from '../../utils/ParseJWT';

// Import Link from react-router-dom for internal navigation
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;
const KIOSK_URL = import.meta.env.VITE_KIOSK_APP_URL;
const SURVEY_BUILDER_URL = import.meta.env.VITE_SURVEY_BUILDER_URL || 'http://localhost:5174';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchRef = useRef(null);
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

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchSuggestions(false);
      }
    };

    if (showSearchSuggestions) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearchSuggestions]);

  const locationText = 'KIIT Millet Cafe, Campus 3, KIIT, Patia';
  const googleMapsUrl = `https://www.google.com/maps/place/Koraput+Coffee+and+Millet+Hub/@20.3540974,85.8153915,20z/data=!4m10!1m2!2m1!1sKIIT+Millet+Cafe,+Campus+3,+KIIT,+Patia!3m6!1s0x3a19096937f7d133:0x85812b074b185790!8m2!3d20.3540974!4d85.8159387!15sCidLSUlUIE1pbGxldCBDYWZlLCBDYW1wdXMgMywgS0lJVCwgUGF0aWEiA4gBAVomIiRraWl0IG1pbGxldCBjYWZlIGNhbXB1cyAzIGtpaXQgcGF0aWGSAQtjb2ZmZWVfc2hvcKoBeAoNL2cvMTFja2t4djdrawoJL20vMGdmaDVtEAEqDyILbWlsbGV0IGNhZmUoADIfEAEiG7cyNTsSfjcLPFrMXAOYktuC9BmUgMyeefDBxjIoEAIiJGtpaXQgbWlsbGV0IGNhZmUgY2FtcHVzIDMga2lpdCBwYXRpYeABAA!16s%2Fg%2F11svm9tt6f?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D`;

  const navLinks = [
    { name: 'Home', href: '/', isExternal: false },
    { name: 'Shop', href: KIOSK_URL, isExternal: true },
    { name: 'Services', href: '#services', isExternal: false },
    { name: 'About Us', href: '/about', isExternal: false },
    { name: 'Contact Us', href: '#contact', isExternal: false }
  ];

  // Define search intents with keywords
  const searchIntents = [
    {
      id: 'order',
      title: 'Order Food',
      description: 'Browse and order from our menu',
      icon: '🛒',
      url: KIOSK_URL,
      isExternal: true,
      keywords: [
        'order', 'buy', 'purchase', 'cart', 'checkout', 'food', 'menu', 
        'order food', 'place order', 'want to order', 'buy food', 
        'get food', 'food delivery', 'delivery', 'take away', 'takeaway'
      ]
    },
    {
      id: 'products',
      title: 'Browse Products',
      description: 'Explore products by category',
      icon: '📦',
      url: `${KIOSK_URL}/categories`,
      isExternal: true,
      keywords: [
        'product', 'products', 'item', 'items', 'category', 'categories',
        'millet', 'beverage', 'snacks', 'dessert', 'fast food', 'coffee',
        'samosa', 'sandwich', 'browse', 'show products', 'view products',
        'what products', 'available products', 'food items', 'menu items'
      ]
    },
    {
      id: 'help',
      title: 'Get Help - Chatbot',
      description: 'Chat with our AI assistant',
      icon: '💬',
      url: '/chat',
      isExternal: false,
      keywords: [
        'help', 'support', 'assist', 'assistance', 'chat', 'chatbot',
        'question', 'ask', 'inquiry', 'problem', 'issue', 'contact support',
        'need help', 'customer service', 'customer support', 'talk to someone',
        'help me', 'i need help', 'can you help'
      ]
    },
    {
      id: 'survey',
      title: 'Create Survey',
      description: 'Build a new survey or form',
      icon: '📋',
      url: SURVEY_BUILDER_URL,
      isExternal: true,
      keywords: [
        'survey', 'form', 'questionnaire', 'poll', 'feedback',
        'create survey', 'new survey', 'build survey', 'make survey',
        'survey builder', 'form builder', 'create form', 'new form',
        'feedback form', 'customer feedback'
      ]
    }
  ];

  // Cosine similarity calculation
  const calculateCosineSimilarity = (query, keywords) => {
    const queryLower = query.toLowerCase().trim();
    const queryWords = queryLower.split(/\s+/);
    
    // Direct match gets highest score
    if (keywords.some(kw => queryLower.includes(kw.toLowerCase()))) {
      return 1.0;
    }

    // Calculate word overlap
    let matchCount = 0;
    queryWords.forEach(word => {
      if (keywords.some(kw => kw.toLowerCase().includes(word) || word.includes(kw.toLowerCase()))) {
        matchCount++;
      }
    });

    return matchCount / Math.max(queryWords.length, 1);
  };

  // Handle search and generate suggestions
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      // Calculate similarity scores for each intent
      const scoredIntents = searchIntents.map(intent => ({
        ...intent,
        score: calculateCosineSimilarity(value, intent.keywords)
      }));

      // Filter and sort by score
      const filteredIntents = scoredIntents
        .filter(intent => intent.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3); // Show top 3 matches

      setSearchSuggestions(filteredIntents);
      setShowSearchSuggestions(filteredIntents.length > 0);
    } else {
      setSearchSuggestions([]);
      setShowSearchSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.isExternal) {
      window.open(suggestion.url, '_blank');
    } else {
      navigate(suggestion.url);
    }
    setSearchQuery('');
    setShowSearchSuggestions(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && searchSuggestions.length > 0) {
      handleSuggestionClick(searchSuggestions[0]); // Navigate to best match
    }
  };

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
              {userInfo ? (
                <div className="flex items-center gap-2 cursor-pointer group">
                  {userInfo.avatar ? (
                    <img
                      src={userInfo.avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full object-cover border border-gray-300"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {userInfo.name ? userInfo.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                  <span className="font-medium text-gray-700 text-sm group-hover:text-primary">
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
            <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for food, help, surveys..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.trim() && setShowSearchSuggestions(true)}
                  className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-primary rounded-md text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Search
                </button>

                {/* Search Suggestions Dropdown */}
                {showSearchSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
                    <div className="p-2">
                      <p className="text-xs text-gray-500 px-3 py-2 font-medium">Suggestions</p>
                      {searchSuggestions.map((suggestion) => (
                        <button
                          key="{suggestion.id}"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full flex items-center gap-3 px-3 py-3 hover:bg-gray-50 rounded-md transition-colors text-left group"
                        >
                          <span className="text-2xl">{suggestion.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-gray-800 text-sm">{suggestion.title}</h4>
                              {suggestion.isExternal && (
                                <span className="text-xs text-gray-400">↗</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">{suggestion.description}</p>
                          </div>
                          <ArrowRight size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-3">
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
          <div className="lg:hidden pb-4" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search for food, help, surveys..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery.trim() && setShowSearchSuggestions(true)}
                className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-primary rounded-md text-white text-sm font-medium"
              >
                Search
              </button>

              {/* Mobile Search Suggestions */}
              {showSearchSuggestions && searchSuggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
                  <div className="p-2">
                    <p className="text-xs text-gray-500 px-3 py-2 font-medium">Suggestions</p>
                    {searchSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full flex items-center gap-3 px-3 py-3 hover:bg-gray-50 rounded-md transition-colors text-left group"
                      >
                        <span className="text-2xl">{suggestion.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-gray-800 text-sm">{suggestion.title}</h4>
                            {suggestion.isExternal && (
                              <span className="text-xs text-gray-400">↗</span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">{suggestion.description}</p>
                        </div>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar - Brown Background */}
      <div className="w-full bg-tertiary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between h-14">
            <div className="flex items-center gap-8">
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
                {userInfo ? (
                  <div className="flex items-center gap-2 cursor-pointer group">
                    {userInfo.avatar ? (
                      <img
                        src={userInfo.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover border border-gray-300"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        {userInfo.name ? userInfo.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                    )}
                    <span className="font-medium text-gray-700 text-sm group-hover:text-primary">
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
      )}
    </nav>
  );
};

export default Navbar;