"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className="bg-gradient-to-r from-orange-300 via-yellow-500 to-amber-600 
 border-amber-500 border-2"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
        <Link rel="stylesheet" href="/">
          <Image src={"/logo.svg"} width={50} height={50} alt={"logo"} />
        </Link>
        
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className={`text-black transition hover:text-amber-700 ${
                    pathname === "/" ? "text-orange-500" : ""
                  }`}
                  href="/"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>

              <li>
                <a
                  className={`text-black transition hover:text-amber-700 ${
                    pathname === "/about" ? "text-orange-500" : ""
                  }`}
                  href="/about"
                >
                  {" "}
                  About Us{" "}
                </a>
              </li>

              <li>
                <a
                  className={`text-black transition hover:text-amber-700 ${
                    pathname === "/products" ? "text-orange-500" : ""
                  }`}
                  href="/products"
                >
                  {" "}
                  Products{" "}
                </a>
              </li>

              <li>
                <a
                  className={`text-black transition hover:text-amber-700 ${
                    pathname === "/explore" ? "text-orange-500" : ""
                  }`}
                  href="/explore"
                >
                  {" "}
                  Explore{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-[#DF6D14] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#FFA725]"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-[#DF6D14] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#FFA725] sm:block hover:text-white"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-orange-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
