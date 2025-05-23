import { create } from 'zustand';
import type { Product } from '../types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increment: (productId: number) => void;
  decrement: (productId: number) => void;
  getQuantity: (productId: number) => number;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
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
  },

  increment: (productId) => {
    set({
      cart: get().cart.map(p =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    });
  },

  decrement: (productId) => {
    const cart = get().cart
      .map(p =>
        p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
      )
      .filter(p => p.quantity > 0);
    set({ cart });
  },

  getQuantity: (productId) => {
    const product = get().cart.find(p => p.id === productId);
    return product ? product.quantity : 0;
  },

  removeFromCart: (productId) => {
    set({
      cart: get().cart.filter(p => p.id !== productId)
    });
  },

  clearCart: () => {
    set({ cart: [] });
  }
}));

export default useCartStore;
