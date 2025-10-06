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
    extraEggs?: {
      price: number;
      maxQuantity: number;
    };
    baconOptions?: string[]; // ✅ Soft, Crispy, or No Bacon selection
    extraBacon?: {
      price: number;
      maxQuantity: number;
    };
    extraMeatOptions?: string[]; // ✅ Added extra meat selection dropdown
    meatSelectionOptions?: string[];

  };
  customizable?: boolean;
  extras?: {
    bacon?: {
      sub: number;
      other: number;
    };
    extraMeat?: {
      pricePerUnit: number; // ✅ Price per extra meat portion
      maxQuantity: number;  // ✅ Maximum allowed extra meat portions
    };
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
  customizations?: {
    extraCheese?: {
      type: string;
      slices: number;
    };
    bread?: string;
    veggies?: string[];
    dressings?: string[];
    cheese?: string;
    extraCheeseSlices?: number;
    extraEggs?: number;
    baconType?: string; // ✅ Soft or Crispy bacon
    extraBacon?: number; // ✅ Extra bacon slices
    extraMeat?: {
      type: string;
      quantity: number;
    }; // ✅ Extra Meat Selection added to CartItem
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
