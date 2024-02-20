"use client";
import React from "react";
import Image from "next/image";
import TableProduct from "../components/TableProduct";

const Page = () => {
  return (
    <div className="mx-16 py-16">
      <h1 className="text-left text-2xl font-medium mb-20">Shopping Cart</h1>
      <div className="grid grid-cols-3 gap-12">
        <table className="col-span-2  pr-10 table-fixed ">
          <tbody>
            <tr className="border-gray-200 border-b-2">
              <th className="text-left text-gray-400">PRODUCT</th>
              <th className="text-left text-gray-400">PRICE</th>
              <th className="text-left text-gray-400">QUANTITY</th>
              <th className="text-left text-gray-400">TOTAL</th>
            </tr>
            <TableProduct />
            <TableProduct />
            <TableProduct />
          </tbody>
        </table>
        <div className="col-span-1 bg-gray-100 px-8 py-8">
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
          <h1 className="col-span-4 mt-28 cursor-pointer w-1/2 mx-auto text-center bg-blue-500 py-4 text-white rounded-md">
            Checkout
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
