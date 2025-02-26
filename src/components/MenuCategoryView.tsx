import React, { useState } from 'react';
import { Category, MenuItem, CartItem } from '../types';
import { menuItems } from '../data/menuItems';
import { ChevronLeft } from 'lucide-react';
import { CustomizationModal } from './CustomizationModal';

interface MenuCategoryViewProps {
  category: Category;
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
}

export function MenuCategoryView({ category, onBack, onAddToCart }: MenuCategoryViewProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedTemperature, setSelectedTemperature] = useState<'hot' | 'cold' | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<'pound' | 'halfPound' | null>(null);
  
  const categoryItems = menuItems.filter(item => item.category === category.name);

  const handleAddToCart = (customizations: any = {}) => {
    if (selectedItem) {
      onAddToCart({
        ...selectedItem,
        quantity: 1,
        customizations: {
          ...customizations,
          temperature: selectedTemperature,
          weight: selectedWeight
        }
      });
      setSelectedItem(null);
      setSelectedTemperature(null);
      setSelectedWeight(null);
    }
  };

  const handleSimpleItemAddToCart = (item: MenuItem) => {
    const customizations: any = {};
    
    if (item.temperature === 'both') {
      if (!selectedTemperature) return;
      customizations.temperature = selectedTemperature;
    }
    
    if (item.price.byWeight) {
      if (!selectedWeight) return;
      customizations.weight = selectedWeight;
    }
    
    onAddToCart({
      ...item,
      quantity: 1,
      customizations
    });
    
    setSelectedTemperature(null);
    setSelectedWeight(null);
  };

  const renderSimpleItem = (item: MenuItem) => (
    <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-2">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <span className="font-medium">{item.name}</span>
          {item.temperature === 'both' && (
            <div className="mt-1 space-x-2">
              <button
                onClick={() => setSelectedTemperature('hot')}
                className={`px-2 py-1 text-sm rounded ${
                  selectedTemperature === 'hot'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Hot
              </button>
              <button
                onClick={() => setSelectedTemperature('cold')}
                className={`px-2 py-1 text-sm rounded ${
                  selectedTemperature === 'cold'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cold
              </button>
            </div>
          )}
          {item.price.byWeight && (
            <div className="mt-1 space-x-2">
              <button
                onClick={() => setSelectedWeight('pound')}
                className={`px-2 py-1 text-sm rounded ${
                  selectedWeight === 'pound'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                1 lb - ${item.price.pound?.toFixed(2)}
              </button>
              <button
                onClick={() => setSelectedWeight('halfPound')}
                className={`px-2 py-1 text-sm rounded ${
                  selectedWeight === 'halfPound'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                1/2 lb - ${item.price.halfPound?.toFixed(2)}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {!item.price.byWeight && (
          <span className="font-semibold">${item.price.regular?.toFixed(2)}</span>
        )}
        <button
          onClick={() => handleSimpleItemAddToCart(item)}
          className={`bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors ${
            (item.temperature === 'both' && !selectedTemperature) ||
            (item.price.byWeight && !selectedWeight)
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          disabled={
            (item.temperature === 'both' && !selectedTemperature) ||
            (item.price.byWeight && !selectedWeight)
          }
        >
          Add to Order
        </button>
      </div>
    </div>
  );

  const renderSandwichItem = (item: MenuItem) => (
    <div
      key={item.id}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => setSelectedItem(item)}
    >
      <div className="flex flex-col md:flex-row">
        {item.image && (
          <div className="md:w-1/4 h-48 md:h-auto">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
            <div className="text-right">
              <div className="font-semibold">${item.price.regular?.toFixed(2)}</div>
            </div>
          </div>
          
          {item.includedToppings && (
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Includes: {item.includedToppings.join(', ')}
              </p>
            </div>
          )}
          
          <div className="mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(item);
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Customize and Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-red-600 hover:text-red-700 transition-colors text-lg md:text-xl font-medium"
        >
          <ChevronLeft className="w-7 h-7 mr-1" />
          Back to Categories
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
      
      <div className="grid gap-6">
        {categoryItems.map((item) => (
          category.name === 'Bagels and More' || category.name === 'Salads and Beef Patties'
            ? renderSimpleItem(item)
            : renderSandwichItem(item)
        ))}
      </div>

      {selectedItem && (
        <CustomizationModal
          item={selectedItem}
          isOpen={true}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}