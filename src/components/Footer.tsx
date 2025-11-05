import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F4F4F4] flex justify-center py-10 font-gotham">
      <div className="w-full max-w-[1145px] flex flex-col gap-[36px]">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Replace with your actual logo */}
            <img src="/logo.svg" alt="Kutlerri" className="w-8 h-8" />
            <h1 className="text-[22px] font-semibold text-[#233D4D]">Kutlerri</h1>
          </div>

          <button className="w-[195px] h-[40px] rounded-[22px] px-[24px] py-[10px] flex items-center justify-center gap-[10px] bg-[#7138F5] text-white text-[14px] font-semibold hover:bg-[#5e2fd3] transition-colors">
            Contact us
          </button>
        </div>

        {/* Middle Columns */}
        <div className="flex justify-between text-[#233D4D]">
          {/* Column 1 - Solutions */}
          <div className="w-[152px] flex flex-col gap-[16px]">
            <h3 className="text-[10px] uppercase font-semibold tracking-[0.04em]">
              Solutions
            </h3>
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[140%] font-light">
              <li>B2B Catering Leads</li>
              <li>Restaurant Intelligence</li>
              <li>Delivery Optimization</li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div className="w-[88px] flex flex-col gap-[16px]">
            <h3 className="text-[10px] uppercase font-semibold tracking-[0.04em]">
              Company
            </h3>
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[140%] font-light">
              <li>How It Works</li>
              <li>Case Studies</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="w-[182px] flex flex-col gap-[16px]">
            <h3 className="text-[10px] uppercase font-semibold tracking-[0.04em]">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[140%] font-light">
              <li>1901 Thornridge Cir. Shiloh, Hawaii 81063</li>
              <li>+1 891 989-11-91</li>
              <li>hello@logoipsum.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center text-[14px] text-gray-600">
          <p>© 2025 Kutlerri. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-[#7138F5] transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#7138F5] transition-colors">
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
