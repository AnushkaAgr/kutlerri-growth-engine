import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Slide from "@mui/material/Slide";
import { useInView } from "react-intersection-observer";
import VectorArrow from "../assets/Svg/Vector.svg";

const PillarsSection = () => {
  const cards = [
    {
      title: "Boost Retention",
      subtitle: "Loyalty Intelligence",
      desc: "Understand customer patterns and drive repeat orders with personalized engagement insights.",
    },
    {
      title: "Increase Revenue",
      subtitle: "Catering Lead Gen",
      desc: "AI-powered B2B catering lead generation finds and converts corporate buyers in your delivery zone.",
    },
    {
      title: "Optimize Costs",
      subtitle: "Smart Spend Analysis",
      desc: "Track supplier efficiency, reduce waste, and improve profit margins through AI-powered analytics.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 lg:px-12 bg-background">
      <div className="container mx-auto flex flex-col items-center">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-10 
            lg:gap-12 
            xl:gap-16
            place-items-center
          "
        >
          {cards.map((card, index) => {
            const [ref, inView] = useInView({
              threshold: 0.2,
              triggerOnce: false, // replays on scroll up/down
            });

            return (
              <Slide
                key={index}
                direction="up"
                in={inView}
                mountOnEnter
                unmountOnExit
                style={{
                  transitionDelay: inView ? `${index * 200}ms` : "0ms",
                }}
              >
                <div ref={ref}>
                  <Card
                    className="
                      w-full 
                      max-w-[380px] 
                      rounded-[15.64px] 
                      border-2 border-border 
                      bg-[#1C1C1C]
                      flex flex-col 
                      justify-between 
                      h-full
                      transition-all duration-300 ease-in-out 
                      hover:bg-[#2A2A2A] hover:border-[#FF5940] hover:shadow-lg hover:shadow-[#FF594040]
                    "
                  >
                    <CardContent className="p-8 md:p-10 flex flex-col flex-grow text-center items-center">
                      <h3 className="text-white font-onlygraphic font-bold text-[38px] sm:text-[44px] md:text-[52px] leading-[90%] mb-4">
                        {card.title}
                      </h3>
                      <p className="font-gotham text-[15px] leading-[150%] text-[#FF5940] mb-3 text-left w-full">
                        {card.subtitle}
                      </p>
                      <p className="font-gotham text-[15px] leading-[150%] text-[#7F7F7F] max-w-[280px] md:max-w-[300px] text-left w-full">
                        {card.desc}
                      </p>
                    </CardContent>
                    <div className="flex justify-center pb-0 md:pb-0">
                      <img
                        src={VectorArrow}
                        alt="vector arrow"
                        className="w-[160px] sm:w-[190px] md:w-[220px] h-auto"
                      />
                    </div>
                  </Card>
                </div>
              </Slide>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
