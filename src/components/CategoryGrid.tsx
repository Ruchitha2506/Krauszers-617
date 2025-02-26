import React from 'react';
import { Category } from '../types';
import { menuItems } from '../data/menuItems';

interface CategoryGridProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

export function CategoryGrid({ categories, onCategoryClick }: CategoryGridProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const categoryItems = menuItems.filter(item => item.category === category.name);
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category)}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-[320px]"
            >
              <div className="relative h-full">
                {/* Image Container */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
                </div>
                
                {/* Text Container */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 bg-opacity-95 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-white/90 line-clamp-2">{category.description}</p>
                  <div className="mt-2 text-xs text-white/80">
                    {categoryItems.length > 0 && (
                      <p>{categoryItems.length} items available</p>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}