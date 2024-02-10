import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section
      className="bg-cover bg-center relative py-32"
      style={{ backgroundImage: 'url("./yellow-bow.jpeg")' }}
    >
      <div className="md:grid grid-cols-2 lg:grid-cols-3 mx-4 md:m-auto md:ml-40 ">
        <div className=" bg-white pb-12 px-12">
          <h1 className="pt-12 text-5xl">100% Pure Handmade Soap</h1>
          <p className="text-lg mt-8 font-light">
            Our range of high-quality soaps have been hand-crafted.
          </p>
          <Link href="/products">
            <p className=" bg-black text-white cursor-pointer  px-6 py-4 mt-4 w-fit text-lg font-light">
              Shop Now
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
