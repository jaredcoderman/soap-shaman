"use client";
import React from "react";
import Image from "next/image";
import { useCartStore } from "../utils/zustand";
const ShoppingBag = () => {
  return (
    <div className="ml-4">
      <Image
        className=""
        src={`/shopping-bag.png`}
        width="30"
        height="30"
        alt="shopping cart"
      />
    </div>
  );
};

export default ShoppingBag;
