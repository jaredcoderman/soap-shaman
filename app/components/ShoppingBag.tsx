"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "../utils/zustand";
import Link from "next/link";
const ShoppingBag = () => {
  const cartStore = useCartStore();

  const fetchUserCart = async () => {
    try {
      const response = await fetch("/api/users/products", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!response.ok)
        throw new Error(`${response.status}: (${response.statusText})`);
      const responseBody = await response.json();
      const userCart = responseBody.userCart;
      cartStore.setCartItems(userCart.length);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchUserCart();
  // }, []);

  return (
    <Link href="/cart">
      <div className="ml-4">
        <Image
          className="cursor-pointer"
          src={`/shopping-bag.png`}
          width="40"
          height="40"
          alt="shopping cart"
        />
      </div>
    </Link>
  );
};

export default ShoppingBag;
