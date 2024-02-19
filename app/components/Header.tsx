import Link from "next/link";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Hamburger from "./Hamburger";
import ShoppingBag from "./ShoppingBag";
import CartLabel from "./CartLabel";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="flex justify-between px-8 py-8">
        <Link href="/">
          <div className="font-bold">SOAP SHAMANS</div>
        </Link>
        <div className="flex">
          <Link href="/">
            <p className="hidden lg:inline text-lg mx-4">Home</p>
          </Link>
          <Link href="/products">
            <p className="hidden lg:inline text-lg mx-4">Products</p>
          </Link>
          <Link href="/about">
            <p className="hidden lg:inline text-lg mx-4">About</p>
          </Link>
          {session ? (
            <Link href="/api/auth/signout">
              <p className="hidden lg:inline text-lg ml-4 font-bold">Log out</p>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <p className="hidden lg:inline text-lg ml-4 font-bold">Log in</p>
            </Link>
          )}
          <Hamburger session={session} />
          <ShoppingBag />
          <CartLabel />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
