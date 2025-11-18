import Lenis from "@studio-freight/lenis";
import { StackCard, CardData } from "@/components/StackCard";
import card1 from "../assets/Images/Card1.png";
import card2 from "../assets/Images/Card2.png";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import HeroImage from "../assets/Images/HeroSection.png"
import Services from "../assets/Images/Frame 427321889.png"
import ServiceDesc from "../assets/Images/ServiceDescription.png"
import React, { useEffect } from "react";
import TestimonialSection from "@/components/TestimonialSection";  
import TestimonialFooter from "../assets/Images/Image.png"

const cards: CardData[] = [
  {
    id: 1,
    title: "RestroBrain",
    subtitle: "Increase Profit",
    description1:
      "RestroBrain brings all your restaurant data into one place -",
    description2:"POS, sales, inventory, supplier costs, menu performance. Get real-time insights to cut prime costs, fix leaks, and boost margins every day.",
    image: card1,
    backgroundColor: "#f4a4a4",
    button_content: "Know More",
  },
  {
    id: 2,
    title: "CaterReach",
    subtitle: "Increase Sales",
    description1:
      "CaterReach delivers high-intent B2B catering leads to your restaurant. ",
    description2:"Verified buyers from companies, events, and bulk orders create a predictable pipeline, matched to your capacity and cuisine for faster closures and steady revenue.",
    image: card2,
    backgroundColor: "#ffc9d4",
    button_content: "Know More",
  },
  
];

const Home = () => {
 
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Fade animation
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
    <div className="relative bg-background">

      {/* HERO SECTION */}
      <section
        className="
          w-full
          h-[927px]
          bg-[#E5D9FF]
          pt-32 md:pt-40
          px-4 md:px-6
          flex flex-col
          items-start
          justify-end
          text-left
          relative
          z-10
        "
      >
      
        <div
          className="
            absolute
            top-[148px] left-[72px]
            w-[1297px] h-[631px]
            flex
            items-start
            justify-start
            gap-[127px]
          "
        >
          
          <div className="w-[544px] h-[548px] opacity-100 rotate-0">
            <div className="w-[624px] h-[553px]">
              <div className="w-[624px] h-[476px]">

                
                <h1
                  className="
                    font-garnett font-normal
                    text-[96px]
                    leading-[120%]
                    tracking-[-2px]
                    text-black
                    w-[624px]
                    h-[345px]
                    opacity-100
                    rotate-0
                  "
                >
                  We grow Restaurants intelligently
                </h1>

               
                <p
                  className="
                    font-gotham font-light
                    text-[24px]
                    leading-[120%]
                    text-black
                    w-[534px]
                    h-[116px]
                    opacity-100
                    rotate-0
                  "
                >
                  AI-driven growth, analytics, and catering lead generation that
                  increase revenue, reduce prime costs, and expand margins — all
                  in one intelligent system.
                </p>
              </div>

              <div className="w-[430px] h-[42px] flex gap-[20px] items-center">

  {/* Button 1 — Outline Button */}
  <button
    className="
      w-[225px]
      h-[42px]
      rounded-[59.9px]
      border-[1.07px] border-black
      flex items-center justify-center
      transition duration-300
      hover:bg-black hover:text-white
      active:scale-95
    "
  >
    <span
      className="
        font-gotham font-medium
        text-[17.11px]
        leading-[19.25px]
        text-center
        w-[177px]
        h-[20px]
      "
    >
      How Kutlerri Works?
    </span>
  </button>

  {/* Button 2 — Filled Purple Button */}
  <button
    className="
      w-[197px]
      h-[42px]
      rounded-[59.9px]
      bg-[#7138F5]
      flex items-center justify-center
      transition duration-300
      hover:bg-black
      active:scale-95
    "
  >
    <span
      className="
        font-gotham font-medium
        text-[17.11px]
        leading-[19.25px]
        text-center
        w-[103px]
        h-[20px]
        text-white
      "
    >
      Get a Demo
    </span>
  </button>

</div>

            </div>
          </div>

          <div
            className="
              w-[626px]
              h-[631px]
              mr-0
              opacity-100
              rotate-0
              rounded-tl-[250px]
              rounded-br-[250px]
              rounded-bl-[250px]
              bg-white
              translate-x-[60px]
            "
          >
            <img className="
               w-[626px]
              h-[631px]
              mr-0
              opacity-100
              rotate-0
              rounded-tl-[250px]
              rounded-br-[250px]
              rounded-bl-[250px]
            " src={HeroImage} alt="" />
          </div>
        </div>
      </section>
   <div className="w-full flex justify-center px-6 md:px-20 mt-10">
  <h1
    className="
      font-garnett
      font-normal
      text-[64px] md:text-[96px]
      leading-[120%]
      tracking-[-2px]
      text-black
      break-words
      max-w-[943px]
      text-left
    "
  >
    Track. Predict. Profit.
  </h1>
</div>


      {/* STACKING CARDS */}
      <div className="relative ">
        {cards.map((card, index) => (
          <StackCard
            key={card.id}
            card={card}
            index={index}
            totalCards={cards.length}
          />
        ))}
      </div>
      {/* SERVICES */}
      <div className="-mt-[100px]">
        <img src={Services} alt="" />
        <div
  className="
    absolute
    w-[722px]
    h-[605.2567px]
    top-[2600.87px]
    left-[720px]
    opacity-100
    rotate-0
  "
>
 <img src={ServiceDesc} alt="" />
</div>

      </div>

      {/*Testimonial Section */}

      <section className="relative w-full bg-black flex flex-col items-center justify-center text-white mt-0 overflow-hidden ml-0 py-24 ">
        <TestimonialSection/>

        {/* CTA section unchanged */}
        <div className="w-full max-w-7xl px-8 md:px-20 flex flex-col md:flex-row justify-between items-center mt-24 gap-10">
          {/* CTA left */}
          <div className="w-full md:w-[526.98px] flex flex-col gap-6 text-left">
            <h2 className="font-onlygraphic font-normal text-[47.29px] leading-[120%] tracking-[-1.69px]">
              <span className="text-white">Let’s Talk:</span>
              <span className="text-gray-400">
                {" "}
                Build a Faster, Smarter Dining Experience
              </span>
            </h2>

            <div className="flex gap-4">
              <button className="bg-[#8A38F5] text-white px-6 py-3 rounded-full font-gotham text-sm hover:bg-[#5b2dd4] transition">
                Start Now
              </button>
              {/* <button className="border border-gray-400 text-gray-300 px-6 py-3 rounded-full font-gotham text-sm hover:border-white hover:text-white transition">
                Contact us
              </button> */}
            </div>
          </div>

          {/* CTA right */}
          <div className="w-full md:w-[500px] flex justify-center md:justify-end">
            <img
              src={TestimonialFooter}
              alt="Laptop mockup"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

