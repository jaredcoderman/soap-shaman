import Link from "next/link";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Hamburger from "./Hamburger";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between mx-8 my-8">
      <Link href="/">
        <div className="font-bold">SOAP SHAMANS</div>
      </Link>
      <div className="">
        <Link href="/about">
          <p className="hidden lg:inline text-lg mx-4">About</p>
        </Link>
        <Link href="/products">
          <p className="hidden lg:inline text-lg mx-4">Products</p>
        </Link>
        <p className="hidden lg:inline text-lg mx-4">Home</p>

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
      </div>
    </div>
  );
};

export default Header;
