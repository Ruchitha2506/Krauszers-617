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
  'Honey mustard', 'Oil', 'Vinegar', 'Salt', 'Black Pepper', 'Thousand island dressing',
  'Blue cheese', 'BBQ sauce', 'Butter'
];

export const coldMenu: MenuItem[] = [
    {
      id: 301,
      name: 'Deluxe Ham and Cheese',
      description: 'Deluxe ham served with lettuce, tomato, and your choice of fresh toppings to make it your own.',
      price: {
        regular: 6.49,
        sub: 8.49
      },
      image: '/Krauszers-617/images/Ham.jpg',
      category: 'Cold Sandwiches',
      temperature: 'cold',
      customization: {
        breads: baseBreads,
        veggies: commonVeggies,
        cheeses: commonCheeses,
        dressings: commonDressings,
        extraMeatOptions: ['Ovengold Turkey','Maple Honey Turkey', 'Peppermill Turkey', 'Musquite Turkey',
          'Delux Ham', 'Honey Ham', 'Roast Beef', 'Pastraami', 'Salami', 'Bologna', 'Hard Salami',
          'Pepperoni', 'Cappy Ham', 'Liverwrust','Chicken Breast', 'Buffalo Chicken'],
      }
    },
  {
    id: 302,
    name: 'Honey Ham and Cheese',
    description: 'Maple honey ham served with lettuce, tomato, and your choice of fresh toppings to make it your own.',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/HoneyHam.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 303,
    name: 'Italian Combo',
    description: 'Genoa salami, cappy style ham and deluxe ham with choice of veggies, cheese and dressings',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/ItalianSpecials.jpg',
    category: 'Cold Sandwiches',
    temperature: 'both',
    includedToppings: ['Genoa salami', 'Cappy ham', 'Deluxe ham'],
    customization: {
      breads: ['Hard roll', 'Sub'],
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 304,
    name: 'Ovengold Turkey',
    description: 'Premium ovengold turkey breast served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.49,
      sub: 8.49
    },
    image: '/Krauszers-617/images/OvengoldTurkey.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 305,
    name: 'Peppermill Turkey',
    description: 'Peppered turkey breast served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/PepperTurkey.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 306,
    name: 'Honey Turkey',
    description: 'Maple honey turkey breast served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/HoneyTurkey.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 307,
    name: 'Smoked Turkey',
    description: 'Smoky turkey breast served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/SmokedTurkey.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 308,
    name: 'Roast Beef',
    description: 'Premium roast beef served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/Roastbeef.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 309,
    name: 'Pastrami',
    description: 'Pastrami with served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/Pastrami.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 310,
    name: 'Bologna',
    description: 'Hummles Bologna served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 5.99,
      sub: 7.99
    },
    image: '/Krauszers-617/images/Bologna.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 311,
    name: 'Genoa Salami',
    description: 'Genoa salami served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 5.99,
      sub: 7.99
    },
    image: '/Krauszers-617/images/GenoaSalami.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 312,
    name: 'Hard Salami',
    description: 'Hard salami served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 5.99,
      sub: 7.99
    },
    image: '/Krauszers-617/images/HardSalami.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 313,
    name: 'Pepperoni',
    description: 'Pepperoni with served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/Pepperoni.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 314,
    name: 'Cappy Ham',
    description: 'Premium cappy ham served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/CappyHam.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 315,
    name: 'Liverwurst',
    description: 'liverwurst served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 5.99,
      sub: 7.99
    },
    image: '/Krauszers-617/images/Liverwurst.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 316,
    name: 'Chicken Breast',
    description: 'Chicken breast served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/ChickenBreast.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 317,
    name: 'Buffalo Chicken',
    description: 'Buffalo chicken breast served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/BuffaloChicken.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 318,
    name: 'BBQ Chicken',
    description: 'BBQ chicken breast served with lettuce, tomato, and your choice of fresh toppings to make it your own',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/BBQChicken.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
    }
  },
  {
    id: 319,
    name: 'Veggie with Cheese',
    description: 'Fresh vegetables with your choice of cheese',
    price: {
      regular: 4.99,
      sub: 6.99
    },
    image: '/Krauszers-617/images/VeggieWithCheese.jpg',
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
    name: 'Tuna Salad',
    description: 'Fresh tuna salad with choice of veggies',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/TunaSalad.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: [],
    }
  },
  {
    id: 321,
    name: 'Chicken Salad',
    description: 'Fresh chicken salad with lettuce, and tomato',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/ChickenSalad.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: [],
    }
  },
  {
    id: 322,
    name: 'Egg Salad',
    description: 'Fresh egg salad with lettuce, and tomato',
    price: {
      regular: 6.99,
      sub: 8.99
    },
    image: '/Krauszers-617/images/EggSalad.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: [],
    }
  },
  {
    id: 323,
    name: 'Customize Your Own Sandwich',
    description: 'Choose upto 3 meats, cheese, dressings, and build your perfect sandwich.',
    price: {
      regular: 7.49,
      sub: 9.49
    },
    image: '/Krauszers-617/images/EggSalad.jpg',
    category: 'Cold Sandwiches',
    temperature: 'cold',
    customization: {
      breads: baseBreads,
      veggies: commonVeggies,
      cheeses: commonCheeses,
      dressings: commonDressings,
      extraMeatOptions: ['Turkey', 'Ham', 'Roast Beef', 'Salami', 'Chicken Breast'],
      meatSelectionOptions: ['Ham', 'Honey Ham', 'Turkey', 'Honey Turkey', 'Smoked Turkey', 
        'Pepper turkey', 'Geneo Salami', 'Hard Salami','Cappy ham', 'Bologna', 'Pepperoni', 'Liverwrust'] 
    }
  }
];