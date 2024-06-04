import { achievements } from "@/constants";
import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Achievements = () => {
  const { title, description, cards } = achievements;
  return (
    <section className="p-20">
      <div className="flex flex-col gap-10">
        <div key={title} className="flex flex-col gap-2 w-full">
          <Image src="/assets/stars.svg" alt="star" width={80} height={80} />
          <h1 className="heading-1">{title}</h1>
          <p className="sub-text">{description}</p>
        </div>

        <Stack direction="row" spacing={2}>
          {cards.map((card) => (
            <Box
              key={card.title}
              className="border-shadow w-[505px] p-4 rounded-lg"
            >
              <Typography variant="h5" className="text-white" gutterBottom>
                {card.title}
              </Typography>
              <Typography
                variant="body1"
                className="sub-text text-sm"
                gutterBottom
              >
                {card.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </div>
    </section>
  );
};

export default Achievements;
