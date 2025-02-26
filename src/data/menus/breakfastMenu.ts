import { MenuItem } from '../../types';

const baseBreads = [
  'Hard roll',
  'Sub',
  'Portuguese roll',
  'Bagel',
  'White bread',
  'Wheat bread',
  'Rye bread',
  'White wrap',
  'Wheat wrap',
  'Spinach wrap',
  'Tomato wrap'
];

const commonCustomization = {
  breads: baseBreads,
  veggies: [
    { name: 'Lettuce', price: { sub: 1.50, other: 0.75 } },
    { name: 'Tomato', price: { sub: 1.50, other: 0.75 } },
    { name: 'Mushrooms', price: { sub: 1.50, other: 0.75 } },
    { name: 'Onion', price: { sub: 1.00, other: 0.50 } },
    { name: 'Pickles', price: { sub: 1.00, other: 0.50 } },
    { name: 'Olives', price: { sub: 1.00, other: 0.50 } },
    { name: 'Sweet peppers', price: { sub: 1.00, other: 0.50 } },
    { name: 'Banana peppers', price: { sub: 1.00, other: 0.50 } },
    { name: 'Hot peppers/Jalapenos', price: { sub: 1.00, other: 0.50 } }
  ],
  cheeses: [
    { name: 'Boars Head American', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
    { name: 'Land O Lakes American', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
    { name: 'Yellow American', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
    { name: 'Provolone', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
    { name: 'Swiss', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
    { name: 'Pepper Jack', extraCharge: true, pricePerSlice: 0.25, defaultSlices: { sub: 3, other: 1 } },
    { name: 'Cheddar', extraCharge: true, pricePerSlice: 0.25, defaultSlices: { sub: 3, other: 1 } },
    { name: 'Munster', extraCharge: true, pricePerSlice: 0.25, defaultSlices: { sub: 3, other: 1 } },
    { name: 'Mozzarella', extraCharge: true, pricePerSlice: 0.25, defaultSlices: { sub: 3, other: 1 } }
  ],
  dressings: [
    'Mayo', 'Ketchup', 'Hot sauce', 'Salt', 'Black Pepper',  'Yellow mustard', 'Spicy mustard',
    'Honey mustard', 'Oil', 'Vinegar'
  ]
};

export const breakfastMenu: MenuItem[] = [
  {
    id: 101,
    name: 'Egg and Cheese',
    description: 'Fresh egg with melted cheese',
    price: {
      regular: 3.89,
      sub: 7.99,
      bagel: 4.29
    },
    image: '/images/Egg and Cheese.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization
  },
  {
    id: 102,
    name: 'Bacon, Egg and Cheese',
    description: 'Fresh egg with crispy bacon and melted cheese',
    price: {
      regular: 4.89,
      sub: 8.99,
      bagel: 5.29
    },
    image: '/images/Bacon and Egg.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization
  },
  {
    id: 103,
    name: 'Sausage, Egg and Cheese',
    description: 'Fresh egg with sausage patty and melted cheese',
    price: {
      regular: 4.89,
      sub: 8.99,
      bagel: 5.29
    },
    image: '/images/Sausage and Egg.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization
  },
  {
    id: 104,
    name: 'Steak, Egg and Cheese',
    description: 'Fresh egg with grilled steak and melted cheese',
    price: {
      regular: 5.89,
      sub: 9.99,
      bagel: 6.29
    },
    image: '/images/Steak and Egg.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization
  },
  {
    id: 105,
    name: 'Pastrami, Egg and Cheese',
    description: 'Fresh egg with hot pastrami and melted cheese',
    price: {
      regular: 5.89,
      sub: 9.99,
      bagel: 6.29
    },
    image: '/images/Pastrami and Egg.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization
  },
  {
    id: 106,
    name: 'Ham, Egg and Cheese',
    description: 'Fresh egg with ham and melted cheese',
    price: {
      regular: 4.89,
      sub: 8.99,
      bagel: 5.29
    },
    image: '/images/Ham and Egg.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization
  },
  {
    id: 107,
    name: 'Turkey, Egg and Cheese',
    description: 'Fresh egg with turkey and melted cheese',
    price: {
      regular: 4.89,
      sub: 8.99,
      bagel: 5.29
    },
    image: '/images/Turkey and Egg.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization
  },
  {
    id: 108,
    name: 'Egg Whites and Cheese',
    description: 'Fresh egg whites with melted cheese',
    price: {
      regular: 4.29,
      sub: 7.99,
      bagel: 5.29
    },
    image: '/images/Egg Whites and Cheese.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization
  },
  {
    id: 109,
    name: 'Egg Whites and Veggies',
    description: 'Fresh egg whites with your choice of vegetables',
    price: {
      regular: 4.89,
      sub: 7.99,
      bagel: 5.29
    },
    image: '/images/Egg Whites and Veggies.jpg',
    category: 'Breakfast Sandwiches',
    temperature: 'hot',
    customization: commonCustomization,
    includedToppings: ['Lettuce', 'Tomato', 'Onion']
  }
];