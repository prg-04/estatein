import Image from "next/image";
import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { experience } from "@/constants";
import { Typography } from "@mui/material";

const Experience = () => {
  const { title, description, cards } = experience;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <section className="p-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 w-full">
          <Image src="/assets/stars.svg" alt="star" width={80} height={80} />
          <h1 className="heading-1">{title}</h1>
          <p className="sub-text">{description}</p>
        </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cards.map((card, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Paper elevation={1} sx={{}} className="bg-transparent h-[329px]">
                <Box
                  key={card.title}
                  className="border-4 rounded-lg bg-gradient-to-r from-[#703BF7] via-[#703BF7] to-[#703BF7/0]"
                >
                  <div className="border-[#703bf7]">
                    <Typography variant="body1" sx={{}} className="text-white">
                      {card.step}
                    </Typography>
                  </div>
                  <div className="gradient-card p-4">
                    <Typography
                      variant="h5"
                      className="text-white"
                      gutterBottom
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="sub-text text-sm"
                      gutterBottom
                    >
                      {card.description}
                    </Typography>
                  </div>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Experience;
