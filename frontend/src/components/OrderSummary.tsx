import { useEffect, useState } from 'react';
import { CartItem } from '../types';
import { printOrder } from '../services/printService';
import { X } from 'lucide-react';

interface OrderSummaryProps {
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onSubmitOrder: () => void;
}

let currentOrderNumber = 1;

export function OrderSummary({ items, onRemoveItem, onSubmitOrder }: OrderSummaryProps) {
  const [shouldPrint, setShouldPrint] = useState(false);

  const calculateTotal = () => {
    return items.reduce((total: number, item: CartItem) => {
      const quantity = item.quantity || 1;
      const price = typeof item.price === 'number'
        ? item.price
        : item.price?.regular ?? 0;
      return total + price * quantity;
    }, 0);
  };

  const handleSubmitOrder = () => {
    const orderNumber = String(currentOrderNumber).padStart(3, '0');
    const total = calculateTotal();

    const printableItems = items.map(item => {
      const customizationDetails: string[] = [];
      const { customizations } = item;

      if (customizations?.bread) customizationDetails.push(`Bread: ${customizations.bread}`);
      if (typeof customizations?.extraEggs === 'number' && customizations.extraEggs > 0)
        customizationDetails.push(`Extra Eggs: ${customizations.extraEggs}`);
      if (customizations?.baconType && customizations.baconType !== "No Bacon")
        customizationDetails.push(`Bacon Type: ${customizations.baconType}`);
      if (typeof customizations?.extraBacon === 'number' && customizations.extraBacon > 0)
        customizationDetails.push(`Extra Bacon: ${customizations.extraBacon}`);
      if (customizations?.extraMeat && customizations.extraMeat.quantity > 0)
        customizationDetails.push(`Extra Meat: ${customizations.extraMeat.type} ($${customizations.extraMeat.quantity}.00)`);
      if (Array.isArray(customizations?.veggies) && customizations.veggies.length > 0)
        customizationDetails.push(`Veggies: ${customizations.veggies.join(', ')}`);
      if (customizations?.cheese && customizations.cheese !== "No Cheese")
        customizationDetails.push(`Cheese: ${customizations.cheese}`);
      if (customizations?.extraCheese?.type)
        customizationDetails.push(`Extra Cheese: ${customizations.extraCheese.type} (${customizations.extraCheese.slices ?? 0} slices)`);
      if (Array.isArray(customizations?.dressings) && customizations.dressings.length > 0)
        customizationDetails.push(`Dressings: ${customizations.dressings.join(', ')}`);
      if (customizations?.temperature)
        customizationDetails.push(`Temperature: ${customizations.temperature}`);
      if (customizations?.weight)
        customizationDetails.push(`Weight: ${customizations.weight === 'pound' ? '1 lb' : '1/2 lb'}`);
      if (customizations?.specialInstructions)
        customizationDetails.push(`Instructions: ${customizations.specialInstructions}`);

      return {
        id: item.id,
        name: item.name,
        quantity: item.quantity || 1,
        price: typeof item.price === 'number' ? item.price : item.price?.regular ?? 0,
        details: customizationDetails.join(' | ')
      };
    });

    try {
      printOrder(orderNumber, printableItems, total);
      setShouldPrint(true);
    } catch (error: any) {
      console.error('🔥 Error during printing:', error);
    } finally {
      currentOrderNumber++;
      onSubmitOrder();
    }
  };

  useEffect(() => {
    if (shouldPrint) {
      setTimeout(() => {
        window.print();
        setShouldPrint(false);
      }, 100);
    }
  }, [shouldPrint]);

  if (items.length === 0) return null;

  const orderNumber = String(currentOrderNumber).padStart(3, '0');

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 h-[calc(100vh-4rem)] flex flex-col">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <div className="text-lg font-semibold text-red-600">
          Order #{orderNumber}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {items.map((item: CartItem, index: number) => (
          <div key={`${item.id}-${index}`} className="mb-4 border-b pb-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <div className="mt-2 space-y-1">
                  {item.customizations?.bread && (
                    <p><span className="font-semibold">Bread:</span> {item.customizations.bread}</p>
                  )}
                  {typeof item.customizations?.extraEggs === "number" && item.customizations.extraEggs > 0 && (
                    <p><span className="font-semibold">Extra Eggs:</span> {item.customizations.extraEggs}</p>
                  )}
                  {item.customizations?.baconType && item.customizations.baconType !== "No Bacon" && (
                    <p><span className="font-semibold">Bacon Type:</span> {item.customizations.baconType}</p>
                  )}
                  {typeof item.customizations?.extraBacon === "number" && item.customizations.extraBacon > 0 && (
                    <p><span className="font-semibold">Extra Bacon:</span> {item.customizations.extraBacon}</p>
                  )}
                  {item.customizations?.extraMeat && item.customizations.extraMeat.quantity > 0 && (
                    <p>
                      <span className="font-semibold">Extra Meat:</span> {item.customizations.extraMeat.type} (${item.customizations.extraMeat.quantity}.00)
                    </p>
                  )}
                  {Array.isArray(item.customizations?.veggies) && item.customizations.veggies.length > 0 && (
                    <p><span className="font-semibold">Veggies:</span> {item.customizations.veggies.join(', ')}</p>
                  )}
                  {item.customizations?.cheese && item.customizations.cheese !== "No Cheese" && (
                    <p><span className="font-semibold">Cheese:</span> {item.customizations.cheese}</p>
                  )}
                  {item.customizations?.extraCheese?.type && (
                    <p>
                      <span className="font-semibold">Extra Cheese:</span> {item.customizations.extraCheese.type} ({item.customizations.extraCheese.slices ?? 0} {item.customizations.extraCheese.slices === 1 ? 'slice' : 'slices'})
                    </p>
                  )}
                  {Array.isArray(item.customizations?.dressings) && item.customizations.dressings.length > 0 && (
                    <p><span className="font-semibold">Dressings:</span> {item.customizations.dressings.join(', ')}</p>
                  )}
                  {item.customizations?.temperature && (
                    <p><span className="font-semibold">Temperature:</span> {item.customizations.temperature}</p>
                  )}
                  {item.customizations?.weight && (
                    <p><span className="font-semibold">Weight:</span> {item.customizations.weight === 'pound' ? '1 lb' : '1/2 lb'}</p>
                  )}
                  {item.customizations?.specialInstructions && (
                    <p className="italic mt-2">{item.customizations.specialInstructions}</p>
                  )}
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="font-semibold">
                  $
                  {(
                    (typeof item.price === 'number'
                      ? item.price
                      : item.price?.regular ?? 0) * (item.quantity || 1)
                  ).toFixed(2)}
                </span>
                <button
                  onClick={() => onRemoveItem(index)}
                  className="text-gray-400 hover:text-red-600"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-lg">${calculateTotal().toFixed(2)}</span>
        </div>
        <button
          onClick={handleSubmitOrder}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Submit Order
        </button>
      </div>
    </div>
  );
}
