import { useState } from 'react';
import { Category, MenuItem, CartItem } from '../types';
import { CustomizationModal } from './CustomizationModal';

interface MenuCategoryViewProps {
  category: Category;
  hotMenu: MenuItem[];
  coldMenu: MenuItem[];
  breakfastMenu: MenuItem[];
  houseSpecialsMenu: MenuItem[];
  bagelsMenu: MenuItem[];
  saladsMenu: MenuItem[];
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
}

export function MenuCategoryView({
  category,
  hotMenu,
  coldMenu,
  breakfastMenu,
  houseSpecialsMenu,
  bagelsMenu,
  saladsMenu,
  onBack,
  onAddToCart,
}: MenuCategoryViewProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Function to determine which menu to display based on the selected category
  const getCategoryMenu = () => {
    switch (category.name) {
      case 'Hot Sandwiches':
        return hotMenu;
      case 'Cold Sandwiches':
        return coldMenu;
      case 'Breakfast Sandwiches':
        return breakfastMenu;
      case 'House Specials':
        return houseSpecialsMenu;
      case 'Bagels and More':
        return bagelsMenu;
      case 'Salads and Beef Patties':
        return saladsMenu;
      default:
        return [];
    }
  };

  return (
    <div className="p-6">
      {/* Back Button */}
      <button onClick={onBack} className="text-red-600 font-semibold mb-4">
        ← Back to Categories
      </button>

      {/* Category Title */}
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>

      {/* Display Menu Items */}
      <div className="grid grid-cols-1 gap-6">
        {getCategoryMenu().map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image and Details Section */}
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              {item.image && (
                <div className="md:w-1/4 h-48 md:h-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Details Section */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
{/* Price Display */}
<div className="text-right">
  <div className="font-semibold text-lg">
    {category.name === 'Salads and Beef Patties' && 'halfPound' in item.price
      ? `$${(item.price.halfPound ?? 0).toFixed(2)} `

      : item.price?.regular !== undefined
        ? `$${item.price.regular.toFixed(2)}`
        : 'Price Not Available'}
  </div>
</div>
</div> {/* closes item header/flex container */}

{/* Customize or Add to Order Button */}
{category.name === 'Salads and Beef Patties' &&
 item.price?.pound !== undefined &&
 item.price?.halfPound !== undefined ? (
  // 🥗 Salad → show ½ lb and 1 lb buttons
  <div className="flex gap-2 mt-3">
    <button
      onClick={() =>
        onAddToCart({
          id: item.id,
          name: item.name,
          price: { regular: item.price.halfPound ?? 0 }, // ✅ half pound
          quantity: 1,
          customizations: { weight: 'halfPound' },
          description: '',
          category: '',
          temperature: 'hot'
        })
      }
      className="bg-red-600 text-white px-4 py-2 rounded-md text-sm"
    >
      ½ lb
    </button>
    <button
      onClick={() =>
        onAddToCart({
          id: item.id,
          name: item.name,
          price: { regular: item.price.pound ?? 0 }, // ✅ full pound
          quantity: 1,
          customizations: { weight: 'pound' },
          description: '',
          category: '',
          temperature: 'hot'
        })
      }
      className="bg-red-600 text-white px-4 py-2 rounded-md text-sm"
    >
      1 lb
    </button>
  </div>
) : (
  // 🥯 Bagels & 🥟 Patties → Add to Order | All others → Customize
  <button
    onClick={() => {
      if (
        category.name === 'Bagels and More' ||
        category.name === 'Salads and Beef Patties'
      ) {
        onAddToCart({
          id: item.id,
          name: item.name,
          price: (item.price as any)?.regular ?? 0,
          quantity: 1,
          customizations: {},
          description: '',
          category: '',
          temperature: 'hot'
        });
      } else {
        setSelectedItem(item); // open customization modal
      }
    }}
    className="bg-red-600 text-white px-7 py-3 rounded-md mt-3 text-sm"
  >
    {['Bagels and More', 'Salads and Beef Patties'].includes(category.name)
      ? 'Add to Order'
      : 'Customize & Order'}
  </button>
)}


              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Customization Modal */}
      {selectedItem && (
        <CustomizationModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
}
