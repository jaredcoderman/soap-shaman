"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";

export type Props = {
  session: Session | null;
};

const Hamburger: React.FC<Props> = (props) => {
  const { session } = props;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="flex lg:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Image
          alt="hamburger button icon"
          src="/hamburger.png"
          width={40}
          height={40}
        ></Image>
      </div>
      {open && (
        <div className="absolute pr-12 z-20 right-5 bg-white rounded border-1 border-black ">
          <Link href="/about">
            <p className="text-left py-1 text-lg mx-4">About</p>
          </Link>
          <Link href="/blog">
            <p className="text-lg pb-1  mx-4">Blog</p>
          </Link>
          <Link href="/products">
            <p className="text-lg pb-1 mx-4">Products</p>
          </Link>
          {session ? (
            <Link href="/api/auth/signout">
              <p className="text-lg ml-4 pb-1 font-bold">Log out</p>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <p className="text-lg ml-4 pb-1 font-bold">Log in</p>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
