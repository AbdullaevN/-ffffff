import React from 'react';
import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';    
import MainBanner from '../components/layout/MainBanner';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-5">
        <div className='h-auto relative'>
      <MainBanner/>

</div>
       <section className="py-5">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Популярные модели</h2>
            <Link to="/shop" className="text-black hover:underline">
              Все товары →55
            </Link>
          </div>
           
          <ProductGrid limit={4} /> 
        </div>
      </section>
      
     </div>
  );
};

export default Home; 