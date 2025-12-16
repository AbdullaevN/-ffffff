import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Truck, Shield, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import ProductGrid from '../components/product/ProductGrid';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  // Моковые данные товара (замените на реальный запрос к API)
  const product = {
    id: 1,
    name: "Classic White Tee",
    description: "Базовая белая футболка из 100% хлопка. Идеальная основа любого гардероба.",
    price: 29.99,
    image: "/images/classic.png",
    category: "basic",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["100% хлопок", "220 г/м²"],
    colors: ["White", "Black", "Gray", "Navy"],
    rating: 4.8,
    reviews: 124
  };

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('White');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Хлебные крошки */}
        <div className="mb-8 text-sm text-gray-500">
          Home / Shop / {product.category} / {product.name}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка - изображения */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[600px] object-contain"
              />
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`min-w-[80px] h-20 rounded-lg border-2 ${
                    selectedColor === color
                      ? 'border-black'
                      : 'border-gray-300'
                  }`}
                  style={{
                    backgroundColor: color === 'White' ? '#ffffff' : 
                                    color === 'Black' ? '#000000' :
                                    color === 'Gray' ? '#6b7280' :
                                    color === 'Navy' ? '#1e3a8a' : '#ffffff'
                  }}
                >
                  <span className="sr-only">{color}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Правая колонка - информация */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-light mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <button
                  onClick={() => toggleFavorite(product)}
                  className="flex items-center gap-2 text-gray-500 hover:text-red-500"
                >
                  <Heart
                    className={`w-5 h-5 ${isFavorite(product.id) ? 'fill-red-500 text-red-500' : ''}`}
                  />
                  {isFavorite(product.id) ? 'Saved' : 'Save'}
                </button>
                
                <button className="flex items-center gap-2 text-gray-500 hover:text-black">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
              
              <p className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>
            </div>

            {/* Выбор размера */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border rounded-lg ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Выбор количества */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Quantity</h3>
              <div className="flex items-center border rounded-lg w-32">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-4 py-3 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="flex-1 text-center py-3">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-4 py-3 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
              
              <button className="flex-1 bg-white text-black py-4 rounded-lg font-semibold border-2 border-black hover:bg-gray-50 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-gray-500">On orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium">1-Year Warranty</p>
                  <p className="text-sm text-gray-500">Quality guarantee</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center text-gray-600">↻</div>
                <div>
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-sm text-gray-500">30-day return policy</p>
                </div>
              </div>
            </div>

            {/* Детали */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Materials</h3>
                <p className="text-gray-600">{product.materials.join(', ')}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Care Instructions</h3>
                <p className="text-gray-600">Machine wash cold. Tumble dry low. Do not bleach.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Похожие товары */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold mb-8">You May Also Like</h2>
          <ProductGrid limit={4} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;