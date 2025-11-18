import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Images/Logo/Frame 68.png";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sahil Rahman",
    role: "Co Founder at RASA",
    text: "Thanks to Kutlerri, we’ve gained about 3% pts on our prime costs, which goes straight to the bottom line in terms of improving our group profitability.",
    image: "https://i.pravatar.cc/700?img=12",
  },
  {
    name: "Emily Jones",
    role: "Design Head @ Nova",
    text: "Kutlerri helped us reduce waste and optimize menus — our margins improved within weeks and operations are smoother.",
    image: "https://i.pravatar.cc/700?img=5",
  },
  {
    name: "Liam Patel",
    role: "Marketing Manager @ Vista",
    text: "The platform is intuitive and the data-driven recommendations helped increase high-value orders from corporate clients.",
    image: "https://i.pravatar.cc/700?img=2",
  },
  {
    name: "Sophia Lee",
    role: "Operations @ CloudChef",
    text: "Real-time insights gave us the confidence to renegotiate supplier contracts and cut prime costs substantially.",
    image: "https://i.pravatar.cc/700?img=9",
  },
];

const SlideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "absolute" as const,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    position: "absolute" as const,
  }),
};

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const last = testimonials.length - 1;

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i === last ? 0 : i + 1));
  }, [last]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? last : i - 1));
  }, [last]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section className="relative w-full bg-black flex flex-col items-center justify-center text-white py-5 overflow-hidden">
      <div className="text-left w-full max-w-7xl px-6 md:px-20 mb-10">
        <h2 className="font-onlygraphic text-[36px] text-white leading-[150%] mb-2">
          Testimonials
        </h2>
        <p className="opacity-70 font-gotham text-[16px] tracking-[-0.13px]">
          Real stories from teams transforming workflow with Kutlerri
        </p>
      </div>

      <div className="relative w-full max-w-7xl px-6 md:px-20">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur transition hidden md:inline-flex"
        >
          ←
        </button>

        <div className="relative w-full flex justify-center">
          <div className="w-full">
            <div className="relative w-full min-h-[589px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={SlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col md:flex-row items-center gap-10 md:gap-12"
                >
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-[624px] h-[589px] object-cover rounded-2xl shadow-lg"
                  />

                  <div className="flex-1 mt-8 md:mt-0 max-w-[624px]">
                    <img src={Logo} alt="Kutlerri" className="h-7 mb-6" />

                    <blockquote className="font-inter font-medium text-4xl leading-[120%] tracking-[-1.5px] max-w-[624px]">
                      “{testimonials[index].text}”
                    </blockquote>

                    <p className="mt-6 font-semibold text-lg max-w-[624px]">
                      {testimonials[index].name}
                    </p>
                    <p className="text-gray-400 text-sm mt-1 max-w-[624px]">
                      {testimonials[index].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur transition hidden md:inline-flex"
        >
          →
        </button>

        <div className="flex items-center justify-center gap-6 mt-8 md:hidden">
          <button
            onClick={prev}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
          >
            ←
          </button>
          <button
            onClick={next}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
          >
            →
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
