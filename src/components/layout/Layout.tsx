import React, { ReactNode } from 'react';
import Navbar from './Navbar';
 import Footer from './Footer';
import Header from './Header';
import Test from './Test';
import MainBanner from './MainBanner';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
        {/* <Header/> */}
        <Test/>
      <Navbar />

      <main className="flex-grow mt-1">  
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;