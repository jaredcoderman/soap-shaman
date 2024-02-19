"use client";
import React from "react";
import { useCartStore } from "../utils/zustand";

const CartLabel = () => {
  const cartStore = useCartStore();
  return (
    <div>
      <div className="absolute  sm-circle z-0"></div>
      <div className="absolute cart-label z-10 text-white">
        {cartStore.cartItems}
      </div>
    </div>
  );
};

export default CartLabel;
