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
          border-0 shadow-md
          ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
      >

        {/* TEXT SIDE */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 md:px-14 py-10 md:py-12 order-1 md:order-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="w-full max-w-[600px] text-left"
          >
            <h2 className="font-garnett font-normal text-[34px] sm:text-[48px] md:text-[60px] leading-[110%] tracking-tight text-black">
              {card.title}
            </h2>

            {card.subtitle && (
              <p className="font-garnett font-normal text-[20px] sm:text-[26px] md:text-[32px] text-black mt-1">
                {card.subtitle}
              </p>
            )}

            <p className="mt-4 sm:mt-6 md:mt-8 font-gotham text-[15px] sm:text-[17px] md:text-[18px] leading-[150%] tracking-[-0.3px] text-[#4D455C]">
              {card.description1}{" "}
              <span
                className="font-gotham font-[350]"
                dangerouslySetInnerHTML={{
                  __html: highlightKeywords(card.description2),
                }}
              ></span>
            </p>

            {card.button_content && (
              <motion.button
                onClick={() => {
                  let targetId = "";

                  if (
                    card.title === "RestroBrain" &&
                    card.button_content === "Know More"
                  ) {
                    targetId = "restrobrain-section";
                  }

                  if (
                    card.title === "CaterReach" &&
                    card.button_content === "Know More"
                  ) {
                    targetId = "caterreach-section";
                  }

                  if (targetId) {
                    const target = document.getElementById(targetId);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  mt-8 sm:mt-10 md:mt-12
                  bg-[#9F7CEF] text-white font-gotham font-medium
                  text-[14px] sm:text-[16px] md:text-[17px]
                  px-8 py-3 rounded-full shadow-md
                  transition-all duration-300 hover:bg-[#5b2dd4] hover:shadow-lg
                  w-fit
                "
              >
                {card.button_content}
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* IMAGE SIDE */}
        <div
          className={`
            w-full md:w-1/2 flex items-center justify-center
            p-6 md:p-0 order-2 md:order-none
            ${
              index % 2 === 1
                ? "bg-gradient-to-br from-[#EEE6FF] to-[#C1A6FF] md:rounded-bl-[40px]"
                : "bg-gradient-to-tl from-[#EEE6FF] to-[#C1A6FF] md:rounded-tr-[40px]"
            }
            rounded-b-[40px] md:rounded-none
          `}
        >
          <img
            src={card.image}
            alt={card.title}
            className="
              w-[80%] sm:w-[70%] md:w-[584px]
              h-auto object-contain
              transition-transform duration-700 hover:scale-[1.05]
              mx-auto
            "
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
