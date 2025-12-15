import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Images/Logo/LogoDark.png";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F4F4F4] flex justify-center py-10 px-6 font-gotham">
      <div className="w-full max-w-[1145px] flex flex-col gap-10 font-gotham">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 font-gotham">
          
          <div className="flex items-center gap-2">
            <a href="/">
              <img src={Logo} alt="Kutlerri" className="w-[120px] h-auto" />
            </a>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden lg:flex"
          >
            <a
              href="/"
              className="
                flex items-center justify-center
                w-[153px] h-[42px]
                rounded-[77px]
                bg-[#7138F5]
                text-white font-semibold font-gotham
                transition
                hover:bg-[#5d28e6]
              "
            >
              Get a Demo
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between text-[#233D4D] gap-8 sm:gap-0 font-gotham">
          {/* Column 1 - Product */}
          <div className="w-full sm:w-[152px] flex flex-col gap-[10px] sm:gap-[16px] font-gotham">
            <a href="/">
              <h2 className="text-[11px] uppercase font-semibold tracking-[0.05em] hover:underline">
                Product
              </h2>
            </a>
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[150%] font-light">
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">B2B Catering Leads</a></li>
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">Restaurant Intelligence</a></li>
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">Delivery Optimization</a></li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div className="w-full sm:w-[140px] flex flex-col gap-[10px] sm:gap-[16px] font-gotham">
            <a href="/">
              <h2 className="text-[11px] uppercase font-semibold tracking-[0.05em] hover:underline">
                Company
              </h2>
            </a>
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[150%] font-light whitespace-nowrap">
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">How It Works</a></li>
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">Case Studies</a></li>
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">Pricing</a></li>
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="w-full sm:w-[200px] flex flex-col gap-[10px] sm:gap-[16px] font-gotham">
            <a href="/">
              <h2 className="text-[11px] uppercase font-semibold tracking-[0.05em] hover:underline">
                Contact Us
              </h2>
            </a>
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[150%] font-light">
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">8 The Green, Dover, Delaware 19901, US</a></li>
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">+1 891 989-11-91</a></li>
              <li><a href="/" className="hover:text-[#7138F5] transition-colors">hello@kutlerri.com</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#E0E0E0]" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-gray-600 text-center sm:text-left">
          <p>© 2025 Kutlerri. All rights reserved.</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/company/kutlerri"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7138F5] transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="/"
              aria-label="Instagram"
              className="hover:text-[#7138F5] transition-colors"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="/"
              aria-label="Facebook"
              className="hover:text-[#7138F5] transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
