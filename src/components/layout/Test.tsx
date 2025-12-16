import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, CircleUserRound, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
    const { itemCount } = useCart();

  
  const navItems = [
    { name: 'HOME', path: '/' },
    // { name: 'ABOUT US', path: '/about' },
    // { name: 'SHOP ~', path: '/shop' },
    // { name: 'CONTACT', path: '/contact' },
    // { name: 'FAQ', path: '/faq' },
  ];

  const CartIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1" 
      width="24" 
      height="24" 
      viewBox="0 0 197.7 166" 
      preserveAspectRatio="xMinYMax meet"
      className="text-gray-700 hover:text-black transition-colors"
    >
      <path 
        d="M197.9 55.9L169.9 127.4 64.5 127.4 27.6 29.8 0 29.8 0.2 16.7 36.5 16.7 73.4 114.3 160.9 114.3 183 55.9" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="12"
      />
      <circle 
        cx="143.8" 
        cy="153" 
        r="13" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="12"
      />
      <circle 
        cx="90.8" 
        cy="153" 
        r="13" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="12"
      />
      <text 
        textAnchor="middle" 
        x="116" 
        y="35" 
        dy=".48em"
        fontSize="60"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="currentColor"
      >
        0
      </text>
    </svg>
  );

  return (
    <nav className="bg-white border-t border-gray-200 w-full z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          
          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 hover:text-black transition-colors text-sm font-medium tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Правый блок с иконками, поиском и корзиной */}
          <div className="flex items-center space-x-6 ml-auto align-baseline">
            
            
            {/* Поиск */}
            <div className="hidden md:flex items-center border-b border-gray-300 pb-1">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search"
                className="outline-none text-sm w-32 bg-transparent placeholder-gray-500"
              />
            </div>
            
            {/* Корзина с SVG иконкой */}
            <Link to="/cart" className="relative">
              <div className="w-6 h-6 flex items-center justify-center">
                <CartIcon />
              </div>
            </Link>

               <Link to="/cart" className="relative">
      <ShoppingBag className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
                <Link to='/login' className='relative'>
                <CircleUserRound className='w-6 h-6'/>
                </Link>
            
            {/* Бургер меню для мобильных */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Мобильное меню */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-gray-600 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Мобильные иконки, поиск и корзина */}
            <div className="mt-4 pt-4 border-t">
             
              
              <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search"
                  className="outline-none text-sm w-full bg-transparent placeholder-gray-500"
                />
              </div>
              
              <Link 
                to="/cart" 
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <CartIcon />
                </div>
                <span className="text-sm">Корзина</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Test;