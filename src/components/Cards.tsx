import React from "react";

export default function Cards() {
  const cardData = [
    {
      title: "Increase Margins",
      subtitle: "First-Party Order Conversion",
      description:
        "Smart automation migrates third-party delivery orders to your first-party channels using incentives and loyalty flows.",
    },
    {
      title: "Boost Retention",
      subtitle: "Loyalty Intelligence",
      description:
        "Understand customer patterns and drive repeat orders with personalized engagement insights.",
    },
    {
      title: "Optimize Costs",
      subtitle: "Smart Spend Analysis",
      description:
        "Track supplier efficiency, reduce waste, and improve profit margins through AI-powered analytics.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full m-0 p-0 ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`relative w-full h-auto md:h-[525.82px] 
            rounded-[40px] overflow-hidden
            
            bg-[linear-gradient(250.95deg,_#1A003C_37.16%,_#0E0519_99.04%)]
            flex flex-col md:flex-row
            
            ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}
          `}
        >
          {/* Gradient Half */}
          <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[525.05px] flex-shrink-0"></div>

          {/* White Half */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-8 md:py-0">
            <div className="w-[90%] md:w-[491.77px] flex flex-col gap-[10px] md:gap-[4.7px] text-center md:text-left">
              {/* Title */}
              <div
                className="text-black font-onlygraphic font-normal
                  text-[36px] sm:text-[48px] md:text-[75.19px]
                  leading-[90%] tracking-[-0.59px]
                  flex items-center justify-center md:justify-start"
              >
                {card.title}
              </div>

              {/* Subtitle */}
              <div
                className="text-[#8A38F5] font-gotham font-medium
                  text-[15px] sm:text-[17px] md:text-[18.8px]
                  leading-[150%] tracking-[-0.35px]"
              >
                {card.subtitle}
              </div>

              {/* Description */}
              <div
                className="text-[#7F7F7F] font-gotham font-[325]
                  text-[14px] sm:text-[16px] md:text-[18.8px]
                  leading-[150%]"
              >
                {card.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
