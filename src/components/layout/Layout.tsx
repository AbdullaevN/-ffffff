import { type ReactNode } from 'react'; // Измените эту строку
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow mt-16">  
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;