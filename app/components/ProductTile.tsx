"use client";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Props = {
  path: string;
  alt: string;
};

const ProductTile: React.FC<Props> = (props) => {
  const { path, alt } = props;

  const addToBag = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: (${response.statusText})`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mx-auto pb-20 col-span-4 md:col-span-2">
      <Image src={path} width="250" height="250" alt={alt}></Image>
      <p className="mt-4 text-lg font-medium">{alt}</p>
      <p className="mt-2">$29.99</p>
      <p
        onClick={addToBag}
        className="cursor-pointer mt-4 px-6 py-4 hover:bg-black hover:text-white border-black border-2 w-fit text-xl font-light"
      >
        Add to Bag
      </p>
    </div>
  );
};

export default ProductTile;
