import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface CardData {
  id: number;
  title: string;
  subtitle?: string;
  description1: string;
  description2: string;
  image: string;
  backgroundColor: string;
  button_content: string;
}

interface StackCardProps {
  card: CardData;
  index: number;
  totalCards: number;
}

export const StackCard = ({ card, index, totalCards }: StackCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const topOffset = 100 - (totalCards - index - 1) * 25;


  const highlightKeywords = (text: string) => {
    const keywords = ["CaterReach", "RestroBrain"];
    let modified = text;

    keywords.forEach((word) => {
      const regex = new RegExp(word, "gi");
      modified = modified.replace(
        regex,
        `<span class='text-[#7138F5] font-medium'>${word}</span>`
      );
    });

    return modified;
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, top: `${topOffset}px` }}
      className="sticky h-screen w-full flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1],
          delay: 0.1,
        }}
        viewport={{ once: true }}
        className={`relative w-full h-auto md:h-[650px]
          rounded-[40px] overflow-hidden
          flex flex-col md:flex-row
          border-[0px] border-white shadow-lg
          ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* LEFT — Gradient Side */}
        <div
          className="
            w-full md:w-1/2 
            h-[300px] sm:h-[400px] md:h-[650px]
            flex-shrink-0 
            flex items-center justify-center
            bg-[#0E0519]
          "
        >
          <img
            src={card.image}
            alt={card.title}
            className="
              w-full h-full 
              object-cover
              transition-all duration-700 ease-out
            "
          />
        </div>

        {/* RIGHT — White Content */}
        <div className="w-full md:w-1/2 bg-white flex items-start justify-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              w-[553px]
              h-auto
              mt-[77px]
              ml-[84px]
              flex flex-col
              text-left
            "
          >
            {/* HEADING */}
            <h2
              className="
                font-garnett font-normal
                text-[84.46px]
                leading-[101%]
                tracking-[-0.66px]
              "
            >
              {card.title}
            </h2>

            {/* SUBTITLE */}
            {card.subtitle && (
              <p
                className="
                  font-garnett font-normal
                  text-[40px]
                  leading-[101%]
                  tracking-[-0.66px]
                  mt-[10px]
                "
              >
                {card.subtitle}
              </p>
            )}

            {/* DESCRIPTION PARAGRAPH */}
            <p
              className="
                mt-[70px]
                font-gotham font-bold
                text-[22.46px]
                leading-[112%]
                tracking-[-0.66px]
                text-[#7F7F7F]
              "
            >
              {card.description1}{" "}
              <span
                className="
                  font-gotham font-[325]
                  text-[22.46px]
                  leading-[112%]
                  tracking-[-0.66px]
                "
                dangerouslySetInnerHTML={{
                  __html: highlightKeywords(card.description2),
                }}
              ></span>
            </p>

            {/* BUTTON */}
            {card.button_content && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  bg-[#9F7CEF]
                  text-white
                  font-gotham font-medium
                  text-[17px]
                  leading-[19.25px]
                  px-6 py-3
                  rounded-[67.28px]
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-[#5b2dd4]
                  hover:shadow-lg
                  mt-[70px]
                "
                style={{
                  width: "221.279px",
                  height: "47.176px",
                }}
              >
                {card.button_content}
              </motion.button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
