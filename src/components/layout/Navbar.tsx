import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/shop' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <nav className="bg-white  border-black   w-full z-50 flex border-t-1 mt-6  ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            WHITE.T
          </Link>
          
          {/* Десктопное меню */}
          {/* <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm uppercase hover:opacity-70"
                 
              >
                {item.name}
              </Link>
            ))}
          </div> */}
          
           <div className="flex items-center space-x-6">
           <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm uppercase hover:opacity-70"
                 
              >
                {item.name}
              </Link>
            ))}
           </div>
            {/* <Link to="/cart" className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-black text-white 
                             text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link> */}
            
            {/* <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button> */}
          </div>
        </div>
        
        {/* Мобильное меню */}
        {/* {isOpen && (
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
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
