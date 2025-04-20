"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";


const Header = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  })

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لتحديد ما إذا كانت القائمة مفتوحة أم لا

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // تغيير حالة القائمة عند الضغط
  };
  
  const {user} = useUser();
  return !isLoggedIn && (
    <header className="bg-gradient-to-tl from-blue-950 via-gray-500 to-indigo-300">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src={"/logo.svg"} width={100} height={100} style={{width:'auto', height:'auto'}} alt={"logo"} priority={true} />
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
                  Home
                </a>
              </li>

              <li>
                <a
                  className={`text-black transition hover:text-amber-700 ${
                    pathname === "/about" ? "text-orange-500" : ""
                  }`}
                  href="/about"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  className={`text-black transition hover:text-amber-700 ${
                    pathname === "/products" ? "text-orange-500" : ""
                  }`}
                  href="/products"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  className={`text-black transition hover:text-amber-700 ${
                    pathname === "/explore" ? "text-orange-500" : ""
                  }`}
                  href="/explore"
                >
                  Explore
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">

          {!user? 
            <div className="sm:flex sm:gap-4">
               
              <a
                className="block rounded-md bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#FFA725]"
                href="/sign-in"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#FFA725] sm:block hover:text-white"
                href="#"
              >
                Register
              </a>
            </div>
             :
             <div className="flex items-center gap-5">
              <h2 className="flex text-white gap-1 cursor-pointer hover:text-teal-400"><ShoppingCart />(0)</h2>
              <UserButton afterSignOutUrl="/" />
             </div>
             }

            {/* Mobile menu toggle button */}
            <button
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-orange-600/75 md:hidden"
              onClick={toggleMenu}
            >
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

      {isMenuOpen && (
        <nav className="md:hidden bg-orange-300 border-t border-amber-500">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm">
            <li>
              <Link
                className="text-black transition hover:text-amber-700"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition hover:text-amber-700"
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition hover:text-amber-700"
                href="/products"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition hover:text-amber-700"
                href="/explore"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
