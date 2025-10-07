import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { WelcomeBanner } from './components/WelcomeBanner';
import { CategoryGrid } from './components/CategoryGrid';
import { MenuCategoryView } from './components/MenuCategoryView';
import { OrderSummary } from './components/OrderSummary';
import { Category, CartItem } from './types';
import { hotMenu } from './data/menus/hotMenu';
import { coldMenu } from './data/menus/coldMenu';
import { breakfastMenu } from './data/menus/breakfastMenu';
import { houseSpecialsMenu } from './data/menus/houseSpecialsMenu';
import { bagelsMenu } from './data/menus/bagelsMenu';
import { saladsMenu } from './data/menus/saladsMenu';


const categories: Category[] = [
  {
    id: 1,
    name: 'Hot Sandwiches',
    description: 'Delicious grilled and toasted sandwiches served warm',
    image: '/Krauszers-617/images/Meatball.jpg',
    temperature: 'hot'
  },
  {
    id: 2,
    name: 'Cold Sandwiches',
    description: 'Fresh and crisp deli-style sandwiches',
    image: '/Krauszers-617/images/Ham.jpg',
    temperature: 'cold'
  },
  {
    id: 3,
    name: 'Breakfast Sandwiches',
    description: 'Start your day with our breakfast favorites',
    image: '/Krauszers-617/images/BaconEgg.jpg',
    temperature: 'hot'
  },
  {
    id: 4,
    name: 'House Specials',
    description: 'Our signature creations that keep customers coming back',
    image: '/Krauszers-617/images/ChickenCutlet.jpg',
    temperature: 'both'
  },
  {
    id: 5,
    name: 'Bagels and More',
    description: 'Fresh-baked bagels with your choice of toppings',
    image: '/Krauszers-617/images/ChickenCutlet.jpg',
    temperature: 'both'
  },
  {
    id: 6,
    name: 'Salads and Beef Patties',
    description: 'Healthy options and savory beef patties',
    image: '/Krauszers-617/images/ChickenCutlet.jpg',
    temperature: 'both'
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleMenuClick = () => {
    setSelectedCategory(null);
  };

  const handleCartClick = () => {
    // TODO: Implement cart view
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const handleSubmitOrder = () => {
    setCartItems([]);          // Clear cart
    setSelectedCategory(null); // Go back to main page
  };
  
  

  // Only show the order summary if we're in a category view
  const showOrderSummary = selectedCategory !== null && cartItems.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        cartItemCount={cartItems.length}
        onMenuClick={handleMenuClick}
        onCartClick={handleCartClick}
        categories={categories}
        onCategorySelect={handleCategoryClick}
      />
      <main className="pt-14">
        {!selectedCategory && <WelcomeBanner />}
        <div className="flex">
          <div className={`${showOrderSummary ? 'w-3/4 pr-4' : 'w-full'}`}>
            {selectedCategory ? (
              <MenuCategoryView
              category={selectedCategory}
              hotMenu={hotMenu}
              coldMenu={coldMenu}
              breakfastMenu={breakfastMenu}
              houseSpecialsMenu={houseSpecialsMenu}
              bagelsMenu={bagelsMenu}
              saladsMenu={saladsMenu}
              onBack={handleBackToCategories}
              onAddToCart={handleAddToCart}
            />
            
            ) : (
              <CategoryGrid
                categories={categories}
                onCategoryClick={handleCategoryClick}
              />
            )}
          </div>
          {showOrderSummary && (
            <div className="w-1/4 fixed right-0 top-14 bottom-0 bg-gray-50">
              <OrderSummary
                items={cartItems}
                onRemoveItem={handleRemoveFromCart}
                onSubmitOrder={handleSubmitOrder}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}