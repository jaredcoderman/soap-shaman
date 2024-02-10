import Image from "next/image";
import React from "react";
import ProductTile from "../components/ProductTile";

const page = () => {
  return (
    <div className="mx-8 w-3/5 mx-auto">
      <h1 className="text-5xl mb-12">Our Selection</h1>
      <div className="grid grid-cols-4">
        <ProductTile path={"/yellow-bow.jpeg"} alt="Lemon yellow" />
        <ProductTile path={"/aqua.jpg"} alt="Hydrating aqua" />
        <ProductTile path={"/pink.jpeg"} alt="Pink calming balm" />
        <ProductTile path={"/purple-bow.jpg"} alt="Luxury purple" />
        <ProductTile path={"/yellow.jpeg"} alt="Relaxing yellow" />
      </div>
    </div>
  );
};

export default page;
