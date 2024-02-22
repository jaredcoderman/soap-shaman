import React from "react";
import Image from "next/image";
import { Product, UserProducts } from "@prisma/client";
import { useRouter } from "next/navigation";

type UserProductsWithProduct = UserProducts & {
  product: Product;
};

export type Props = {
  userProduct: UserProductsWithProduct;
};

const TableProduct: React.FC<Props> = (props) => {
  const { userProduct } = props;
  const product = userProduct.product;
  const router = useRouter();

  const removeProduct = async () => {
    try {
      const response = await fetch(`/api/users/products/${userProduct.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok)
        throw new Error(`${response.status} (${response.statusText})`);
      const responseBody = await response.json();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
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
      <td className="cursor-pointer" onClick={removeProduct}>
        x
      </td>
    </tr>
  );
};

export default TableProduct;
