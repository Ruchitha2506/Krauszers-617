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

// ✅ Define bacon options
const baconOptions = ["Soft", "Crispy", "No Bacon"]; // ✅ Soft or Crispy bacon

// ✅ Define extra bacon settings
const extraBacon = {  
  price: 0.75, // ✅ Price per extra bacon slice
  maxQuantity: 10 // ✅ Max 10 extra bacon slices
}

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
  'Blue cheese', 'A1 sauce/Steak Sauce', 'BBQ sauce', 'Salt', 'Black Pepper', 'Butter'
];

export const hotMenu: MenuItem[] = [
  {
    id: 201,
    name: 'Steak and Cheese',
    description: 'Fresh steak with melted cheese and lettuce, tomato',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Steak.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato', 'Onion', 'Pickles'],
    customization: {
      breads: baseBreads,
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Steak']
    }
  },
  {
    id: 202,
    name: 'Pastrami Bomb',
    description: 'Hot pastrami with Swiss cheese, lettuce, tomato, onions and hot peppers',
    price: {
      regular: 7.49,
      sub: 9.49
    },
    image: '/images/Pastrami Bomb.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Mushrooms', 'Hot peppers/Jalapenos', 'Lettuce', 'Tomato', 'Onions'],
    customization: {
      breads: baseBreads,
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 203,
    name: 'Cheeseburger',
    description: 'Fresh beef patty with cheese and lettuce, tomato',
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
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 204,
    name: 'Hamburger',
    description: 'Fresh beef patty with lettuce and tomato',
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
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 205,
    name: 'Grilled Cheese',
    description: 'Every bite is a hug—warm, buttery, and loaded with melty cheese',
    price: {
      regular: 3.79
    },
    image: '/images/Grill Cheese.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    customization: {
      breads: ['White bread', 'Wheat bread', 'Rye bread'],
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
    }
  },
  {
    id: 206,
    name: 'Meatball Parmigiana',
    description: 'juicy meatballs, zesty marinara, and a perfect Parmigiana finish!',
    price: {
      regular: 6.49,
      sub: 8.49
    },
    image: '/images/Meatball.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Parmigiana cheese', 'American Cheese'],
    customization: {
      breads: ['Hard roll', 'Sub'],
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 207,
    name: 'Turkey Club',
    description: 'Ovengold Turkey with bacon, lettuce, tomato and cheese',
    price: {
      regular: 7.99,
      sub: 9.99
    },
    image: '/images/Turkey Club.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato', 'Onions', 'American cheese'],
    customization: {
      breads: baseBreads,
      baconOptions: baconOptions,
      extraBacon: extraBacon,
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
    includedToppings: ['Lettuce', 'Tomato','Onions', 'Sweet peppers', 'Hot peppers', 'Banana peppers'],
    customization: {
      breads: baseBreads,
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 209,
    name: 'Blazing Buffalo Chicken',
    description: ' buffalo chicken topped with crisp lettuce, juicy tomatoes, and creamy blue cheese, all packed into a bold, flavor-packed bite',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Buffalo Chicken.jpg',
    category: 'Hot Sandwiches',
    temperature: 'hot',
    includedToppings: ['Lettuce', 'Tomato', 'Blue cheese', 'Onions'],
    customization: {
      breads: baseBreads,
      baconOptions: baconOptions,
      extraBacon: extraBacon,
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
      breads: baseBreads,
      baconOptions: baconOptions,
      extraBacon: extraBacon,
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
      baconOptions: baconOptions,
      extraBacon: extraBacon,
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
    includedToppings: ['Onions', 'Sweet peppers/(Hot peppers/Jalapenos)/Banana peppers', 'Marinara sauce', 'Mozzarella cheese'],
    customization: {
      breads: baseBreads,
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 213,
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
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 214,
    name: 'Steak Bomb',
    description: 'Loaded steak sandwich with the choice of toppings',
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
      baconOptions: baconOptions,
      extraBacon: extraBacon,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  }
  
];