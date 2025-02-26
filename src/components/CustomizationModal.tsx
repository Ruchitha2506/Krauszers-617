import React, { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../types';
import { X, Plus, Minus } from 'lucide-react';

interface CustomizationModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (customizations: any) => void;
}

export function CustomizationModal({ item, isOpen, onClose, onAddToCart }: CustomizationModalProps) {
  if (!isOpen) return null;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [selectedBread, setSelectedBread] = useState<string>(
    item.allowedBreads?.[0] || item.customization?.breads[0] || ''
  );
  const [selectedVeggies, setSelectedVeggies] = useState<string[]>(item.includedToppings || []);
  const [selectedDressings, setSelectedDressings] = useState<string[]>([]);
  const [selectedCheese, setSelectedCheese] = useState<string>('');
  const [extraCheeseType, setExtraCheeseType] = useState<string>('');
  const [extraCheeseSlices, setExtraCheeseSlices] = useState<number>(0);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [totalPrice, setTotalPrice] = useState(item.price.regular || 0);

  // Function to show virtual keyboard
  const showVirtualKeyboard = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      // Try to show the virtual keyboard using the Windows-specific API
      try {
        // @ts-ignore - Windows-specific API
        if (window.Windows && window.Windows.UI.ViewManagement.InputPane) {
          // @ts-ignore
          const inputPane = window.Windows.UI.ViewManagement.InputPane.getForCurrentView();
          inputPane.tryShow();
        }
      } catch (e) {
        console.log('Virtual keyboard API not available');
      }
    }
  };

  // Calculate base price based on selected bread
  const getBasePrice = (bread: string) => {
    if (bread === 'Sub') {
      return item.price.sub || item.price.regular || 0;
    } else if (bread === 'Bagel') {
      return item.price.bagel || item.price.regular || 0;
    }
    return item.price.regular || 0;
  };

  useEffect(() => {
    // Start with the base price for the selected bread type
    let price = getBasePrice(selectedBread);

    // Add veggie costs only if not a cold sandwich
    if (item.category !== 'Cold Sandwiches') {
      selectedVeggies.forEach(veggie => {
        if (!item.includedToppings?.includes(veggie)) {
          const veggieItem = item.customization?.veggies.find(v => v.name === veggie);
          if (veggieItem) {
            price += selectedBread === 'Sub' ? veggieItem.price.sub : veggieItem.price.other;
          }
        }
      });
    }

    // Add cheese costs
    const selectedCheeseItem = item.customization?.cheeses.find(c => c.name === selectedCheese);
    if (selectedCheeseItem?.extraCharge && selectedCheeseItem.pricePerSlice) {
      const slicesForBreadType = selectedBread === 'Sub' ? 3 : 1;
      price += selectedCheeseItem.pricePerSlice * slicesForBreadType;
    }

    // Add extra cheese costs
    if (extraCheeseSlices > 0) {
      price += extraCheeseSlices * 0.25; // Each extra cheese slice costs $0.25
    }

    setTotalPrice(price);
  }, [selectedBread, selectedVeggies, selectedCheese, extraCheeseSlices, item.category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddToCart({
      bread: selectedBread,
      veggies: selectedVeggies,
      dressings: selectedDressings,
      cheese: selectedCheese,
      extraCheese: extraCheeseSlices > 0 ? {
        type: extraCheeseType,
        slices: extraCheeseSlices
      } : undefined,
      specialInstructions,
      totalPrice
    });
    onClose();
  };

  const handleIncreaseExtraCheese = () => {
    if (extraCheeseSlices < 5) {
      setExtraCheeseSlices(prev => prev + 1);
    }
  };

  const handleDecreaseExtraCheese = () => {
    if (extraCheeseSlices > 0) {
      setExtraCheeseSlices(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Fixed Header */}
        <div className="flex justify-between items-center p-6 border-b bg-white rounded-t-lg">
          <div>
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <form id="customization-form" onSubmit={handleSubmit}>
            {/* Bread Selection */}
            {(item.allowedBreads || item.customization?.breads) && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Choose your bread</h3>
                <select
                  value={selectedBread}
                  onChange={(e) => setSelectedBread(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select bread</option>
                  {(item.allowedBreads ?? item.customization?.breads ?? []).map((bread) => (
                    <option key={bread} value={bread}>
                      {bread}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Veggies Selection */}
            {item.customization?.veggies && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Veggies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {item.customization.veggies.map((veggie) => {
                    const isIncluded = item.includedToppings?.includes(veggie.name);
                    const isSelected = selectedVeggies.includes(veggie.name);
                    const price = selectedBread === 'Sub' ? veggie.price.sub : veggie.price.other;
                    const isColdSandwich = item.category === 'Cold Sandwiches';
                    
                    return (
                      <button
                        key={veggie.name}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            setSelectedVeggies(selectedVeggies.filter(v => v !== veggie.name));
                          } else {
                            setSelectedVeggies([...selectedVeggies, veggie.name]);
                          }
                        }}
                        className={`p-3 rounded-lg text-left flex justify-between items-center transition-colors ${
                          isSelected ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        <span>{veggie.name}</span>
                        {!isIncluded && !isColdSandwich && (
                          <span className="text-sm">
                            +${price.toFixed(2)}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Cheese Selection */}
            {item.customization?.cheeses && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Choose your cheese</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {item.customization.cheeses.map((cheese) => {
                    const slicesForBreadType = selectedBread === 'Sub' ? 3 : 1;
                    return (
                      <button
                        key={cheese.name}
                        type="button"
                        onClick={() => setSelectedCheese(cheese.name)}
                        className={`p-3 rounded-lg text-left transition-colors ${
                          selectedCheese === cheese.name ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {cheese.name}
                        {cheese.extraCharge && (
                          <span className="text-sm block mt-1">
                            +${(cheese.pricePerSlice! * slicesForBreadType).toFixed(2)} for {slicesForBreadType} slice{slicesForBreadType > 1 ? 's' : ''}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Extra Cheese Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Extra Cheese (+$0.25 per slice)</h3>
              <div className="flex items-center space-x-4">
                <select
                  value={extraCheeseType}
                  onChange={(e) => {
                    setExtraCheeseType(e.target.value);
                    if (!extraCheeseSlices && e.target.value) {
                      setExtraCheeseSlices(1);
                    }
                  }}
                  className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select cheese type</option>
                  {item.customization?.cheeses.map((cheese) => (
                    <option key={cheese.name} value={cheese.name}>
                      {cheese.name}
                    </option>
                  ))}
                </select>
                
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handleDecreaseExtraCheese}
                    disabled={!extraCheeseType || extraCheeseSlices === 0}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-8 text-center font-medium">{extraCheeseSlices}</span>
                  <button
                    type="button"
                    onClick={handleIncreaseExtraCheese}
                    disabled={!extraCheeseType || extraCheeseSlices === 5}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                
                {extraCheeseSlices > 0 && (
                  <span className="text-sm text-gray-600">
                    +${(extraCheeseSlices * 0.25).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Dressings Selection */}
            {item.customization?.dressings && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Dressings</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {item.customization.dressings.map((dressing) => (
                    <button
                      key={dressing}
                      type="button"
                      onClick={() => {
                        if (selectedDressings.includes(dressing)) {
                          setSelectedDressings(selectedDressings.filter(d => d !== dressing));
                        } else {
                          setSelectedDressings([...selectedDressings, dressing]);
                        }
                      }}
                      className={`p-3 rounded-lg text-left transition-colors ${
                        selectedDressings.includes(dressing) ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {dressing}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div className="mb-8">
              <h3 
                className="text-lg font-semibold mb-3"
                onClick={showVirtualKeyboard}
              >
                Special Instructions
              </h3>
              <textarea
                ref={textareaRef}
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                rows={3}
                placeholder="Any special requests?"
                autoFocus
                onFocus={showVirtualKeyboard}
                inputMode="text"
              />
            </div>
          </form>
        </div>

        {/* Fixed Footer */}
        <div className="border-t bg-white p-6 rounded-b-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <button
            type="submit"
            form="customization-form"
            className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}