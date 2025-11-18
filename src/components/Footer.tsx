import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../assets/Images/Logo/Logo Full Dark.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F4F4F4] flex justify-center py-10 px-6 font-gotham">
      <div className="w-full max-w-[1145px] flex flex-col gap-10 font-gotham">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 font-gotham">
          
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Kutlerri" className="w-[120px] h-auto" />
          </div>

         
          <a
            href="/contact"
            className="w-full sm:w-[195px] h-[42px] rounded-[22px] px-[24px] py-[10px] flex items-center justify-center gap-[10px] bg-[#7138F5] text-white text-[14px] font-semibold hover:bg-[#5e2fd3] transition-colors font-gotham"
          >
            Discover Kutlerri
          </a>
        </div>

        
        <div className="flex flex-col sm:flex-row justify-between text-[#233D4D] gap-8 sm:gap-0 font-gotham">
          {/* Column 1 - Solutions */}
          <div className="w-full sm:w-[152px] flex flex-col gap-[10px] sm:gap-[16px] font-gotham">
            <a href="/product">
              <h2 className="text-[11px] uppercase font-semibold tracking-[0.05em] font-gotham hover:underline">
              Product
            </h2>
            </a>
            
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[150%] font-light font-gotham">
              <li>
                <a
                  href="/solutions/b2b-leads"
                  className="hover:text-[#7138F5] transition-colors font-gotham"
                >
                  B2B Catering Leads
                </a>
              </li>
              <li>
                <a
                  href="/solutions/intelligence"
                  className="hover:text-[#7138F5] transition-colors font-gotham"
                >
                  Restaurant Intelligence
                </a>
              </li>
              <li>
                <a
                  href="/solutions/delivery-optimization"
                  className="hover:text-[#7138F5] transition-colors font-gotham"
                >
                  Delivery Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div className="w-full sm:w-[140px] flex flex-col gap-[10px] sm:gap-[16px] font-gotham">
            <h2 className="text-[11px] uppercase font-semibold tracking-[0.05em] font-gotham hover:underline">
              <a href="/company">Company</a>
              
            </h2>
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[150%] font-light whitespace-nowrap font-gotham">
              <li>
                <a href="/how-it-works" className="hover:text-[#7138F5] transition-colors font-gotham">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-[#7138F5] transition-colors font-gotham">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[#7138F5] transition-colors font-gotham">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-[#7138F5] transition-colors font-gotham">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="w-full sm:w-[200px] flex flex-col gap-[10px] sm:gap-[16px] font-gotham">
            <a href="/contact">
              <h2 className="text-[11px] uppercase font-semibold tracking-[0.05em] font-gotham hover:underline">
              Contact Us
            </h2>
            </a>
            <ul className="flex flex-col gap-[4px] text-[14px] leading-[150%] font-light font-gotham">
              <li>
                <a
                  href="https://maps.google.com/?q=1901+Thornridge+Cir,+Shiloh,+Hawaii+81063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7138F5] transition-colors font-gotham"
                >
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </a>
              </li>
              <li>
                <a href="tel:+18919891191" className="hover:text-[#7138F5] transition-colors font-gotham">
                  +1 891 989-11-91
                </a>
              </li>
              <li>
                <a href="mailto:hello@kutlerri.com" className="hover:text-[#7138F5] transition-colors font-gotham">
                  hello@kutlerri.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- Divider ---------- */}
        <div className="w-full h-[1px] bg-[#E0E0E0]" />

        {/* ---------- Bottom Section ---------- */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-gray-600 text-center sm:text-left">
          <p>© 2025 Kutlerri. All rights reserved.</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7138F5] transition-colors font-gotham"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7138F5] transition-colors font-gotham"
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
