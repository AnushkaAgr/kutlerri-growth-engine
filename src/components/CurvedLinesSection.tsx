import React from "react";
import CurvedLinesImage from "../assets/Images/Curved-lines.png";
import Logo from "../assets/Images/Logo/Layer 4.png";

const CurvedLinesSection: React.FC = () => {
  return (
    <section className="relative w-full flex justify-center bg-white overflow-hidden mt-469px" >
      {/* Background Lines Image */}
      <img
        src={CurvedLinesImage}
        alt="Kutlerri curved lines section"
        className="
          w-full 
          max-w-[2000px]
          object-contain
          mt-[-20px]
          select-none
          pointer-events-none
        "
      />

      {/* Floating Logo Box */}
      <div
        className="
          absolute
          flex items-center justify-center
          rounded-[25px]
          bg-black
          top-[63%] left-[50%]
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-500 ease-out
          hover:-translate-y-[12px]  /* jump effect */
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] /* oval shadow illusion */
          shadow-[0_10px_20px_rgba(0,0,0,0.25)]
        "
        style={{
          width: "clamp(50px, 8vw, 82px)",
          height: "clamp(50px, 8vw, 82px)",
        }}
      >
        <img
          src={Logo}
          alt="Kutlerri Logo"
          className="object-contain"
          style={{
            width: "clamp(24px, 3.8vw, 34px)",
            height: "clamp(24px, 3.8vw, 34px)",
          }}
        />
      </div>
    </section>
  );
};

export default CurvedLinesSection;
