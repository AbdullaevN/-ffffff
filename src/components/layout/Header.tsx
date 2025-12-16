import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, LogIn, CircleUserRound } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="   w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
 


           <Link to="/" className="text-2xl font-light tracking-tight ">
            Q Ale a4
           </Link>
          
            <LogIn strokeWidth={3} />
          <CircleUserRound className="w-6 h-6 " strokeWidth={1.5} />
          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-6">
            {/* <Link to="/lf" className=" text-sm uppercase hover:opacity-70">
              Lf ffffff
            </Link>
            <span className="">|</span>
            <Link to="/store" className=" text-sm uppercase hover:opacity-70">
              Store
            </Link>
            <span className="">|</span>
            <Link to="/" className=" text-sm uppercase hover:opacity-70">
              Home
            </Link>
            <span className="">|</span>
            <Link to="/ae0" className=" text-sm uppercase hover:opacity-70">
              AE0
            </Link> */}
            

           <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <ShoppingBag className="w-6 h-6 " />
              <span className="absolute -top-2 -right-2 bg-white text-black 
                             text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
              
            </Link>
                <Link to='/login' className='relative'>
                <CircleUserRound className='w-6 h-6'/>
                </Link>


            
             <button 
              className="md:hidden text-white absolute"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </div>
          
        
        </div>
        
        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black pb-4 " >
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/lf" 
                className="text-white text-sm uppercase py-2 px-4 hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lf ffffff
              </Link>
              <Link 
                to="/store" 
                className="text-white text-sm uppercase py-2 px-4 hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Store
              </Link>
              <Link 
                to="/" 
                className="text-white text-sm uppercase py-2 px-4 hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/ae0" 
                className="text-white text-sm uppercase py-2 px-4 hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AE0
              </Link>
              {/* <button className="border border-white text-white px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition-colors mx-4 mt-2">
                More
              </button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;