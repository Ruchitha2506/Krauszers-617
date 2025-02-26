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
  { name: 'Boars Head American', extraCharge: false, defaultSlices: { sub: 3, other: 1 } },
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
  'Blue cheese', 'A1 sauce/Steak Sauce', 'BBQ sauce', 'Salt', 'Black Pepper', 'Butter'
];

export const hotMenu: MenuItem[] = [
  {
    id: 201,
    name: 'Steak and Cheese',
    description: 'Fresh steak with melted cheese and veggies',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Steak.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato', 'Onion'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 202,
    name: 'Pastrami Bomb',
    description: 'Hot pastrami with Swiss cheese and toppings',
    price: {
      regular: 7.49,
      sub: 9.49
    },
    image: '/images/Pastrami Bomb.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Mushrooms', 'Onions', 'Hot peppers/Jalapenos', 'Swiss'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 203,
    name: 'Cheeseburger',
    description: 'Fresh beef patty with cheese and toppings',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Cheeseburger.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato'],
    customization: {
      breads: ['Hard roll', 'Sub'],
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 204,
    name: 'Hamburger',
    description: 'Fresh beef patty with toppings',
    price: {
      regular: 6.49,
      sub: 8.49
    },
    image: '/images/Hamburger.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato'],
    customization: {
      breads: ['Hard roll', 'Sub'],
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 205,
    name: 'Grilled Cheese',
    description: 'Classic grilled cheese sandwich',
    price: {
      regular: 3.79
    },
    image: '/images/Grill Cheese.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    customization: {
      breads: ['White bread', 'Wheat bread', 'Rye bread'],
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 206,
    name: 'Meatball Parmigiana',
    description: 'Italian meatballs with marinara sauce and parmigiana cheese',
    price: {
      regular: 6.49,
      sub: 8.49
    },
    image: '/images/Meatball.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Parmigiana cheese'],
    customization: {
      breads: ['Hard roll', 'Sub'],
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 207,
    name: 'Turkey Club',
    description: 'Turkey with bacon, lettuce, tomato and cheese',
    price: {
      regular: 7.99,
      sub: 9.99
    },
    image: '/images/Turkey Club.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato', 'American cheese'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    },
    extras: {
      bacon: {
        sub: 4,
        other: 2
      }
    }
  },
  {
    id: 208,
    name: 'The Reuben',
    description: 'Hot pastrami with grilled onions, peppers and deli mustard',
    price: {
      regular: 7.99,
      sub: 9.99
    },
    image: '/images/The Ruben.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Grilled onions', 'Sweet peppers', 'Hot peppers/Jalapenos', 'Banana peppers', 'Yellow mustard', 'Spicy mustard', 'Honey mustard'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 209,
    name: 'Blazing Buffalo Chicken',
    description: 'Spicy buffalo chicken with lettuce, tomato and blue cheese',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Buffalo Chicken.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato', 'Blue cheese'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 210,
    name: 'Beef And Cheddar',
    description: 'Hot roast beef with cheddar cheese, grilled onions and horseradish sauce',
    price: {
      regular: 7.99,
      sub: 9.99
    },
    image: '/images/Beef and Cheddar.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Cheddar cheese', 'Grilled onions', 'Horseradish sauce'],
    customization: {
      breads: ['Hard roll', 'Sub'],
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 211,
    name: 'BLT',
    description: 'Bacon, lettuce, tomato and Mayo',
    price: {
      regular: 6.49,
      sub: 8.49
    },
    image: '/images/BLT.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    },
    extras: {
      bacon: {
        sub: 6,
        other: 4
      }
    }
  },
  {
    id: 212,
    name: 'Campbell Bomber',
    description: 'Steak with onions, peppers, marinara sauce and mozzarella cheese',
    price: {
      regular: 7.49,
      sub: 9.49
    },
    image: '/images/Campbell Bomber.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Onions', 'Sweet peppers', 'Marinara sauce', 'Mozzarella cheese'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 213,
    name: 'Steak Bomb',
    description: 'Loaded steak sandwich with all the fixings',
    price: {
      regular: 7.49,
      sub: 9.49
    },
    image: '/images/Steak Bomb.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Mushrooms', 'Onions', 'Peppers', 'American cheese'],
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  }
];