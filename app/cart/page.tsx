"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TableProduct from "../components/TableProduct";
import { useRouter } from "next/navigation";

const Page = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/users/products", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!response.ok)
        throw new Error(`${response.status} (${response.statusText})`);
      const responseBody = await response.json();
      setProducts(responseBody.userCart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const tableProducts = products.map((product, index) => {
    return <TableProduct userProduct={product} key={index} />;
  });

  return (
    <div className="pb-32">
      <h1 className="mx-20 py-16 text-left text-sm font-light">YOUR BAG</h1>
      <div className="mx-20  grid grid-cols-3 gap-12">
        <table className="col-span-2  pr-10 table-fixed ">
          <tbody>
            <tr className="border-gray-200 border-b-2">
              <th className="text-left font-medium text-black">PRODUCT</th>
              <th className="text-left font-medium text-black">PRICE</th>
              <th className="text-left font-medium text-black">QUANTITY</th>
              <th className="text-left font-medium text-black">TOTAL</th>
            </tr>
            {tableProducts}
          </tbody>
        </table>
        <div className="col-span-1  px-8 py-8">
          <h1 className="font-medium text-3xl">Order Summary</h1>
          <hr className="my-2" />
          <div className="grid grid-cols-4 ">
            <h2 className="col-span-3 mt-3">Subtotal</h2>
            <p className="mt-3">$89.97</p>
            <h2 className="col-span-3 mt-3">Estimated tax</h2>
            <p className="mt-3">---</p>
            <h2 className="col-span-3 mt-3">Estimated shipping</h2>
            <p className="mt-3">$10.00</p>
            <h1 className="col-span-3 mt-3">Total</h1>
            <p className="mt-3">$99.97</p>
          </div>
          <h1 className="col-span-4 mt-28 cursor-pointer w-1/2 mx-auto text-center bg-blue-500 py-4 text-white">
            Checkout
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
