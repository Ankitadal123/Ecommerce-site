import { create } from 'zustand';
import type { Product } from '../types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) => {
    const cart = get().cart;
    const exists = cart.find(p => p.id === product.id);
    if (exists) {
      set({
        cart: cart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  }
}));

export default useCartStore;
