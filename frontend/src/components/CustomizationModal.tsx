import React, { useState, useEffect } from 'react';
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

// Filter available bread options
// Define available breads based on the item
const availableBreads = item.name === "Grilled Cheese Sandwich"
  ? (item.customization?.breads || []).filter(bread => !["Hard roll", "Sub"].includes(bread))
  : item.customization?.breads || [];


  const [selectedBread, setSelectedBread] = useState<string>(
    availableBreads[0] || ''
  );
  const [selectedVeggies, setSelectedVeggies] = useState<string[]>(item.includedToppings || []);
  const [selectedDressings, setSelectedDressings] = useState<string[]>([]);
  const [selectedCheese, setSelectedCheese] = useState<string>('');
  const [extraEggs, setExtraEggs] = useState<number>(0);
  const [baconType, setBaconType] = useState<string>(
    item.category === "Breakfast Sandwiches" ? "Soft" : "No Bacon"
  );
  
  const [extraBacon, setExtraBacon] = useState<number>(0); // Extra Bacon Counter
  const [extraCheeseType, setExtraCheeseType] = useState<string>('');
  const [extraCheeseSlices, setExtraCheeseSlices] = useState(0);
  const [extraMeatType, setExtraMeatType] = useState<string>(''); // No default selection
  const [extraMeatSlices, setExtraMeatSlices] = useState<number>(0); // Default 0 slices
  const extraMeatPricePerSlice = 1.00; // Each extra meat slice costs $1.00
  const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [totalPrice, setTotalPrice] = useState(item.price.regular || 0);

  // Calculate base price based on selected bread
  const getBasePrice = (bread: string) => {
    if (item.name === "Grilled Cheese Sandwich") {
      return item.price.regular || 0;  // ✅ Always use regular price
    }
    if (bread === "Sub") {
      return item.price.sub || item.price.regular || 0;
    } else if (bread === "Bagel") {
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
    if (extraEggs > 0) {
      price += extraEggs * 1.00; // Each extra egg costs $1.00
    }
      // ✅ Extra Bacon Cost
  if (extraBacon > 0) {
    price += extraBacon * 0.75;
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
      // Extra Meat Cost
  if (extraMeatSlices > 0) {
    price += extraMeatSlices * extraMeatPricePerSlice;
  }

    setTotalPrice(price);
  }, [selectedBread, extraEggs,  extraBacon, selectedVeggies, selectedCheese, extraCheeseSlices,extraMeatSlices, item.category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    onAddToCart({
      id: item.id,              // ✅ required
      name: item.name,          // ✅ name for display
      price: totalPrice,        // ✅ number to calculate/display
      quantity: 1,              // ✅ fixed or dynamic quantity
      customizations: {         // ✅ details about the selection
        bread: selectedBread,
        extraEggs: extraEggs > 0 ? extraEggs : 0,
        baconType: baconType !== "No Bacon" ? baconType : undefined,
        extraBacon: extraBacon > 0 ? extraBacon : 0,
        veggies: selectedVeggies,
        dressings: selectedDressings,
        cheese: selectedCheese !== "No Cheese" ? selectedCheese : undefined,
        extraCheese: extraCheeseSlices > 0 ? {
          type: extraCheeseType,
          slices: extraCheeseSlices
        } : undefined,
        extraMeat: extraMeatSlices > 0 ? {
          type: extraMeatType,
          quantity: extraMeatSlices
        } : undefined,
        selectedMeats: item.customization?.meatSelectionOptions ? selectedMeats : undefined,
        specialInstructions
      }
    });
  
    onClose();
  };
  

  const handleIncreaseExtraCheese = () => {
    if (extraCheeseSlices < 10) {
      setExtraCheeseSlices(prev => prev + 1);
    }
  };

  const handleDecreaseExtraCheese = () => {
    if (extraCheeseSlices > 0) {
      setExtraCheeseSlices(prev => prev - 1);
    }
  };

  // Define main bread buttons and dropdown options
const mainBreads = ["Hard roll", "Sub"];
const otherBreads = availableBreads.filter((bread) => !mainBreads.includes(bread));

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
          {availableBreads.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Choose your bread</h3>

              {/* Display Main Bread Buttons (if applicable) */}
              {mainBreads.some((bread) => availableBreads.includes(bread)) && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  {mainBreads
                    .filter((bread) => availableBreads.includes(bread))
                    .map((bread) => (
                      <button
                        key={bread}
                        type="button"
                        onClick={() => setSelectedBread(bread)}
                        className={`py-2 px-3 rounded-lg text-center transition-colors ${
                          selectedBread === bread
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        <span className="text-sm font-medium">{bread}</span>
                        {bread === "Sub" && item.price.sub && (
                          <span className="block text-xs mt-0.5">
                            ${item.price.sub.toFixed(2)}
                          </span>
                        )}
                      </button>
                    ))}
                </div>
              )}

              {/* Display Other Bread Options as Dropdown */}
              {otherBreads.length > 0 && (
                <div className="mb-3">
                  <select
                    value={selectedBread}
                    onChange={(e) => setSelectedBread(e.target.value)}
                    className={`w-full py-2 px-3 border rounded-lg transition-colors text-sm ${
                      selectedBread && !mainBreads.includes(selectedBread)
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <option value="">Other bread options...</option>
                    {otherBreads.map((bread) => (
                      <option key={bread} value={bread}>
                        {bread}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}

{/* Extra Eggs Selection */}
{item.customization?.extraEggs && (
  <div className="mb-8">
    <h3 className="text-lg font-bold mb-2">🥚 Extra Eggs ($1.00 each)</h3>
    
    <div className="flex items-center space-x-4">
      {/* Minus Button */}
      <button
        type="button"
        onClick={() => setExtraEggs(prev => Math.max(0, prev - 1))}
        disabled={extraEggs === 0}
        className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ➖
      </button>

      {/* Display Selected Extra Eggs */}
      <span className="text-xl font-semibold">{extraEggs}</span>

      {/* Plus Button */}
      <button
        type="button"
        onClick={() => setExtraEggs(prev => Math.min(10, prev + 1))}
        disabled={extraEggs === 10} // Max limit is now 10 eggs
        className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ➕
      </button>
    </div>
  </div>
)}

{/* Bacon Selection (Now for Hot & Breakfast Sandwiches) */}
{(item?.category === "Breakfast Sandwiches" || item?.category === "Hot Sandwiches") && 
 item.customization?.baconOptions && Array.isArray(item.customization.baconOptions) && (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-3">Bacon Type</h3>
    <div className="grid grid-cols-3 gap-3">
      {item.customization.baconOptions.map((bacon) => (
        <button
          key={bacon}
          type="button"
          onClick={() => setBaconType(bacon)}
          className={`p-3 rounded-lg text-center transition-colors ${
            baconType === bacon ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {bacon}
        </button>
      ))}
    </div>
  </div>
)}


{/* Extra Bacon Selection */}
{(item.category === "Breakfast Sandwiches" || item.category === "Hot Sandwiches") &&
 item.customization?.extraBacon && (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-3">Extra Bacon ($0.75 each)</h3>
    
    <div className="flex items-center space-x-4">
      {/* Minus Button */}
      <button
        type="button"
        onClick={() => setExtraBacon(prev => Math.max(0, prev - 1))}
        disabled={extraBacon === 0}
        className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ➖
      </button>

      {/* Display Selected Extra Bacon */}
      <span className="text-xl font-semibold">{extraBacon}</span>

      {/* Plus Button */}
      <button
        type="button"
        onClick={() => setExtraBacon(prev => Math.min(10, prev + 1))}
        disabled={extraBacon === 10} // Max limit is 10 slices
        className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ➕
      </button>
    </div>
  </div>
)}

{item.customization?.meatSelectionOptions && (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-2">Select Your Meats</h3>
    <p className="text-sm text-gray-500 mb-2">
      {selectedBread === 'Sub' ? 'Choose up to 3 meats' : 'Choose up to 2 meats'}
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {item.customization.meatSelectionOptions.map(meat => {
        const isSelected = selectedMeats.includes(meat);
        const limit = selectedBread === 'Sub' ? 3 : 2;

        return (
          <button
            key={meat}
            type="button"
            onClick={() => {
              if (isSelected) {
                setSelectedMeats(selectedMeats.filter(m => m !== meat));
              } else if (selectedMeats.length < limit) {
                setSelectedMeats([...selectedMeats, meat]);
              }
            }}
            className={`p-3 rounded-lg transition-colors ${
              isSelected ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {meat}
          </button>
        );
      })}
    </div>
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
      {item.customization.cheeses.map((cheese) => (
        <button
          key={cheese.name}
          type="button"
          onClick={() => setSelectedCheese(prev => prev === cheese.name ? "No Cheese" : cheese.name)}
          className={`p-3 rounded-lg text-left transition-colors ${
            selectedCheese === cheese.name ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {cheese.name}
        </button>
      ))}
    </div>
  </div>
)}

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

{/* Extra Cheese + Extra Meat side-by-side */}
<div className="flex flex-col md:flex-row gap-8 mb-8">

  {/* Extra Cheese Section */}
  <div className="flex-1">
    <h3 className="text-lg font-semibold mb-3">Extra Cheese (+$0.25 per slice)</h3>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setExtraCheeseSlices((prev) => Math.max(0, prev - 1))}
          disabled={extraCheeseSlices === 0}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ➖
        </button>
        <span className="w-8 text-center font-medium">{extraCheeseSlices}</span>
        <button
          type="button"
          onClick={() => setExtraCheeseSlices((prev) => Math.min(10, prev + 1))}
          disabled={extraCheeseSlices === 10}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ➕
        </button>
      </div>

      {/* Show total extra cheese cost */}
      {extraCheeseSlices > 0 && (
        <span className="text-sm text-gray-600">
          +${(extraCheeseSlices * 0.25).toFixed(2)}
        </span>
      )}
    </div>
  </div>

  {/* Extra Meat Section */}
  {(item.category === "Cold Sandwiches" || item.category === "Hot Sandwiches" || item.category === "House Specials") &&
    Array.isArray(item.customization?.extraMeatOptions) && (
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-3">Extra Meat (+$1 per slice)</h3>
        
        <div className="flex flex-wrap items-center gap-4">
          {/* Dropdown if available */}
          {item.customization.extraMeatOptions.length > 0 && (
            <select
              value={extraMeatType}
              onChange={(e) => setExtraMeatType(e.target.value)}
              className="py-2 px-3 border rounded-lg text-sm"
            >
              <option value="">Select meat type</option>
              {item.customization.extraMeatOptions.map((meat) => (
                <option key={meat} value={meat}>
                  {meat}
                </option>
              ))}
            </select>
          )}

          {/* Plus and minus buttons */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setExtraMeatSlices((prev) => Math.max(0, prev - 1))}
              disabled={extraMeatSlices === 0}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ➖
            </button>
            <span className="w-8 text-center font-medium">{extraMeatSlices}</span>
            <button
              type="button"
              onClick={() => setExtraMeatSlices((prev) => Math.min(10, prev + 1))}
              disabled={extraMeatSlices === 10}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ➕
            </button>
          </div>
        </div>

        {/* Show total extra meat cost */}
        {extraMeatSlices > 0 && (
          <div className="text-sm text-gray-600 mt-2">
            +${(extraMeatSlices * extraMeatPricePerSlice).toFixed(2)}
          </div>
        )}
      </div>
  )}
</div>


            {/* Special Instructions */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Special Instructions</h3>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                rows={3}
                placeholder="Any special requests?"
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