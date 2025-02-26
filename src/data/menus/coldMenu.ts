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
  'Honey mustard', 'Oil', 'Vinegar', 'Salt', 'Black Pepper', 'Thousand island dressing',
  'Blue cheese', 'BBQ sauce', 'Butter'
];

export const coldMenu: MenuItem[] = [
  {
    id: 301,
    name: 'Deluxe Ham and Cheese',
    description: 'Premium deluxe ham with your choice of cheese',
    price: {
      regular: 6.49,
      sub: 8.49
    },
    image: '/images/Ham.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 302,
    name: 'Honey Ham and Cheese',
    description: 'Sweet honey ham with your choice of cheese',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Honey Ham.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 303,
    name: 'Ovengold Turkey',
    description: 'Premium ovengold turkey breast',
    price: {
      regular: 6.49,
      sub: 8.49
    },
    image: '/images/Ovengold Turkey.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 304,
    name: 'Peppermill Turkey',
    description: 'Peppered turkey breast',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Pepper Turkey.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 305,
    name: 'Honey Turkey',
    description: 'Sweet honey turkey breast',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Honey Turkey.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 306,
    name: 'Smoked Turkey',
    description: 'Smoky turkey breast',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Smoked Turkey.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 307,
    name: 'Roast Beef',
    description: 'Premium roast beef',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Roast beef.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 308,
    name: 'Pastrami',
    description: 'Premium pastrami',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Pastrami.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 309,
    name: 'Bologna',
    description: 'Classic bologna',
    price: {
      regular: 5.99,
      sub: 7.99
    },
    image: '/images/Bologna.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 310,
    name: 'Genoa Salami',
    description: 'Italian Genoa salami',
    price: {
      regular: 5.99,
      sub: 7.99
    },
    image: '/images/Genoa Salami.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 311,
    name: 'Hard Salami',
    description: 'Premium hard salami',
    price: {
      regular: 5.99,
      sub: 7.99
    },
    image: '/images/Hard Salami.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 312,
    name: 'Pepperoni',
    description: 'Spicy Italian pepperoni',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Pepperoni.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 313,
    name: 'Cappy Ham',
    description: 'Premium cappy ham',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Cappy Ham.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 314,
    name: 'Liverwurst',
    description: 'Classic liverwurst',
    price: {
      regular: 5.99,
      sub: 7.99
    },
    image: '/images/Liverwurst.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 315,
    name: 'Chicken Breast',
    description: 'Sliced chicken breast',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Chicken Breast.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 316,
    name: 'Buffalo Chicken',
    description: 'Sliced buffalo chicken breast',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Buffalo Chicken.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 317,
    name: 'BBQ Chicken',
    description: 'Sliced BBQ chicken breast',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/BBQ Chicken.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 318,
    name: 'Veggie with Cheese',
    description: 'Fresh vegetables with your choice of cheese',
    price: {
      regular: 4.99,
      sub: 6.99
    },
    image: '/images/Veggie With Cheese.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 319,
    name: 'Tuna Salad',
    description: 'Fresh tuna salad',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Tuna Salad.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 320,
    name: 'Chicken Salad',
    description: 'Fresh chicken salad',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Chicken Salad.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  },
  {
    id: 321,
    name: 'Egg Salad',
    description: 'Fresh egg salad',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/images/Egg Salad.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings
    }
  }
];