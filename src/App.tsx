import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { WelcomeBanner } from './components/WelcomeBanner';
import { CategoryGrid } from './components/CategoryGrid';
import { MenuCategoryView } from './components/MenuCategoryView';
import { OrderSummary } from './components/OrderSummary';
import { Category, CartItem } from './types';


const categories: Category[] = [
  {
    id: 1,
    name: 'Hot Sandwiches',
    description: 'Delicious grilled and toasted sandwiches served warm',
    image: '/images/Meatball.jpg',
    temperature: 'hot'
  },
  {
    id: 2,
    name: 'Cold Sandwiches',
    description: 'Fresh and crisp deli-style sandwiches',
    image: '/images/Ham.jpg',
    temperature: 'cold'
  },
  {
    id: 3,
    name: 'Breakfast Sandwiches',
    description: 'Start your day with our breakfast favorites',
    image: '/images/Bacon and Egg.jpg',
    temperature: 'hot'
  },
  {
    id: 4,
    name: 'House Specials',
    description: 'Our signature creations that keep customers coming back',
    image: '/images/Chicken Cutlet.jpg',
    temperature: 'both'
  },
  {
    id: 5,
    name: 'Bagels and More',
    description: 'Fresh-baked bagels with your choice of toppings',
    image: '/images/Chicken Cutlet.jpg',
    temperature: 'both'
  },
  {
    id: 6,
    name: 'Salads and Beef Patties',
    description: 'Healthy options and savory beef patties',
    image: '/images/Chicken Cutlet.jpg',
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
    // Clear the cart and return to welcome screen
    setCartItems([]);
    setSelectedCategory(null);
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