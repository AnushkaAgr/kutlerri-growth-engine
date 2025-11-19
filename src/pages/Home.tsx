import Lenis from "@studio-freight/lenis";
import { StackCard, CardData } from "@/components/StackCard";
import card1 from "../assets/Images/Card1.png";
import card2 from "../assets/Images/Card2.png";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import HeroImage from "../assets/Images/HeroSectionImage.png"
import Services from "../assets/Images/Frame 427321889.png"
import React, { useEffect } from "react";
import TestimonialSection from "@/components/TestimonialSection";  

import restrobrainData from "../assets/data/Frame-427321905.json";
import caterreachData from "../assets/data/Frame-427321953 (2).json";
import Lottie from "lottie-react";
import Fork from "../assets/Images/Elements/Fork.png"
import Spoon from "../assets/Images/Elements/Spoon.png"
import Knife from "../assets/Images/Elements/Knife.png"


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
  id="hero-section"
  className="
    w-full
    min-h-[900px]
    bg-[#E5D9FF]
    pt-32 md:pt-35
    px-6 md:px-16 lg:px-24
    flex
    items-center
    justify-between
    relative
    overflow-hidden
  "
>

  {/* LEFT CONTENT */}
  <div className="flex flex-col items-start max-w-[600px] z-10 -ml-4 md:-ml-10 lg:-ml-9.5">

    <h1
      className="
        font-garnett font-normal
        text-[64px] md:text-[96px]
        leading-[107%]
        tracking-[-2px]
        text-black
      "
    >
      We Grow Restaurants Intelligently
    </h1>

    <p
      className="
        font-gotham font-light
        text-[20px] md:text-[24px]
        leading-[120%]
        text-black
        mt-6
      "
    >
      Boosts sales, improves margins, cuts prime costs, and brings steady B2B catering leads, all in one platform.
    </p>

    {/* BUTTONS */}
    <div className="mt-10 flex gap-4">
      <button
        className="
          w-[225px] h-[42px]
          rounded-full
          border border-black
          font-gotham font-medium
          hover:bg-black hover:text-white
          transition
        "
      >
        Discover Kutlerri
      </button>

      <button
        className="
          w-[197px] h-[42px]
          rounded-full
          bg-[#7138F5]
          text-white
          font-gotham font-medium
          hover:bg-black
          transition
        "
      >
        Get a Demo
      </button>
    </div>
  </div>

  <div className="absolute right-0 top-0 h-full flex items-end pointer-events-none">
    <img
      src={HeroImage}
      alt=""
      className="
        h-[80%]
        md:h-[95%]
        lg:h-[95%]
        object-contain
        max-w-none
      "
    />
  </div>

</section>


   <div className="w-full flex justify-center px-6 md:px-20 mt-10">
  <h1
    className="
      font-garnett
      font-normal
      text-[62px] md:text-[96px]
      leading-[120%]
      tracking-[-2px]
      text-black
      break-words
      max-w-[1000px]
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
     
{/* RESTROBRAIN SECTION */}
<section className="w-full bg-white pt-24 pb-40 flex justify-center" id="restrobrain-section">
  <div className="max-w-[1440px] w-full px-6 md:px-12 flex flex-col items-center">

    {/* HEADING — SINGLE LINE ALWAYS */}
    <h2
      className="
        font-garnett font-normal
        text-[44px] md:text-[56px]
        leading-[100%]
        tracking-[-3%]
        text-black
        whitespace-nowrap
        mb-20
      "
    >
      RestroBrain – 
      <span className="text-[#9F7CEF]"> Your Restaurant Intelligence Layer</span>
    </h2>

    {/* LOTTIE ANIMATION */}
    <div
      className="
        w-[883px]
        h-[514px]
        flex justify-center items-center
        overflow-hidden
        rounded-xl
      "
    >
      <div className="scale-[1.15]">
        <Lottie animationData={restrobrainData} loop autoplay />
      </div>
    </div>

    {/* INFO BLOCKS */}
    <div
      className="
        w-[1098px]
        h-[112px]
        flex justify-between items-center
        mt-10
      "
    >

      {/* BLOCK 1 */}
      <div className="w-[310px] h-[112px] flex items-center gap-[24px]">
        <div className="w-[40px] h-[72px] flex items-center">
          <img src={Fork} alt="fork" className="h-full object-contain" />
        </div>
        <p className="text-black font-garnett font-normal text-[18px] leading-[100%] tracking-[-3%]">
          See all your data in one place and fix margin leaks before they grow.
        </p>
      </div>

      {/* BLOCK 2 */}
      <div className="w-[310px] h-[112px] flex items-center gap-[24px]">
        <div className="w-[40px] h-[72px] flex items-center">
          <img src={Spoon} alt="spoon" className="h-[91px] object-contain" />
        </div>
        <p className="text-black font-garnett font-normal text-[18px] leading-[100%] tracking-[-3%]">
          Get clear insights on sales, inventory, and menu performance to reduce prime costs.
        </p>
      </div>

      {/* BLOCK 3 */}
      <div className="w-[310px] h-[112px] flex items-center gap-[24px]">
        <div className="w-[40px] h-[72px] flex items-center">
          <img src={Knife} alt="knife" className="h-full object-contain" />
        </div>
        <p className="text-black font-garnett font-normal text-[18px] leading-[100%] tracking-[-3%]">
          Predict demand and plan smarter to avoid stock outs, wastage, and lost revenue.
        </p>
      </div>

    </div>

  </div>
      </section>
      
      {/* CaterReach*/}
      <section className="w-full bg-white pt-20 pb-40 flex justify-center" id="caterreach-section">
  <div className="max-w-[1440px] w-full px-6 md:px-12 flex flex-col items-center">

    
    <h2
      className="
        font-garnett font-normal
        text-[44px] md:text-[56px]
        leading-[100%]
        tracking-[-3%]
        text-black
        whitespace-nowrap
        mb-10
      "
    >
      CaterReach-
      <span className="text-[#9F7CEF]">Your Catering Revenue Engine</span>
    </h2>

    {/* LOTTIE ANIMATION */}
    <div
      className="
        w-[883px]
        h-[514px]
        flex justify-center items-center
        overflow-hidden
        rounded-xl
      "
    >
      <div className="scale-[1.15]">
        <Lottie animationData={caterreachData} loop autoplay />
      </div>
    </div>

    {/* INFO BLOCKS */}
    <div
      className="
        w-[1098px]
        h-[112px]
        flex justify-between items-center
        mt-8
      "
    >

      {/* BLOCK 1 */}
      <div className="w-[310px] h-[112px] flex items-center gap-[24px]">
        <div className="w-[40px] h-[72px] flex items-center">
          <img src={Fork} alt="fork" className="h-full object-contain" />
        </div>
        <p className="text-black font-garnett font-normal text-[18px] leading-[100%] tracking-[-3%]">
          Get verified B2B catering leads that match your capacity and cuisine.
        </p>
      </div>

      {/* BLOCK 2 */}
      <div className="w-[310px] h-[112px] flex items-center gap-[24px]">
        <div className="w-[40px] h-[72px] flex items-center">
          <img src={Spoon} alt="spoon" className="h-[91px] object-contain" />
        </div>
        <p className="text-black font-garnett font-normal text-[18px] leading-[100%] tracking-[-3%]">
          Reduce dependency on aggregators by building your own steady bulk order pipeline.

        </p>
      </div>

      {/* BLOCK 3 */}
      <div className="w-[310px] h-[112px] flex items-center gap-[24px]">
        <div className="w-[40px] h-[72px] flex items-center">
          <img src={Knife} alt="knife" className="h-full object-contain" />
        </div>
        <p className="text-black font-garnett font-normal text-[18px] leading-[100%] tracking-[-3%]">
          Close orders faster with pre-qualified leads + communication support.
        </p>
      </div>

    </div>

  </div>
      </section>


{/* SERVICES */}
<div className="-mt-[100px] w-full h-[750px] relative overflow-hidden">

  {/* Background Image (Zoomed Out) */}
 <img
  src={Services}
  alt="Services"
  className="
    absolute inset-0
    w-full h-full
    object-cover
    object-center
    m-0 p-0
    z-0
    scale-100   /* ensure no zoom out */
  "
/>

  {/* LEFT CONTENT */}
  <div className="absolute left-[80px] top-[250px] z-20 text-white max-w-[639px]">
    <h1 className="font-garnett text-[84.46px] leading-[110%] font-light">
      Fully Managed <br /> Services
    </h1>

    <p className="font-gotham text-[24px] mt-9 leading-[150%] text-white-500">
      Kutlerri is more than a platform.  
      We become an extension of your team.
    </p>
  </div>

  {/* RIGHT CONTENT */}
  <div className="absolute right-[120px] top-[230px] z-20 text-white flex flex-col gap-10">

    {/* Item 1 */}
    <div className="flex items-start gap-4">
      <img src={Spoon} alt="" className="w-[21px] h-[70px]" />
      <p className="text-[34.42px] font-garnett leading-tight">
        Restaurant <br /> Intelligence
      </p>
    </div>

    {/* Item 2 */}
    <div className="flex items-center gap-4">
  <img src={Knife} alt="" className="w-[10px] h-[70px]" />
  
  <p className="text-[34.42px] font-garnett leading-tight">
    B2B Catering <br /> Lead Generation
  </p>
</div>


  </div>
</div>





      {/*Testimonial Section */}

    <section className="relative w-full bg-[#EEE6FF] flex flex-col items-center justify-center text-black mt-0 overflow-hidden ml-0 py-10">
  <TestimonialSection />

  
</section>


    </div>
  );
};

export default Home;

