import { heroContent } from "@/constants";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 border-0 rounded-lg">
        {heroContent.map((item) => (
          <div key={item.title} className="lg:text-left lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {item.title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              {item.description}
            </p>
            <div className="mt-6 sm:flex-row">
              <button className=" bg-[#262626] hover:bg-purple-500 text-white font-bold py-2 px-4 rounded mb-2 mr-4 sm:w-auto">
                Learn More
              </button>
              <button className=" bg-[#703BF7] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded sm:w-auto">
                Browse Properties
              </button>
            </div>
            <div className="flex flex-wrap sm:flex-grow justify-normal lg:justify-start sm:justify-start mt-2 mb-2 gap-2 sm:gap-2">
              {item.cards.map((item, idx) => (
                <div
                  key={idx}
                  className="lg:text-left bg-[#1A1A1A] p-0 rounded-md"
                >
                  <h2 className="text-2xl md:text-3xl font-bold p-2">
                    {item.number}
                  </h2>
                  <p className="md:text-nowrap p-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <Image
            src="/building.png"
            alt="Buildings"
            width={600}
            height={500}
            className="w-fit max-h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
