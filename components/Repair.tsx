"use client";
import { navLinks } from "@/constants";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Repair = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between items-center py-2 px-6 lg:px-20 relative">
      <Link href="/" className="relative z-50">
        <div className="flex justify-between gap-2">
          <Image src="/Symbol.svg" alt="" width={30} height={30} />
          <Typography variant="h1" sx={{fontSize: "28px" }} className="">
            EstateIn
          </Typography>
        </div>
      </Link>

      <nav className="flex justify-between gap-4">
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
        <Button variant="contained" sx={{ backgroundColor: "#171717" }}>
          contact
        </Button>
      </Link>

      <div className="md:hidden">
        <div className={`${isOpen ? "hidden" : "block"}`} onClick={handleClick}>
          <HiOutlineMenuAlt3 className="text-3xl" />
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} relative z-50`}
          onClick={handleClose}
        >
          <IoClose className="text-3xl" />
        </div>
      </div>

      <nav
        className={`border-4 absolute z-40 top-0 left-0 h-screen w-full bg-[#121212] flex  ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div className="h-[70%] w-[90%] mt-10 flex flex-col  justify-center gap-6 pl-6">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="border-b rounded-b-none border-b-[#a3a3a3] p-2 rounded-lg hover:bg-[#121212] w-full "
            >
              <Link
                href={link.path}
                className=" focus:text-fuchsia-600  md:block p-0 m-0 text-2xl"
              >
                {link.name}{" "}
              </Link>
            </div>
          ))}
          <div className="border-b rounded-b-none border-b-[#a3a3a3] py-2 rounded-lg hover:bg-[#121212] w-full ">
            <Link
              href="/contact"
              className="focus:text-fuchsia-600  md:block p-0 m-0 text-2xl pl-2"
            >
              contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Repair;
