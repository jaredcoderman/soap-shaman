import { create } from "zustand";

interface CartState {
  cartItems: number
  setCartItems: (val: number) => void
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: 0,
  setCartItems: (val) => set((state) => ({ cartItems: val })),
}));
