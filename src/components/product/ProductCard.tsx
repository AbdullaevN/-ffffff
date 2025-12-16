// src/components/product/ProductCard.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

interface ProductCardProps {
  product?: {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Защита от undefined
  if (!product) {
    return (
      <div className="group relative animate-pulse">
        <div className="bg-gray-100 rounded-xs overflow-hidden">
          <div className="aspect-square bg-gray-200" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedSize, setSelectedSize] = useState<string>('M');

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: selectedSize
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Кнопка избранного */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 left-3 z-10 p-2 bg-white rounded-full shadow-md 
                   hover:scale-110 transition-transform"
          aria-label={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-4 h-4 ${isFavorite(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>

        {/* Изображение */}
        <div className="aspect-square bg-gray-50 rounded-xs overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/600x600/eee/ccc?text=No+Image';
            }}
          />
        </div>

        {/* Информация */}
        <div>
          <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">${product.price.toFixed(2)}</p>
          
          {/* Выбор размера */}
          <div className="flex gap-1 mt-2">
            {['S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`px-2 py-1 text-xs border rounded ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Кнопка добавления */}
          <button
            onClick={handleAddToCart}
            className="w-full mt-3 flex items-center justify-center gap-2 
                     bg-black text-white py-2 rounded-xs text-sm font-medium 
                     hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;