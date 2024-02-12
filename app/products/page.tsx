"use client";
import React, { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile";

const page = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok)
        throw new Error(`${response.status}: (${response.statusText})`);
      const responseBody = await response.json();
      setProducts(responseBody.products);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="w-3/5 mx-auto">
      <h1 className="ml-4 font-medium text-sm mb-12 mt-16 text-center">
        SELECTION
      </h1>
      <div className="mt-16 grid gap-4 grid-cols-4">
        <ProductTile path={"/yellow-bow.jpeg"} alt="Lemon yellow" />
        <ProductTile path={"/aqua.jpg"} alt="Hydrating aqua" />
        <ProductTile path={"/pink.jpeg"} alt="Calming pink" />
        <ProductTile path={"/purple-bow.jpg"} alt="Luxury purple" />
        <ProductTile path={"/yellow.jpeg"} alt="Relaxing yellow" />
      </div>
    </div>
  );
};

export default page;
