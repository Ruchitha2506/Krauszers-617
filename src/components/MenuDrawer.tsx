import React from 'react';
import { X } from 'lucide-react';
import { Category } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  onCategorySelect: (category: Category) => void;
}

export function MenuDrawer({ isOpen, onClose, categories, onCategorySelect }: MenuDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-red-600">Menu Categories</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategorySelect(category);
                  onClose();
                }}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors group"
              >
                <span className="text-gray-700 group-hover:text-red-600 font-medium">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}