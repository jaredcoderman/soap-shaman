import React from "react";
import Image from "next/image";

const TableProduct = () => {
  return (
    <tr>
      <td className="flex">
        <Image
          className="mt-6"
          src={`/purple-bow.jpg`}
          width="100"
          height="100"
          alt="purple with bow"
        />
        <div className="mt-6 ml-20">
          <p className="font-medium">Purple Essence</p>
          <p className="mt-2 text-sm">This is the description for it</p>
        </div>
      </td>
      <td>$29.99</td>
      <td>1</td>
      <td>$29.99</td>
    </tr>
  );
};

export default TableProduct;
