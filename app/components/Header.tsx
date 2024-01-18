import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between mx-8 my-8">
      <Link href="/">
        <div className="font-bold">SOAP SHAMAN</div>
      </Link>
      <div className="flex">
        <Link href="/about">
          <p className="text-lg mx-4">About</p>
        </Link>
        <p className="text-lg mx-4">Blog</p>
        <p className="text-lg mx-4">Home</p>
        <Link href="/api/auth/signin">
          <p className="text-lg ml-4 font-bold">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
