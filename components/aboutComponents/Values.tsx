import Image from "next/image";
import React from "react";
import { values } from "../../constants/index";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

interface Card {
  icon: string;
  head: string;
  text: string;
}

interface Values {
  title: string;
  description: string;
  cards: Card[];
}

const Values = () => {
  const { title, description, cards }: Values = values;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#161616" : "#161616",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
    border: "none",
    borderBottom: "1px solid #202020",
  }));

  return (
    <section className="p-20">
      <div className="flex justify-between gap-10 items-center">
        <div key={title} className="flex flex-col gap-2 w-1/3">
          <Image src="/assets/stars.svg" alt="star" width={80} height={80} />
          <h1 className="heading-1">{title}</h1>
          <p className="sub-text">{description}</p>
        </div>

        <Grid
          container
          rowSpacing={1}
          // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="w-2/3 border-shadow rounded-lg p-10"
        >
          {cards.map((card, idx) => (
            <Grid key={card.head} xs={6} className="">
              <Paper
                elevation={0}
                sx={{}}
                className={`bg-transparent ${
                  idx === 0 || idx === 1 ? "border-b rounded-none" : ""
                }  h-full py-4 px-4`}
              >
                <div
                  className={`flex flex-col gap-4 h-full p-1 ${
                    idx === 0 || idx === 2 ? "border-r" : ""
                  }`}
                >
                  <div className="flex gap-6 items-center text-white">
                    <Image src={card.icon} alt="icon" width={50} height={50} />
                    <h1 className="heading-2 text-xl">{card.head}</h1>
                  </div>
                  <p className="sub-text text-[0.9rem]">{card.text}</p>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Values;
