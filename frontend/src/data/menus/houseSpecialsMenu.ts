import { MenuItem } from '../../types';

const baseBreads = [
  'Hard roll',
  'Sub',
  'White wrap',
  'Wheat wrap',
  'Spinach wrap',
  'Tomato wrap',
  'White bread',
  'Wheat bread',
  'Rye bread'
];

const commonVeggies = [
  { name: 'Lettuce', price: { sub: 1.50, other: 0.75 } },
  { name: 'Tomato', price: { sub: 1.50, other: 0.75 } },
  { name: 'Mushrooms', price: { sub: 1.50, other: 0.75 } },
  { name: 'Onion', price: { sub: 1.00, other: 0.50 } },
  { name: 'Pickles', price: { sub: 1.00, other: 0.50 } },
  { name: 'Olives', price: { sub: 1.00, other: 0.50 } },
  { name: 'Sweet peppers', price: { sub: 1.00, other: 0.50 } },
  { name: 'Banana peppers', price: { sub: 1.00, other: 0.50 } },
  { name: 'Hot peppers/Jalapenos', price: { sub: 1.00, other: 0.50 } }
];

const commonCheeses = [
  { name: "No Cheese", extraCharge: false, defaultSlices: { sub: 0, other: 0 } }, 
  { name: 'American Cheese', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
  { name: 'Land O Lakes American', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
  { name: 'Yellow American', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
  { name: 'Provolone', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
  { name: 'Swiss', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
  { name: 'Pepper Jack', extraCharge: true, pricePerSlice: 0.25, defaultSlices: { sub: 3, other: 1 } },
  { name: 'Cheddar', extraCharge: true, pricePerSlice: 0.25, defaultSlices: { sub: 3, other: 1 } },
  { name: 'Munster', extraCharge: true, pricePerSlice: 0.25, defaultSlices: { sub: 3, other: 1 } },
  { name: 'Mozzarella', extraCharge: true, pricePerSlice: 0.25, defaultSlices: { sub: 3, other: 1 } }
];

const commonDressings = [
  'Mayo', 'Ketchup', 'Hot sauce', 'Yellow mustard', 'Spicy mustard',
  'Honey mustard', 'Oil', 'Vinegar', 'Thousand island dressing',
  'Blue cheese', 'A1 sauce', 'BBQ sauce', 'Salt', 'Pepper', 'Butter'
];

export const houseSpecialsMenu: MenuItem[] = [
  {
    id: 401,
    name: 'Campbell Bomber',
    description: 'Steak with onions, peppers, marinara sauce and mozzarella cheese',
    price: {
      regular: 7.49,
      sub: 9.49
    },
    image: '/images/Campbell Bomber.jpg',
    category: 'House Specials',
    temperature: 'hot',
    includedToppings: ['Onion', 'Sweet peppers', 'Lettuce', 'Tomato'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: [],
    }
  },
  {
    id: 402,
    name: 'Chicken Cutlet with Cheese',
    description: 'Freshly cooked crispy chicken cutlet with lettuce, tomato and cheese',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Chicken Cutlet.jpg',
    category: 'House Specials',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato', 'American cheese'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 403,
    name: 'Krauszers Special',
    description: 'Smoked turkey and pepperoni with provolone cheese, lettuce, tomato, spicy mustard and hot peppers',
    price: {
      regular: 7.49,
      sub: 9.49
    },
    image: '/images/Krauzers Special.jpg',
    category: 'House Specials',
    temperature: 'cold',
    includedToppings: ['Smoked turkey', 'Pepperoni', 'Provolone cheese', 'Lettuce', 'Tomato', 'Spicy mustard', 'Hot peppers/Jalapenos'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 404,
    name: 'Campbell Combo',
    description: 'Roast beef and smoked turkey with Swiss cheese, lettuce, tomato, onions, peppers and thousand island dressing',
    price: {
      regular: 7.49,
      sub: 9.49
    },
    image: '/images/Campbell Combo.jpg',
    category: 'House Specials',
    temperature: 'cold',
    includedToppings: ['Roast beef', 'Smoked turkey', 'Swiss cheese', 'Lettuce', 'Tomato', 'Onions', 'Sweet peppers/(Hot peppers/Jalapenos)/Banana peppers', 'Thousand island dressing'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 405,
    name: 'Italian Combo',
    description: 'Geneo Salami, delux ham and cappy ham with lettuce, tomato, and your choice of fresh toppings to make it your own.',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Italian.jpg',
    category: 'House Specials',
    temperature: 'cold',
    includedToppings: ['Lettuce', 'Tomato', 'Mushrooms', 'Onion', 'Pickles',  'Olives',
       'Sweet peppers',  'Banana peppers', 'Hot peppers/Jalapenos'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 406,
    name: 'Beef & Cheddar',
    description: 'Hot roast beef with cheddar cheese, grilled onions and horseradish sauce',
    price: {
      regular: 7.99,
      sub: 9.99
    },
    image: '/images/Beef & Cheddar.jpg',
    category: 'House Specials',
    temperature: 'hot',
    includedToppings: ['Hot roast beef', 'Cheddar cheese', 'Grilled onions', 'Horseradish sauce'],
    customization: {
      breads: ['Hard roll', 'Sub'],
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 407,
    name: 'Buffalo Chicken',
    description: 'Blazing buffalo chicken with lettuce, tomato and blue cheese dressing',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Buffalo Chicken.jpg',
    category: 'House Specials',
    temperature: 'hot',
    includedToppings: ['Blazing buffalo chicken', 'Lettuce', 'Tomato', 'Blue cheese'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  }
];