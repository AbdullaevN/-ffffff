import ProductCard from './ProductCard';
import { products } from '../../data/products';

// Интерфейс уже правильный
interface ProductGridProps {
  viewMode?: 'grid' | 'list';
  limit?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ viewMode = 'grid', limit }) => {
  if (!products || !Array.isArray(products)) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products available</p>
      </div>
    );
  }

  const displayProducts = limit ? products.slice(0, limit) : products;

  if (displayProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-6">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    );
  }

  // Для режима сетки
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;