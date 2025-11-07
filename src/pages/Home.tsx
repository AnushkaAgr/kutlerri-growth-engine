import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Cards from "../components/Cards";
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
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* ---------------- Hero Section ---------------- */}
      <section
        className="
          gradient-hero 
          pt-32 md:pt-40 
          pb-0 md:pb-0
          px-4 md:px-6 
          text-center 
          flex flex-col 
          items-center 
          justify-end 
          min-h-[80vh] 
          md:min-h-[90vh]
          relative
          z-10
        "
      >
        <div className="flex flex-col items-center">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-2 md:mb-6">
            We Grow Restaurants <br className="hidden sm:block" /> Intelligently
          </h1>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="max-w-2xl md:max-w-3xl text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed px-2 font-gotham mb-4"
          >
            Welcome to{" "}
            <span className="text-[#7138F5] font-semibold font-gotham">
              Kutlerri
            </span>
            , the AI-powered analytics platform that turns your restaurant's
            data into actionable insights for higher margins and smarter
            decisions.
          </motion.div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              to="/contact"
              className="
                mt-8 md:mt-6
                mb-4 md:mb-5 
                w-[85%] sm:w-auto px-10 py-3
                rounded-full 
                border-2 border-[#7138F5] 
                text-black font-semibold 
                text-base sm:text-lg md:text-xl 
                whitespace-nowrap 
                flex items-center justify-center 
                hover:bg-[#7138F5] hover:text-white 
                transition duration-300 ease-in-out 
                active:bg-[#7138F5]
                relative z-20
              "
            >
              CONTACT&nbsp;US
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Curved Lines Section ---------------- */}
      <section
        className="
          relative 
          z-0 
          mt-[-20px] sm:mt-[-30px] md:mt-[-40px]  
          mb-[-20px] sm:mb-[-30px] md:mb-[-40px]  
        "
      >
        <CurvedLinesSection />
      </section>

      {/* ---------------- Cards Section ---------------- */}
      <section className="relative z-10 m-0 p-0">
        <Cards  />
      </section>
    </div>
  );
};

export default Home;
