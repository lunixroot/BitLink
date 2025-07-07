import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 h-12 items-center bg-purple-400">
      <div>
        <Link href={`/`} className=" text-2xl font-bold">
            BitLink
        </Link>
      </div>
      <ul className="flex gap-4">
        <Link href={`/`}>
          <li className="hover:text-white hover:scale-105 transform transition duration-300">
            Home
          </li>
        </Link>
        <Link href={`/about`}>
          <li className="hover:text-white hover:scale-105 transform transition duration-300">
            About
          </li>
        </Link>
        <Link href={`/shorten`}>
          <li className="hover:text-white hover:scale-105 transform transition duration-300">
            Shortner
          </li>
        </Link>
        <Link href={`/contact`}>
          <li className="hover:text-white hover:scale-105 transform transition duration-300">
            Contact us
          </li>
        </Link>
          <button className="hover:text-white hover:scale-105 transform transition duration-300 hover:cursor-pointer">
            <a target="_blank" href="https://github.com/lunixroot">Github</a>
          </button>
      </ul>
    </nav>
  );
};

export default Navbar;
