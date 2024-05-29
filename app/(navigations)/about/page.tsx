"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { FaGlobe, FaBolt } from "react-icons/fa";
import Image from "next/image";
import { aboutHero, values, achievements, steps, companies } from "@/constants";
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? companies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === companies.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <div className="bg-black text-white py-16 px-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {aboutHero.map((int) => (
            <div key={int.title} className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">{int.title}</h2>
              <p className="mb-8">{int.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {int.wrap.map((int, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{int.number}</div>
                    <div>{int.text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/Image.png"
              alt="House Model"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 text-center">
            <h2 className="text-3xl font-bold mb-4 px-0">Our Values</h2>
            <p className="mb-8">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2   gap-2 md:w-2/3 border border-slate-300 lg:rounded-lg">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={value.icon}
                  alt={`${value.head} icon`}
                  width={12}
                  height={12}
                  className="mr-4 mt-0"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 mt-0">
                    {value.head}
                  </h3>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="px-0 text-3xl font-bold mb-4 m-0">
              Our Achievements
            </h2>
            <p className="text-lg w-3/4 p-2 items-center text-wrap">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-black p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="px-0 text-center text-3xl font-bold mb-8">
          Navigating the Estatein Experience
        </h1>
        <p className="text-center mb-12">
          At Estatein, We've designed a straightforward process to help you find
          and purchase your dream property with ease. Here's a step-by-step
          guide to how it all works.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-black p-3 rounded-lg text-white border"
            >
              <h2 className="text-xl font-semibold mb-4">{step.step}</h2>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-black text-white p-4">
        <h1 className="text-3xl font-bold mb-0">Our Valued Clients</h1>
        <p className="mb-8">
          At Estatain, we have had the privilege of working with a diverse range
          of clients across various industries. Here are some of the clients
          we've had the pleasure of serving:
        </p>
        <div className="space-y-0">
          <div className="bg-gray-900 p-2 rounded-lg">
            <div className="flex justify-between items-center mb-0">
              <div>
                <h2 className="text-2xl font-bold">
                  {companies[currentIndex].name}
                </h2>
                <p>Since {companies[currentIndex].since}</p>
              </div>
              <Link
                href={companies[currentIndex].website}
                className="bg-black hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Visit Website
              </Link>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <FaGlobe />
                <span>{companies[currentIndex].domain}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBolt />
                <span>{companies[currentIndex].category}</span>
              </div>
            </div>
            <p className="bg-black p-4 rounded-lg">
              {companies[currentIndex].quote}
            </p>
          </div>
          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
