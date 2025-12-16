import { useState } from 'react';
import ProductGrid from '../components/product/ProductGrid';
import { 
  Filter, 
  X, 
  ChevronDown, 
  ChevronUp, 
  SlidersHorizontal,
  Grid2X2,
  List,
  Sparkles,
  TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  
  // ИСПРАВЛЕНО: Указан конкретный тип для viewMode
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    size: true,
    materials: true
  });

  const categories = [
    { name: 'All', count: 24 },
    { name: 'Medium', count: 8, icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Oversized', count: 6, icon: <ChevronUp className="w-4 h-4" /> },
    { name: 'Premium', count: 4, icon: <Sparkles className="w-4 h-4" /> },
    { name: 'With pocket', count: 3, icon: '👕' },
    { name: 'Long', count: 3, icon: '⬇️' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Customer Rating' }
  ];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange([20, 80]);
    setSelectedSizes([]);
  };

  const activeFilterCount = [
    selectedCategory !== 'All',
    priceRange[0] > 20 || priceRange[1] < 80,
    selectedSizes.length > 0
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Заголовок страницы */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2">Shop Collection</h1>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link to='/'><span>Home</span></Link>
                <ChevronDown className="w-4 h-4 rotate-270" />
                <span className="font-medium text-black">Shop</span>
              </div>
            </div>
          </div>
          
          {/* Статистика */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-gray-200">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-gray-600">Total Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="text-sm text-gray-600">Collections</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-600">Available Sizes</p>
              </div>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xs hover:border-black transition-colors md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-black text-white text-xs w-5 h-5 rounded-xs flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Боковая панель фильтров */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-32">
              <div className="bg-white border border-gray-200 rounded-xs p-6 space-y-8 shadow-sm">
                {/* Заголовок фильтров */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                  </h2>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Категории */}
                <div className="border-b border-gray-100 pb-6">
                  <button
                    onClick={() => toggleSection('categories')}
                    className="flex items-center justify-between w-full mb-4"
                  >
                    <h3 className="font-semibold">Categories</h3>
                    {expandedSections.categories ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.categories && (
                    <div className="space-y-2">
                      {categories.map(({ name, count, icon }) => (
                        <button
                          key={name}
                          onClick={() => setSelectedCategory(name)}
                          className={`flex items-center justify-between w-full p-2 rounded-xs transition-colors ${
                            selectedCategory === name
                              ? 'bg-black text-white'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {icon && <span>{icon}</span>}
                            <span>{name}</span>
                          </div>
                          <span className="text-sm opacity-70">{count}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Цена */}
                <div className="border-b border-gray-100 pb-6">
                  <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full mb-4"
                  >
                    <h3 className="font-semibold">Price Range</h3>
                    {expandedSections.price ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.price && (
                    <div className="space-y-6">
                      <div className="pt-2">
                        <input
                          type="range"
                          min="20"
                          max="100"
                          step="5"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                          className="w-full h-1.5 bg-gray-300 rounded-xs appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-xs [&::-webkit-slider-thumb]:bg-black"
                        />
                        <input
                          type="range"
                          min="20"
                          max="100"
                          step="5"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                          className="w-full h-1.5 bg-gray-300 rounded-xs appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-xs [&::-webkit-slider-thumb]:bg-black"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">${priceRange[0]}</span>
                          <span className="text-gray-500">to</span>
                          <span className="font-medium">${priceRange[1]}</span>
                        </div>
                        <button className="text-gray-500 hover:text-black">
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Размеры */}
                <div className="border-b border-gray-100 pb-6">
                  <button
                    onClick={() => toggleSection('size')}
                    className="flex items-center justify-between w-full mb-4"
                  >
                    <h3 className="font-semibold">Size</h3>
                    {expandedSections.size ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.size && (
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`w-12 h-12 flex items-center justify-center border rounded-xs transition-all ${
                            selectedSizes.includes(size)
                              ? 'bg-black text-white border-black'
                              : 'border-gray-300 hover:border-black'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Кнопка применения фильтров */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-black text-white py-3 rounded-xs font-medium hover:bg-gray-800 transition-colors"
                >
                  Show Results ({activeFilterCount} filters)
                </button>
              </div>
              
              {/* Баннер */}
              <div className="mt-6 p-6 bg-gradient-to-br from-gray-900 to-black rounded-xs text-white">
                <h3 className="font-bold text-lg mb-2">Limited Time Offer</h3>
                <p className="text-sm text-gray-300 mb-4">Get 15% off on orders over $100</p>
                <button className="w-full bg-white text-black py-2 rounded-xs font-medium hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Основной контент */}
          <div className="lg:w-3/4">
            {/* Панель управления */}
            <div className="bg-white border border-gray-200 rounded-xs p-4 mb-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-gray-600">
                    Showing <span className="font-semibold text-black">24</span> of <span className="font-semibold text-black">24</span> products
                  </p>
                  
                  {activeFilterCount > 0 && (
                    <div className="flex items-center gap-2">
                      {selectedCategory !== 'All' && (
                        <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-xs flex items-center gap-1">
                          {selectedCategory}
                          <button onClick={() => setSelectedCategory('All')}>
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-6">
                  {/* Переключение вида */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                    >
                      <Grid2X2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Сортировка */}
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-sm">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-xs px-4 py-2 text-sm bg-white focus:outline-none focus:border-black min-w-[180px]"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Сетка товаров */}
            {/* ИСПРАВЛЕНО: Теперь viewMode имеет правильный тип */}
            <ProductGrid viewMode={viewMode} />
            
            {/* Пагинация (пример) */}
            <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-gray-200">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xs hover:border-black">
                ←
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-xs">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xs hover:border-black">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xs hover:border-black">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xs hover:border-black">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;