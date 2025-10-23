import React from 'react';
import logo from '../../assets/shreeannaabhiyan.png';

const Footer = () => {
  const myAccountLinks = [
    { name: 'My Account', href: '#' },
    { name: 'Order History', href: '#' },
    { name: 'Shopping Cart', href: '#' },
    { name: 'Wishlist', href: '#' }
  ];

  const helpsLinks = [
    { name: 'Contact', href: '#' },
    { name: 'Faqs', href: '#' },
    { name: 'Terms & Condition', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const proxyLinks = [
    { name: 'About', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Track Order', href: '#' }
  ];

  const categoriesLinks = [
    { name: 'Fruit & Vegetables', href: '#' },
    { name: 'Meat & Fish', href: '#' },
    { name: 'Bread & Bakery', href: '#' },
    { name: 'Beauty & Health', href: '#' }
  ];

  return (
    <footer className="bg-tertiary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-28 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-16 flex items-center justify-center">
              <img src={logo} alt="Shree Anna Yojana" className=" object-center"/>
              </div>
              <h3 className="text-2xl font-bold">Shakti Saathi</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-semibold">(219) 555-0114</span>
                <span className="text-gray-400 mx-2">or</span>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Proxy@gmail.com</span>
              </p>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-lg font-semibold mb-4">My Account</h4>
            <ul className="space-y-2">
              {myAccountLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helps */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Helps</h4>
            <ul className="space-y-2">
              {helpsLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Proxy */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Proxy</h4>
            <ul className="space-y-2">
              {proxyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categoriesLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-28 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              Shakti-Saathi © 2024. All Rights Reserved
            </p>

            {/* Payment Methods */}
            {/* <div className="flex items-center gap-2">
              <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-800">Apple Pay</span>
              </div>
              <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center">
                <span className="text-xs font-semibold text-blue-600">VISA</span>
              </div>
              <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center">
                <span className="text-xs font-semibold text-orange-600">Discover</span>
              </div>
              <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center">
                <span className="text-xs font-semibold text-red-600">Mastercard</span>
              </div>
              <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-800">Secure Payment</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;