import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-between mx-8 my-8">
      <Link href="/">
        <div className="font-bold">SOAP SHAMAN</div>
      </Link>
      <div className="flex sm:hidden md:flex">
        <Link href="/about">
          <p className="text-lg mx-4">About</p>
        </Link>
        <p className="text-lg mx-4">Blog</p>
        <p className="text-lg mx-4">Home</p>

        {session ? (
          <Link href="/api/auth/signout">
            <p className="text-lg ml-4 font-bold">Log out</p>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <p className="text-lg ml-4 font-bold">Log in</p>
          </Link>
        )}
      </div>
      <div className="sm:flex md:hidden"></div>
    </div>
  );
};

export default Header;
