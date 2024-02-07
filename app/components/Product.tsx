import React from "react";

const Product = () => {
  return (
    <div>
      <div className="grid gap-16 grid-cols-1 md:grid-cols-2 w-3/4 m-auto mt-16 pb-16">
        <div className="col-span-2 md:col-span-1">
          <img
            src={"../other-portrait.jpg"}
            className="img-size flex-0 basis-2/3"
          ></img>
        </div>
        <div>
          <h2 className="text-4xl">Pure Herbal Soap</h2>
          <p className="mt-8">Rose Petal Extract, 5 ml</p>
          <p className="text-2xl mt-10 font-light">$129.00</p>
          <p className="mt-4 px-6 py-4 bg-black text-white w-fit text-xl font-light">
            Buy Now
          </p>
          <h2 className="mt-12 font-bold text-lg">Description</h2>
          <p className="mt-8">
            A soft, floral scent to calm the body and mind.
          </p>
          <h2 className="mt-8 font-bold text-lg">Shipping</h2>
          <p className="mt-8">
            We ship our products worldwide, with a flat shipping rate.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Product;
