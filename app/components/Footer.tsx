import React from "react";

const Footer = () => {
  return (
    <div className="pb-14 bg-black text-white">
      <div className="pt-14 w-3/4 gap-20 grid grid-cols-3 mx-auto justify-items-center ">
        <div className=" col-span-3 md:col-span-2">
          <h1 className="text-xl text-center md:text-left">
            Join the Mailing List
          </h1>
          <p className="mt-6 font-light text-center md:text-left px-6 md:px-0">
            Subscribe to our newsletter and receive 10% off on your first order.
          </p>
          <div className="mt-8 grid grid-cols-10">
            <h2 className="hidden md:flex font-light py-4 pl-4 col-span-6 border-1 border-white">
              jared@jheadwebconsulting.com
            </h2>
            <h2 className="col-span-10 text-center py-4 md:px-2 mx-auto md:mx-0 px-28 md:col-span-2 border-1 border-white font-light cursor-pointer">
              Subscribe
            </h2>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 gap-12 grid grid-cols-2">
          <div className="">
            <h1 className="text-bold text-lg">The Small Print</h1>
            <p className="underline mt-10">
              <a href="#">Delivery</a>
            </p>
            <p className="underline mt-4">
              <a href="#">Returns</a>
            </p>
            <p className="underline mt-4">
              <a href="#">FAQ</a>
            </p>
          </div>
          <div>
            <h1 className="text-bold text-lg">Social Media</h1>
            <p className="underline mt-10">
              <a href="#">Facebook</a>
            </p>
            <p className="underline mt-4">
              <a href="#">Instagram</a>
            </p>
            <p className="underline mt-4">
              <a href="#">Pinterest</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
