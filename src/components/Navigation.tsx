import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Images/Logo/Logo Full Dark.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0
          w-full h-[82.6px]
          flex items-center justify-between
          px-4 sm:px-8 md:px-[40px] lg:px-[53px]
          transition-all duration-300
          z-50
          ${scrolled ? "bg-white shadow-sm" : "bg-[#E5D9FF]"}
        `}
      >
        {/* ---- LOGO ---- */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-[44.59px] w-auto" />
        </Link>

        {/* ---- DESKTOP MENU ---- */}
        <ul
          className="
          hidden lg:flex
          items-center
          w-auto
          gap-[50px]
          font-inter font-bold
          text-[18px] xl:text-[20px]
          tracking-[-0.03em]
        "
        >
          {[
            { label: "Product", path: "/ScrollStack" },
            { label: "Resources", path: "/resources" },
            { label: "Company", path: "/company" },
            { label: "Pricing", path: "/pricing" },
          ].map(({ label, path }) => (
            <li
              key={path}
              className={`
                transition 
                duration-200 
                hover:opacity-70
                ${
                  isActive(path)
                    ? "text-[#7138F5]"
                    : "text-black hover:text-[#7138F5]"
                }
              `}
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* ---- DESKTOP BUTTON ---- */}
        <Link
          to="/contact"
          className="
            hidden lg:flex
            items-center justify-center
            w-[153px] h-[42px]
            rounded-[77px]
            bg-[#7138F5]
            text-white font-semibold font-gotham
            transition
            hover:bg-[#5d28e6] active:scale-95
          "
        >
        Get a Demo
        </Link>

        {/* ---- MOBILE MENU TOGGLE ---- */}
        <button
          className="
            lg:hidden 
            flex items-center justify-center
            p-2 
            text-black 
            active:scale-90 
            transition
          "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ---- MOBILE DROPDOWN ---- */}
      <div
        className={`
        lg:hidden
        ${scrolled ? "bg-white" : "bg-[#E5D9FF]"}
        border-t border-gray-300
        transition-all duration-300 overflow-hidden
        ${isOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium text-black">
          {[
            { label: "Product", path: "/ScrollStack" },
            { label: "Resources", path: "/resources" },
            { label: "Company", path: "/company" },
            { label: "Pricing", path: "/pricing" },
          ].map(({ label, path }) => (
            <li
              key={path}
              className={`
                transition 
                hover:text-[#7138F5]
                ${
                  isActive(path)
                    ? "text-[#7138F5]"
                    : "text-black"
                }
              `}
            >
              <Link to={path} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}

          {/* ---- MOBILE BUTTON ---- */}
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
                w-[160px] h-[44px]
                flex items-center justify-center
                rounded-full
                border-2 border-[#7138F5]
                text-[#7138F5]
                font-semibold font-gotham
                transition
                hover:bg-[#7138F5] hover:text-white
                active:scale-95
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
