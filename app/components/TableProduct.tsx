import React from "react";
import Image from "next/image";
import { Product, UserProducts } from "@prisma/client";

type UserProductsWithProduct = UserProducts & {
  product: Product;
};

export type Props = {
  userProduct: UserProductsWithProduct;
};

const TableProduct: React.FC<Props> = (props) => {
  const { userProduct } = props;
  const product = userProduct.product;

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
    </tr>
  );
};

export default TableProduct;
