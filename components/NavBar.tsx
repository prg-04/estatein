"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Button, svgIconClasses } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isClick, setisClick] = useState(false);
  const toggle = (): void => {
    setisClick(!isClick);
  };
  const closeMenu = () => {
    setisClick(false);
  };
  return (
    <header className="flex justify-between items-center p-4 border-8 lg:px-20">
      <Link href="/">
        <div className="flex justify-between" onClick={closeMenu}>
          <Image src="/Symbol.svg" width={25} height={25} alt="Estatein logo" />
          <h2 className="text-white font-bold text-lg mx-1 m-0 max-w-[23ch] opacity-100">
            Estatein
          </h2>
        </div>
      </Link>

      <nav className="flex justify-between items-center gap-4  ">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="hover:border border-[#3b3a3ac5] p-2 rounded-lg hover:bg-[#121212]"
          >
            <Link
              href={link.path}
              className=" focus:text-fuchsia-600  hidden md:block p-0 m-0"
            >
              {link.name}{" "}
            </Link>
          </div>
        ))}
      </nav>

      <Link href="/contact" className="hidden md:block">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#171717" }}
          className="hover:bg-[#121212]"
        >
          Contact us
        </Button>
      </Link>

      <div className="md:hidden flex items-center border-2">
        <button
          className="flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
          onClick={toggle}
        >
          {isClick ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M-8 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isClick && (
        <div className="absolute top-0 left-0 flex justify-center mt-11 items-center gap-0 bg-black w-full border-4">
          <div className="flex flex-col">
            <nav className="flex-col gap-0 items-center">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="p-2 rounded-lg hover:border-slate-300 hover:bg-black items-center"
                >
                  <Link
                    href={link.path}
                    className=" focus:text-fuchsia-600 items-center"
                    onClick={closeMenu}
                  >
                    {link.name}{" "}
                  </Link>
                </div>
              ))}
            </nav>
            <Link href="/contact" className="block">
              <Button
                sx={{ backgroundColor: "#171717" }}
                className="hover:bg-[#121212]"
                onClick={closeMenu}
              >
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default NavBar;
