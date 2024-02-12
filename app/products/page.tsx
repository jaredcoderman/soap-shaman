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

  const productTiles = products.map((product, index) => {
    return <ProductTile product={product} key={index} />;
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-3/5 mx-auto">
      <h1 className="ml-4 font-medium text-sm mb-12 mt-16 text-center">
        SELECTION
      </h1>
      <div className="mt-16 grid gap-4 grid-cols-4">{productTiles}</div>
    </div>
  );
};

export default page;
