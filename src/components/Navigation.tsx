import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Images/Logo/LogoDark.png";

import Solution1 from "../assets/Images/NavBar/Asset 1.png";
import Solution2 from "../assets/Images/NavBar/Asset 2.png";
import Solution3 from "../assets/Images/NavBar/Assset 3.png";
import Solution4 from "../assets/Images/NavBar/Asset 4.png";
import Solution5 from "../assets/Images/NavBar/Asset 5.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll to change navbar color
  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    const heroHeight = heroSection ? heroSection.offsetHeight : 500;

    const handleScroll = () => {
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenSolutions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const SOLUTIONS_ITEMS = [
    {
      img: Solution1,
      title: "Verified B2B Lead Generation",
      desc: "High-intent catering leads directly to your restaurant.",
    },
    {
      img: Solution2,
      title: "Automated Outreach",
      desc: "Communicate with leads faster & close more deals.",
    },
    {
      img: Solution3,
      title: "Unified Data Aggregation",
      desc: "Your POS, sales, inventory & menu data in one place.",
    },
    {
      img: Solution4,
      title: "Real-Time Trend Tracking",
      desc: "Spot trends & fix operational leaks instantly.",
    },
    {
      img: Solution5,
      title: "Predictive Forecasting",
      desc: "Plan smarter with future demand & revenue predictions.",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full h-[82px]
          flex items-center justify-between
          px-4 sm:px-8 md:px-[40px] lg:px-[53px]
          transition-all duration-300 z-[1000]
          ${scrolled ? "bg-white shadow-sm" : "bg-[#E5D9FF]"}
        `}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-[44px] w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-[50px] font-garnett font-semibold text-[18px]">
          {/* SOLUTIONS BUTTON */}
          <li>
            <button
              onClick={() => setOpenSolutions((prev) => !prev)}
              className={`flex items-center gap-1 cursor-pointer transition-none ${
                openSolutions ? "text-[#7138F5]" : "text-black"
              }`}
            >
              Solutions
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openSolutions ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </li>

          {/* OTHER LINKS */}
          <li
            className={`cursor-pointer transition ${
              isActive("/resources")
                ? "text-[#7138F5]"
                : "text-black hover:text-[#7138F5]"
            }`}
          >
            <Link to="/resources">Resources</Link>
          </li>

          <li
            className={`cursor-pointer transition ${
              isActive("/company")
                ? "text-[#7138F5]"
                : "text-black hover:text-[#7138F5]"
            }`}
          >
            <Link to="/company">Company</Link>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
          <Link
            to="/contact"
            className="
              hidden lg:flex items-center justify-center
              w-[153px] h-[42px] rounded-full
              bg-[#7138F5] text-white font-semibold
              hover:bg-black transition font-garnett
            "
          >
            Get a Demo
          </Link>
        </motion.div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* FULL-WIDTH DROPDOWN */}
      <AnimatePresence>
        {openSolutions && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed top-[82px] left-0 w-screen
              bg-white border-t-2 border-[#E4D7FF]
              shadow-[0_8px_40px_rgba(0,0,0,0.08)]
              rounded-b-[30px] overflow-hidden
              z-[999]
            "
          >
            <div
              className="
                max-w-[1600px] mx-auto px-8
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
                divide-y sm:divide-y-0 sm:divide-x divide-gray-200
                w-full
              "
            >
              {SOLUTIONS_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="
                    px-6 py-10
                    flex flex-col items-center justify-start
                    cursor-pointer text-center
                  "
                >
                  <div
                    className="
                      w-[60px] h-[60px] flex items-center justify-center
                      rounded-2xl bg-[#F6F0FF]
                      shadow-sm mb-4
                    "
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[36px] h-[36px]"
                    />
                  </div>

                  <div className="max-w-[220px]">
                    <h3
                      className="
                        font-garnett text-[17px] md:text-[18px]
                        font-semibold mb-2 text-[#1A1A1A]
                      "
                    >
                      {item.title}
                    </h3>
                    <p
                      className="
                        font-gotham text-[14px] md:text-[15px]
                        text-gray-600 leading-[130%]
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden fixed top-[82px] left-0 w-full
          bg-white shadow-lg border-t
          transition-all duration-300 overflow-hidden
          ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col py-6 px-6 text-lg font-medium">
          {/* MOBILE SOLUTIONS */}
          <li
            className="flex justify-between items-center py-3 cursor-pointer"
            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
          >
            <span className="text-black font-garnett">Solutions</span>
            <ChevronDown
              size={22}
              className={`transition ${mobileSolutionsOpen ? "rotate-180" : ""}`}
            />
          </li>

          {mobileSolutionsOpen && (
            <div className="pl-4 py-2 flex flex-col gap-4">
              {SOLUTIONS_ITEMS.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <img src={item.img} className="w-10 h-10" />
                  <div>
                    <p className="font-garnett text-[16px]">{item.title}</p>
                    <p className="text-gray-600 text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <li className="py-3">
            <Link to="/resources" className="text-black font-garnett">
              Resources
            </Link>
          </li>

          <li className="py-3">
            <Link to="/company" className="text-black font-garnett">
              Company
            </Link>
          </li>

          <li className="pt-6">
            <Link
              to="/contact"
              className="
                w-full flex items-center justify-center
                h-[44px] rounded-full border-2 border-[#7138F5]
                text-[#7138F5] font-semibold
                hover:bg-[#7138F5] hover:text-white transition
              "
            >
              Get a Demo
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
