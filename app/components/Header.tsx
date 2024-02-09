import Link from "next/link";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Hamburger from "./Hamburger";

const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex justify-between mx-8 my-8">
      <Link href="/">
        <div className="font-bold">SOAP SHAMANS</div>
      </Link>
      <div className="hidden lg:flex">
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
      <Hamburger session={session} />
    </div>
  );
};

export default Header;
