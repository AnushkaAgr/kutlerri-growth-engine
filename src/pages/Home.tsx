import Lenis from "@studio-freight/lenis";
import { StackCard, CardData } from "@/components/StackCard";
import card1 from "../assets/Images/RestroBrain_kutlerri.png";
import card2 from "../assets/Images/CaterReach_kutlerri.png";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import HeroImage from "../assets/Images/HeroSectionImage.png"
import React, { useEffect } from "react";
import TestimonialSection from "@/components/TestimonialSection";  
import restrobrainData from "../assets/data/RestroBrain11.json";
import caterreachData from "../assets/data/CaterReach (2).json";
import fullyManagedServices from "../assets/data/managedService.json";
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
    min-h-screen
    bg-[#E5D9FF]
    pt-24 md:pt-32 lg:pt-36
    px-6 sm:px-10 md:px-16 lg:px-24
    flex flex-col lg:flex-row
    items-center
    justify-between
    relative
    overflow-hidden
  "
>
  {/* LEFT CONTENT */}
  <div
    className="
      flex flex-col
      items-start
      z-10
      max-w-full sm:max-w-[600px]
      text-center lg:text-left
      lg:-ml-6
    "
  >
    <h1
      className="
        font-garnett font-normal
        text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px]
        leading-[110%]
        tracking-tight
        text-black
      "
    >
      We Grow Restaurants Intelligently
    </h1>

    <p
      className="
        font-gotham font-light
        text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]
        leading-relaxed
        text-black
        mt-4 sm:mt-6
      "
    >
      Boosts sales, improves margins, cuts prime costs, and brings steady B2B
      catering leads - all in one platform.
    </p>

    {/* BUTTONS */}
    <div
      className="
        mt-8 sm:mt-10
        flex flex-col sm:flex-row
        gap-4 sm:gap-5
        w-full sm:w-auto
        justify-center lg:justify-start
      "
    >
      <button
        className="
          w-full sm:w-[225px] h-[42px]
          rounded-full
          border border-black
          font-gotham font-medium
          hover:bg-black hover:text-white
          transition-all duration-300
        "
      >
        Discover Kutlerri
      </button>

      <button
        className="
          w-full sm:w-[197px] h-[42px]
          rounded-full
          bg-[#7138F5]
          text-white
          font-gotham font-medium
          hover:bg-black
          transition-all duration-300
        "
      >
        Get a Demo
      </button>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div
    className="
      mt-10 lg:mt-0
      w-full lg:w-auto
      flex justify-center lg:justify-end
      relative
    "
  >
    <img
      src={HeroImage}
      alt="Kutlerri Platform"
      className="
        w-[85%] sm:w-[70%] md:w-[60%] lg:w-auto
        max-h-[550px] lg:max-h-[750px]
        object-contain
        z-0
      "
    />
  </div>
</section>



 <div
  className="
    w-full
    flex
    justify-center
    px-6 sm:px-10 md:px-20
    mt-10 md:mt-16
    text-center md:text-left
  "
>
  <h1
    className="
      font-garnett font-normal
      text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px]
      leading-[110%]
      tracking-tight
      text-black
      break-words
      max-w-[1000px]
      mb-2
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
<section
  id="restrobrain-section"
  className="w-full bg-white pt-6 sm:pt-10 md:pt-20 pb-6 sm:pb-12 md:pb-28 flex justify-center"
>
  <div className="max-w-[1440px] w-full px-4 sm:px-8 md:px-12 flex flex-col items-center text-center md:text-left">

    {/* HEADING */}
    <h2
      className="
        font-garnett font-normal
        text-[24px] sm:text-[34px] md:text-[56px]
        leading-tight tracking-tight text-black
        mb-4 sm:mb-8 text-center
      "
    >
      RestroBrain – 
      <span className="text-[#9F7CEF]"> Your Restaurant Intelligence Layer</span>
    </h2>

  {/* LOTTIE ANIMATION */}
<div
  className="
    w-full max-w-[1000px] sm:max-w-[1100px] md:max-w-[1200px] lg:max-w-[1300px]
    xl:max-w-[1400px] 2xl:max-w-[1500px]
    h-[35vh] sm:h-[55vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh]
    flex justify-center items-center
    overflow-visible mx-auto
  "
>
  <div className="scale-[0.95] sm:scale-[1.05] md:scale-[1.15] lg:scale-[1.25] xl:scale-[1.3] w-full flex justify-center items-center">
    <Lottie animationData={restrobrainData} loop autoplay style={{ width: "100%", height: "100%" }} />
  </div>
</div>


    {/* INFO BLOCKS */}
    <div
      className="
        w-full max-w-[1000px]
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-10 md:mt-14
      "
    >
      {/* BLOCK 1 */}
      <div className="flex items-center gap-3 sm:gap-4 text-left group">
        <img src={Fork} alt="fork" className="h-[55px] sm:h-[65px] md:h-[80px] transition-transform duration-300 group-hover:scale-105" />
        <p className="text-black font-garnett text-[15px] sm:text-[17px] md:text-[18px] leading-snug">
          See all your data in one place and fix margin leaks before they grow.
        </p>
      </div>

      {/* BLOCK 2 */}
      <div className="flex items-center gap-3 sm:gap-4 text-left group">
        <img src={Spoon} alt="spoon" className="h-[50px] sm:h-[60px] md:h-[75px] transition-transform duration-300 group-hover:scale-105" />
        <p className="text-black font-garnett text-[15px] sm:text-[17px] md:text-[18px] leading-snug">
          Get clear insights on sales, inventory, and menu performance to reduce prime costs.
        </p>
      </div>

      {/* BLOCK 3 */}
      <div className="flex items-center gap-3 sm:gap-4 text-left group">
        <img src={Knife} alt="knife" className="h-[55px] sm:h-[65px] md:h-[80px] transition-transform duration-300 group-hover:scale-105" />
        <p className="text-black font-garnett text-[15px] sm:text-[17px] md:text-[18px] leading-snug">
          Predict demand and plan smarter to avoid stockouts, wastage, and lost revenue.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CATERREACH SECTION */}
<section
  id="caterreach-section"
  className="w-full bg-white pt-6 sm:pt-10 md:pt-20 pb-6 sm:pb-12 md:pb-28 flex justify-center"
>
  <div className="max-w-[1440px] w-full px-4 sm:px-8 md:px-12 flex flex-col items-center text-center md:text-left">

    {/* HEADING */}
    <h2
      className="
        font-garnett font-normal
        text-[24px] sm:text-[34px] md:text-[56px]
        leading-tight tracking-tight text-black
        mb-4 sm:mb-8 text-center
      "
    >
      CaterReach – 
      <span className="text-[#9F7CEF]"> Your Catering Revenue Engine</span>
    </h2>

    {/* LOTTIE ANIMATION */}
    <div
      className="
        w-full max-w-[1000px]
        h-[35vh] sm:h-[55vh] md:h-[90vh]
        flex justify-center items-center
        overflow-visible mx-auto
      "
    >
      <div className="scale-[0.9] sm:scale-[1.05] md:scale-[1.2] w-full flex justify-center items-center">
        <Lottie animationData={caterreachData} loop autoplay style={{ width: '100%', height: '100%' }} />
      </div>
    </div>

    {/* INFO BLOCKS */}
    <div
      className="
        w-full max-w-[1000px]
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-10 md:mt-14
      "
    >
      {/* BLOCK 1 */}
      <div className="flex items-center gap-3 sm:gap-4 text-left group">
        <img src={Fork} alt="fork" className="h-[55px] sm:h-[65px] md:h-[80px] transition-transform duration-300 group-hover:scale-105" />
        <p className="text-black font-garnett text-[15px] sm:text-[17px] md:text-[18px] leading-snug">
          Get verified B2B catering leads that match your capacity and cuisine.
        </p>
      </div>

      {/* BLOCK 2 */}
      <div className="flex items-center gap-3 sm:gap-4 text-left group">
        <img src={Spoon} alt="spoon" className="h-[50px] sm:h-[60px] md:h-[75px] transition-transform duration-300 group-hover:scale-105" />
        <p className="text-black font-garnett text-[15px] sm:text-[17px] md:text-[18px] leading-snug">
          Reduce dependency on aggregators by building your own steady bulk order pipeline.
        </p>
      </div>

      {/* BLOCK 3 */}
      <div className="flex items-center gap-3 sm:gap-4 text-left group">
        <img src={Knife} alt="knife" className="h-[55px] sm:h-[65px] md:h-[80px] transition-transform duration-300 group-hover:scale-105" />
        <p className="text-black font-garnett text-[15px] sm:text-[17px] md:text-[18px] leading-snug">
          Close orders faster with pre-qualified leads + communication support.
        </p>
      </div>
    </div>
  </div>
</section>



      { /* Fully Managed
Services*/}    
<section className="relative w-[calc(100%-2.5rem)] mx-5 flex justify-center items-end bg-gradient-to-r from-[#EEE6FF] to-[#9F7CEF] rounded-[30px] md:rounded-[43px] mt-10 mb-10 overflow-hidden">
  <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-end justify-between gap-10 md:gap-16 pl-6 pr-0 md:px-10">

    {/* LEFT TEXT CONTENT */}
    <div className="flex flex-col text-center md:text-left max-w-[600px] z-20 pt-16 pb-10 md:pb-14 md:pt-20">
      <h2 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-['Garnett'] font-normal leading-[110%] tracking-[-0.6px] text-black">
        Fully Managed <br className="hidden md:block" /> Services
      </h2>
      <p className="text-[15px] sm:text-[17px] md:text-[20px] mt-4 text-black/70">
        Kutlerri is more than a platform. We become an extension of your team.
      </p>
    </div>

    {/* RIGHT SIDE — JSON ANIMATION */}
    <div className="absolute bottom-0 right-0 w-full md:w-[60%] lg:w-[55%] flex justify-end items-end">
      <div
        className="
          w-[100%] sm:w-[500px] md:w-[600px] lg:w-[680px] xl:w-[750px]
          relative
        "
        style={{
          transformOrigin: "bottom right",
        }}
      >
        <Lottie
          animationData={fullyManagedServices}
          loop
          autoplay
          className="rounded-xl object-contain"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            marginBottom: "0",
            
            clipPath:
              window.innerWidth >= 1024
                ? "inset(0 30% 0 0)" 
                : "inset(0 0 0 0)", 
            transform:
              window.innerWidth >= 1024
                ? "scale(1.3) translateX(175px)"
                : "scale(1) translateX(0px)",
          }}
        />
      </div>
    </div>

  </div>
</section>







{/* SERVICES */}
      {/* {<section
        id="services-section"
        className="
    relative
    w-full
    min-h-[750px]
    md:min-h-[850px]
    flex
    items-center
    justify-center
    overflow-hidden
    bg-black
  "
      >
      
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
    "
        />

   
        <div
          className="
      absolute inset-0
      bg-gradient-to-r from-black/60 via-black/40 to-transparent
      z-10
    "
        />

    
        <div
          className="
      relative z-20
      w-full
      max-w-[1440px]
      flex flex-col md:flex-row
      justify-between
      items-start
      px-6 sm:px-10 md:px-16 lg:px-24
      py-20 md:py-32
      text-white
      gap-12 md:gap-0
    "
        >
         
          <div className="flex-1 max-w-[600px] text-left">
            <h1
              className="
          font-garnett font-light
          text-[40px] sm:text-[56px] md:text-[72px] lg:text-[84px]
          leading-[110%]
          mb-6
        "
            >
              Fully Managed <br /> Services
            </h1>
            <p
              className="
          font-gotham font-light
          text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]
          leading-[150%]
          text-white/90
          max-w-[500px]
        "
            >
              Kutlerri is more than a platform.
              We become an extension of your team.
            </p>
          </div>

          <div
            className="
        flex-1
        flex flex-col
        gap-8 sm:gap-10
        items-start md:items-end
        md:text-right
      "
          >
           
            <div className="flex items-start gap-4 sm:gap-6">
              <img
                src={Spoon}
                alt="spoon"
                className="w-[18px] sm:w-[20px] md:w-[22px] lg:w-[24px] h-auto"
              />
              <p
                className="
            text-[22px] sm:text-[26px] md:text-[32px] lg:text-[34px]
            font-garnett
            leading-tight
          "
              >
                Restaurant <br /> Intelligence
              </p>
            </div>

           
            <div className="flex items-start gap-4 sm:gap-6">
              <img
                src={Knife}
                alt="knife"
                className="w-[10px] sm:w-[12px] md:w-[14px] lg:w-[16px] h-auto"
              />
              <p
                className="
            text-[22px] sm:text-[26px] md:text-[32px] lg:text-[34px]
            font-garnett
            leading-tight
          "
              >
                B2B Catering <br /> Lead Generation
              </p>
            </div>
          </div>
        </div>
      </section> } */}





{/* TESTIMONIAL SECTION */}
<section
  id="testimonial-section"
  className="
    relative
    w-full
    bg-[#EEE6FF]
    flex
    flex-col
    items-center
    justify-center
    text-black
    overflow-hidden
    py-12 sm:py-16 md:py-20
    px-6 sm:px-10 md:px-16
  "
>

  <div
    className="
      absolute inset-0
      bg-gradient-to-b from-[#EEE6FF] via-[#F4EEFF] to-[#EEE6FF]
      opacity-70
      pointer-events-none
      z-0
    "
  />

  {/* Main Testimonial Component */}
  <div className="relative z-10 w-full max-w-[1440px]">
    <TestimonialSection />
  </div>
</section>


    </div>
  );
};

export default Home;

