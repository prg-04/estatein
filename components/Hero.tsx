"use client";
import { heroContent, heroGridContent } from "@/constants";
import {
  Button,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { HiArrowUpRight } from "react-icons/hi2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#171717" : "#171717",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Hero = () => {
  //   const { cards } = heroContent;
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <section className="px-2 lg:px-20">
      <div className="py-16 flex flex-col gap-6  border-red-500">
        <div className="text-image-cont flex flex-col-reverse lg:flex-row justify-between border-cyan-500">
          <div className="content w-full lg:w-3/5">
            {heroContent.map((content) => (
              <div
                key={content.title}
                className=" h-full lg:pr-10 flex justify-between flex-col gap-4 pt-10 lg:pt-0"
              >
                <div className="flex flex-col gap-4 p-2 h-4/5">
                  <Typography
                    sx={{
                      fontSize: { xs: "28px", md: "60px" },
                      fontWeight: "semibold",
                      lineHeight: "120%",
                    }}
                    className=""
                    variant="h1"
                  >
                    {content.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                    className=""
                    variant="body1"
                  >
                    {content.description}
                  </Typography>

                  <div className="flex gap-4 items-center mt-8">
                    <Button
                      variant="outlined"
                      sx={{
                        padding: "0.5rem",
                        textTransform: "capitalize",
                        borderColor: "#171717",
                        color: "#d3d3d3",
                      }}
                    >
                      Learn more
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#703BF7",
                        padding: "0.5rem",
                        textTransform: "capitalize",
                      }}
                    >
                      Browse properties
                    </Button>
                  </div>
                </div>

                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                  className=" h-1/5 "
                >
                  {content.cards.map((card, idx) => (
                    <div
                      key={card.text}
                      className="flex h-28 justify-center items-center flex-col min-w-[155px] flex-1  border border-neutral-700 rounded-xl bg-[#171717] px-2"
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "24px", md: "36px" },
                          fontWeight: "700",
                          lineHeight: "150%",
                        }}
                        className=""
                      >
                        <CountUp duration={1} delay={2} end={card.number} />
                        {idx === 0 || idx === 2 ? "+" : ""}
                        {idx === 1 ? "k" : ""}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "14px", md: "18px" },
                          fontWeight: "500",
                          lineHeight: "150%",
                        }}
                        className=""
                      >
                        {card.text}
                      </Typography>
                    </div>
                  ))}
                </Stack>
              </div>
            ))}
          </div>
          <div className="image w-full h-[50vh]  lg:w-2/5 lg:h-full">
            <img
              src="/Container.png"
              alt="building"
              className="w-full h-full object-cover !relative"
            />
          </div>
        </div>
        <Grid container spacing={2}>
          {heroGridContent.map((content) => (
            <Grid xs={6} md={3} key={content.text}>
              <Item className="flex flex-col justify-center items-center gap-2 relative">
                <img src={content.icon} alt={content.text} className="" />
                <Typography variant="body2" sx={{ color: "#f3f3f3" }}>
                  {content.text}
                </Typography>

                <HiArrowUpRight className="absolute top-2 right-2 text-3xl text-neutral-700" />
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Hero;
