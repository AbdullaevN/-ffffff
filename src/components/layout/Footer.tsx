import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-auto">
      {/* Основной футер */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Main Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Main menu</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-black transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-and-return" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Refund and Return
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Keep in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Keep in Touch</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Sign up for our newsletter and be the first to know about coupons and special promotions.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-black pr-12"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Got Question? */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Got Question?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email:</p>
                  <a 
                    href="mailto:yarn.international.llc@gmail.com" 
                    className="text-gray-800 hover:text-black transition-colors text-sm block mb-1"
                  >
                    yarn.international.llc@gmail.com
                  </a>
                  <a 
                    href="mailto:email@example.com" 
                    className="text-gray-800 hover:text-black transition-colors text-sm block"
                  >
                    email@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 <span className="font-bold">FFFFFF</span>
            </p>
            
            {/* Соцсети или дополнительные ссылки могут быть здесь */}
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {/* Можно добавить иконки соцсетей если нужно */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;