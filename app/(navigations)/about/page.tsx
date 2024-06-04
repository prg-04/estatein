"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import {
  AboutHero,
  Achievements,
  Experience,
  Values,
} from "@/components/aboutComponents";

const About = () => {
  return (
    <div className="bg-[#141414]">
      <AboutHero />
      <Values />
      <Achievements />
      <Experience />
    </div>
  );
};

export default About;
