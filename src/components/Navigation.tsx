import React, { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { MenuDrawer } from './MenuDrawer';
import { Category } from '../types';

interface NavigationProps {
  cartItemCount: number;
  onMenuClick: () => void;
  onCartClick: () => void;
  categories: Category[];
  onCategorySelect: (category: Category) => void;
}

export function Navigation({ 
  cartItemCount, 
  onCartClick,
  categories,
  onCategorySelect 
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-red-600 px-4 py-3 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white p-2 hover:bg-red-700 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          
          <button
            onClick={onCartClick}
            className="text-white p-2 hover:bg-red-700 rounded-lg transition-colors relative"
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <MenuDrawer 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        categories={categories}
        onCategorySelect={onCategorySelect}
      />
    </>
  );
}