import Image from "next/image";
import React from "react";
import ProductTile from "../components/ProductTile";

const page = () => {
  return (
    <div className="w-3/5 mx-auto">
      <h1 className="ml-4 font-medium text-5xl mb-12 mt-16">Soap Selection</h1>
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
