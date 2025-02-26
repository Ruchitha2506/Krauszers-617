export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: {
    regular?: number;
    sub?: number;
    bagel?: number;
    extraVeggies?: {
      regular: number;
      sub: number;
    };
    byWeight?: boolean;
    pound?: number;
    halfPound?: number;
  };
  image?: string;
  category: string;
  temperature: 'hot' | 'cold' | 'both';
  allowedBreads?: string[];
  includedToppings?: string[];
  customization?: {
    breads: string[];
    veggies: {
      name: string;
      price: {
        sub: number;
        other: number;
      };
    }[];
    cheeses: {
      name: string;
      extraCharge: boolean;
      pricePerSlice?: number;
      defaultSlices: {
        sub: number;
        other: number;
      };
    }[];
    dressings: string[];
  };
  customizable?: boolean;
  extras?: {
    bacon?: {
      sub: number;
      other: number;
    };
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
  customizations?: {
    extraCheese: any;
    bread?: string;
    veggies?: string[];
    dressings?: string[];
    cheese?: string;
    extraCheeseSlices?: number;
    extras?: string[];
    weight?: 'pound' | 'halfPound';
    temperature?: 'hot' | 'cold';
    specialInstructions?: string;
    totalPrice?: number;
  };
  note?: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  temperature: 'hot' | 'cold' | 'both';
}
