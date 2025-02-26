
import { CartItem } from '../types';
import { X } from 'lucide-react';
import { printOrder } from '../services/printService';

interface OrderSummaryProps {
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onSubmitOrder: () => void;
}

// Keep track of order numbers between renders
let currentOrderNumber = 1;

export function OrderSummary({ items, onRemoveItem, onSubmitOrder }: OrderSummaryProps) {
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      let itemPrice = item.customizations?.totalPrice || 
        (item.price.byWeight
          ? item.customizations?.weight === 'pound'
            ? item.price.pound || 0
            : item.price.halfPound || 0
          : item.price.regular || 0);

      return total + itemPrice;
    }, 0);
  };

  const handleSubmitOrder = () => {
    const orderNumber = String(currentOrderNumber).padStart(3, '0');
    const total = calculateTotal();
    
    // Print the order
    const printed = printOrder(orderNumber, items, total);
    
    if (printed) {
      // Increment the order number for next time
      currentOrderNumber++;
      // Call the parent's submit handler
      onSubmitOrder();
    } else {
      alert('There was an error printing the order. Please try again.');
    }
  };

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
        {items.map((item, index) => (
          <div key={`${item.id}-${index}`} className="mb-4 border-b pb-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <div className="mt-2 space-y-1">
                  {item.customizations?.bread && (
                    <p><span className="font-semibold">Bread:</span> {item.customizations.bread}</p>
                  )}
                  {/* Veggies */}
                  {Array.isArray(item.customizations?.veggies) && item.customizations.veggies.length > 0 && (
                 <p>
                 <span className="font-semibold">Veggies:</span> {item.customizations.veggies.join(', ')}
                 </p>
                  )}

                 {/* Cheese */}
                 {item.customizations?.cheese && (
                 <p>
                 <span className="font-semibold">Cheese:</span> {item.customizations.cheese || "None"}
                  </p>
                 )}

{/* Extra Cheese */}
{item.customizations?.extraCheese?.type && (
  <p>
    <span className="font-semibold">Extra Cheese:</span> {item.customizations.extraCheese.type} 
    ({item.customizations.extraCheese.slices ?? 0} {item.customizations.extraCheese.slices === 1 ? 'slice' : 'slices'})
  </p>
)}

                 {/* Dressings */}
                 {Array.isArray(item.customizations?.dressings) && item.customizations.dressings.length > 0 && (
                 <p>
                 <span className="font-semibold">Dressings:</span> {item.customizations.dressings.join(', ')}
                 </p>
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
                  ${(item.customizations?.totalPrice || 
                    (item.price.byWeight 
                      ? (item.customizations?.weight === 'pound' 
                        ? item.price.pound 
                        : item.price.halfPound)
                      : item.price.regular)
                    )?.toFixed(2)}
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