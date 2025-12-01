import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
  companyLogo: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rohan Malhotra",
    role: "Owner, FlavourBridge Kitchens",
    text: "Working with Starbucks-level volume made our insights indispensable. We cut food waste by 19% in the first month.",
    image: "https://i.pravatar.cc/80?img=15",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/2560px-Starbucks_Corporation_Logo_2011.svg.png",
  },
  {
    name: "Emily Carter",
    role: "Operations Manager, FreshPlate Foods",
    text: "Our forecasting accuracy jumped dramatically. Prep planning, staff scheduling, and inventory ordering became effortless.",
    image: "https://i.pravatar.cc/80?img=23",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chick-fil-A_Logo.svg/2560px-Chick-fil-A_Logo.svg.png",
  },
  {
    name: "Meera Natarajan",
    role: "Head of Ops, The Curry Kitchen",
    text: "The dashboards are incredibly clear. Our team finally understands real-time sales, wastage, prep, and labour insights.",
    image: "https://i.pravatar.cc/80?img=47",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2560px-McDonald%27s_Golden_Arches.svg.png",
  },
];

const containerVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  // Show 2 testimonials at once on large screens
  const cards = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="w-full bg-[#EEE6FF] py-16 md:py-20 px-5 sm:px-8 md:px-10 flex flex-col items-center rounded-[30px] my-10 mx-5">
      <h2 className="font-['Garnett'] text-[28px] sm:text-[34px] md:text-[40px] text-black mb-10 sm:mb-14 tracking-tight text-center">
        What Our Partners Say
      </h2>

      <div className="relative w-full max-w-7xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={containerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col lg:flex-row gap-8 sm:gap-10 justify-center items-center"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="w-full sm:w-[420px] md:w-[450px] bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl text-center border border-[#F2ECFF]"
              >
                {/* Company Logo */}
                <img
                  src={card.companyLogo}
                  className="h-8 sm:h-10 mb-6 sm:mb-8 mx-auto object-contain"
                  alt="company logo"
                />

                <div className="text-[#D7C4FF] text-4xl sm:text-5xl leading-none mb-4 sm:mb-6">“</div>

                {/* Testimonial Text */}
                <p className="text-[#4D455C] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6 sm:mb-10">
                  {card.text}
                </p>

                {/* Person Info */}
                <img
                  src={card.image}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border mb-3 mx-auto"
                  alt={card.name}
                />

                <p className="font-semibold text-[#3E3446] text-[15px] sm:text-lg">
                  {card.name}
                </p>
                <p className="text-sm text-[#7A6E85]">{card.role}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 
                     bg-white/60 backdrop-blur-md 
                     text-[#7138F5] p-2 sm:p-3 rounded-full 
                     border border-[#7138F5]/30 
                     shadow-md hover:bg-white/80 transition hidden sm:block"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 
                     bg-white/60 backdrop-blur-md 
                     text-[#7138F5] p-2 sm:p-3 rounded-full 
                     border border-[#7138F5]/30 
                     shadow-md hover:bg-white/80 transition hidden sm:block"
        >
          →
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 mt-8 sm:mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              i === index ? "bg-[#7138F5]" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
