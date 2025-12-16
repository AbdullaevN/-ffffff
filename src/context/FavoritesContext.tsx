// src/context/FavoritesContext.tsx
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (product: FavoriteItem) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (product: FavoriteItem) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (product: FavoriteItem) => {
    setFavorites(prev => {
      if (!prev.find(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some(item => item.id === id);
  };

  const toggleFavorite = (product: FavoriteItem) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};