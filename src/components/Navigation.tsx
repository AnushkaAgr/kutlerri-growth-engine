import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/Images/Logo/LogoDark.png";

import Solution1 from "../assets/Images/NavBar/Asset 1.png";
import Solution2 from "../assets/Images/NavBar/Asset 2.png";
import Solution3 from "../assets/Images/NavBar/Assset 3.png";
import Solution4 from "../assets/Images/NavBar/Asset 4.png";
import Solution5 from "../assets/Images/NavBar/Asset 5.png";

import { motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [openSolutions, setOpenSolutions] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  /* Scroll Listener */
  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    const heroHeight = heroSection ? heroSection.offsetHeight : 500;

    const handleScroll = () => {
      setScrolled(window.scrollY > heroHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Solutions Items */
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
          transition-all duration-300 z-50
          ${scrolled ? "bg-white shadow-sm" : "bg-[#E5D9FF]"}
        `}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-[44px] w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-[50px] font-garnett font-semibold text-[18px]">

          {/* SOLUTIONS BLOCK */}
          <li
            className="relative"
            onMouseEnter={() => setOpenSolutions(true)}
            onMouseLeave={() => setOpenSolutions(false)}
          >
            {/* HOVERABLE AREA (covers navbar height) */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[160px] h-[40px]"></div>

            <button
              className={`
                cursor-pointer transition
                ${openSolutions ? "text-[#7138F5]" : "text-black hover:text-[#7138F5]"}
              `}
            >
              Solutions
            </button>

            {/* DROPDOWN */}
            {openSolutions && (
              <div
                className={`
                  absolute left-1/2 -translate-x-[610px] top-full mt-4
                  w-screen backdrop-blur-xl
                  bg-[rgba(255,255,255,0.55)]
                  border-t-2 border-[rgba(113,56,245,0.25)]
                  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                  rounded-b-2xl
                  transition-all duration-300
                  z-[999]
                `}
              >
                <div className="max-w-7xl mx-auto grid grid-cols-5 divide-x divide-gray-300/40 w-full">
                  {SOLUTIONS_ITEMS.map((item, index) => (
                    <div
                      key={index}
                      className="
                        px-8 py-8
                        flex flex-col items-center
                        hover:bg-[rgba(113,56,245,0.10)]
                        transition-all duration-300
                        cursor-pointer
                      "
                    >
                      <img src={item.img} className="w-[44px] h-[44px] mb-3" />

                      <div className="w-full max-w-[200px] text-center">
                        <h3 className="font-garnett text-[18px] font-semibold mb-2 hover:underline">
                          {item.title}
                        </h3>
                        <p className="font-gotham text-[14px] text-gray-600 leading-[130%]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
          {/* MOBILE SOLUTIONS DROPDOWN */}
          <li
            className="flex justify-between items-center py-3 cursor-pointer"
            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
          >
            <span className="text-black font-garnett">Solutions</span>
            <ChevronDown
              size={22}
              className={`transition ${
                mobileSolutionsOpen ? "rotate-180" : ""
              }`}
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
              Company</Link>
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
