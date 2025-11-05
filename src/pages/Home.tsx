import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import PillarsSection from "../components/PillarsSection";
import VectorArrow from "../assets/Svg/Vector.svg";
import CurvedLinesSection from "../components/CurvedLinesSection";

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* ---------------- Hero Section ---------------- */}
      <section
  className="
    gradient-hero 
    pt-32 md:pt-40 
    pb-8 md:pb-12   
    px-4 md:px-6 
    text-center 
    flex flex-col 
    items-center 
    justify-end 
    min-h-[80vh] 
    md:min-h-[90vh]
  "
>
  <div className="flex flex-col items-center mb-[-40px]"> 
    <h1 className="text-black text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
      We Grow Restaurants <br className="hidden sm:block" /> Intelligently
    </h1>

    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="max-w-2xl md:max-w-3xl text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed px-2 font-gotham"
    >
      Welcome to{" "}
      <span className="text-[#7138F5] font-semibold font-gotham">Kutlerri</span>, the
      AI-powered analytics platform that turns your restaurant's data into
      actionable insights for higher margins and smarter decisions.
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link
        to="/contact"
        className="
          mt-8 md:mt-10 
          w-[85%] sm:w-auto px-10 py-3
          rounded-full 
          border-2 border-[#7138F5] 
          text-black font-semibold 
          text-base sm:text-lg md:text-xl 
          whitespace-nowrap 
          flex items-center justify-center 
          hover:bg-[#7138F5] hover:text-white 
          transition duration-300 ease-in-out 
          active:bg-[#ff6f59]
        "
      >
        CONTACT&nbsp;US
      </Link>
    </motion.div>
  </div>

 
  <div className="mt-[-40px] sm:mt-[-60px]">
    <CurvedLinesSection />
  </div>
</section>

      

      {/* ---------------- Pillars Section ---------------- */}
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
            {[
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
            ].map((card, index) => (
              <Card
                key={index}
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
                      hover:bg-[#2A2A2A] hover:border-[#7138F5] hover:shadow-lg hover:shadow-[#7138F540]


                "
              >
                <CardContent className="p-8 md:p-10 flex flex-col flex-grow text-center items-center">
                  <h3 className="text-white font-onlygraphic font-bold text-[38px] sm:text-[44px] md:text-[52px] leading-[90%] mb-4">
                    {card.title}
                  </h3>
                  <p className="font-gotham text-[15px] leading-[150%] text-[#7138F5] mb-3">
                    {card.subtitle}
                  </p>
                  <p className="font-gotham text-[15px] leading-[150%] text-[#7F7F7F] max-w-[280px] md:max-w-[300px]">
                    {card.desc}
                  </p>
                </CardContent>
                <div className="flex justify-center pb-0 md:pb-0">
                  <img
                    src={VectorArrow}
                    alt="vector arrow"
                    className="w-[160px] sm:w-[190px] md:w-[220px] h-auto "
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
