import { aboutHero } from "@/constants";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="border-8 p-20">
      <div className="flex justify-between">
        {aboutHero.map((content) => {
          const { title, description, wrap } = content;
          return (
            <div
              key="content.title"
              className="w-1/2 flex flex-col gap-8 justify-between "
            >
              <div className="flex flex-col gap-6">
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
        <div className="flex justify-center items-center h-full w-1/2">
          <Image
            src="/assets/aboutImage.png"
            alt="hero"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
