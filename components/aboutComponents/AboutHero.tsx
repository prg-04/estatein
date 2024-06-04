import { aboutHero } from "@/constants";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="p-20">
      <div className="flex justify-between gap-4">
        {aboutHero.map((content) => {
          const { title, description, wrap } = content;
          return (
            <div
              key="content.title"
              className="w-1/2 flex flex-col gap-6 justify-between "
            >
              <div className="flex flex-col gap-2 ">
                <Image
                  src="/assets/stars.svg"
                  alt="star"
                  width={80}
                  height={80}
                />
                <h1 className="heading-1">{content.title}</h1>
                <p className="sub-text">{content.description}</p>
              </div>

              <Stack direction="row" spacing={1}>
                {wrap.map((item) => (
                  <div
                    key={item.text}
                    className="bg-dark-gray-bg px-4 py-3 max-w-full w-[239px] flex flex-nowrap flex-col flex-auto rounded-xl"
                  >
                    <h4 className="count-up-num">{item.number}</h4>
                    <p className="count-up-text">{item.text}</p>
                  </div>
                ))}
              </Stack>
            </div>
          );
        })}
        <div className="flex justify-center items-center h-full w-1/2 abstract_image">
          <Image
            src="/assets/aboutImage.png"
            alt="hero"
            width={550}
            height={550}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
