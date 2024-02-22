"use client";
import React from "react";
import Image from "next/image";
import { UserProducts, Product } from "@prisma/client";

export type UserProductsWithProduct = UserProducts & {
  product: Product;
};

export type Props = {
  userProduct: UserProductsWithProduct;
  removeProduct: (productId: string) => void;
};

const TableProduct: React.FC<Props> = (props) => {
  const { userProduct, removeProduct } = props;
  const product = userProduct.product;

  const handleRemoveProduct = () => {
    removeProduct(userProduct.id);
  };

  return (
    <tr>
      <td className="flex">
        <Image
          className="mt-6"
          src={product.imageURL}
          width="100"
          height="100"
          alt={product.description}
        />
        <div className="mt-6 ml-20">
          <p className="font-medium">{product.name}</p>
          <p className="mt-2 text-sm">{product.description}</p>
        </div>
      </td>
      <td>$29.99</td>
      <td>1</td>
      <td>$29.99</td>
      <td className="cursor-pointer" onClick={handleRemoveProduct}>
        x
      </td>
    </tr>
  );
};

export default TableProduct;
