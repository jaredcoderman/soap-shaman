"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";

export type Props = {
  session: Session | null;
};

const Hamburger: React.FC<Props> = (props) => {
  const { session } = props;
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Function to close the menu, can be called on link click
  const closeMenu = () => setOpen(false);

  return (
    <div className="cursor-pointer">
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
        <div
          ref={menuRef}
          className="absolute pr-40 pl-4 z-20 right-5 bg-white border-1 border-black "
        >
          {/* Wrap each Link component with a div or button that calls closeMenu onClick */}
          <div onClick={closeMenu}>
            <Link href="/">
              <p className="text-lg py-8 mx-4">Home</p>
            </Link>
          </div>
          <div onClick={closeMenu}>
            <Link href="/about">
              <p className="text-left pb-8 text-lg mx-4">About</p>
            </Link>
          </div>

          <div onClick={closeMenu}>
            <Link href="/products">
              <p className="text-lg pb-8 mx-4">Products</p>
            </Link>
          </div>
          {session ? (
            <div onClick={closeMenu}>
              <Link href="/api/auth/signout">
                <p className="text-lg ml-4 pb-8 font-bold">Log out</p>
              </Link>
            </div>
          ) : (
            <div onClick={closeMenu}>
              <Link href="/api/auth/signin">
                <p className="text-lg ml-4 pb-8 font-bold">Log in</p>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
