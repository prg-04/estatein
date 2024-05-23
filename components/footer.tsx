"use client";

import React from "react";
import Image from "next/image";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Twitter,
  YouTube,
  ArrowOutward as ArrowOutwardIcon,
} from "@mui/icons-material";
import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-white-300 py-10 mt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">
              Start Your Real Estate Journey Today
            </h2>
            <p className="mb-8">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <div className="flex md:max-lg:w-1/3 items-center justify-around gap-4">
            <Button className="bg-[#703BF7] text-white py-4 px-4 rounded-lg justify-center gap-4">
              Explore Properties
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap md:max-sm:flex-col-2 grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex">
              <Link href="/">
                <Image
                  src="/Symbol.svg"
                  width={25}
                  height={25}
                  alt="Estatein logo"
                />
                <h2 className="text-white font-bold text-lg mx-1 m-0 opacity-100">
                  Estatein
                </h2>
              </Link>
            </div>
            <div className="flex flex-grow mt-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-black text-white p-2 flex-1 rounded-l-lg"
                value=""
                required
              />
              <IconButton
                sx={{
                  backgroundColor: "purple.500",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "purple.700",
                  },
                }}
                type="submit"
              >
                <ArrowOutwardIcon />
              </IconButton>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-start lg:gap-2">
            {footerLinks.map((section, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-fit">
                <h4 className="font-bold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.path}
                        className="text-gray-400 hover:text-white hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          flexDirection={{ xs: "column", lg: "row" }}
        >
          <Typography variant="body2">
            &copy;2023 Estatein. All Rights Reserved.
          </Typography>
          <Box
            display="flex"
            mt={{ xs: 2, lg: 0 }}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="inherit" component="a" href="#">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" component="a" href="#">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" component="a" href="#">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" component="a" href="#">
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
