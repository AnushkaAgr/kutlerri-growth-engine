import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-[36px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1216px] bg-black text-white z-50 shadow-md rounded-[41.81px] transition-all duration-300">
      <div className="flex items-center justify-between px-[32px] py-[12px] lg:px-[53px] lg:py-[11px]">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-onlygraphic font-bold text-[24px] lg:text-[27.32px] tracking-[-0.03em] leading-[100%] text-white">
            Kutlerri
          </div>
        </Link>

        {/* Desktop Menu (only for large screens) */}
        <ul className="hidden lg:flex items-center space-x-10 font-medium text-[16px]">
          {[
            { label: "Product", path: "/product" },
            { label: "Resources", path: "/resources" },
            { label: "Company", path: "/company" },
            { label: "Pricing", path: "/pricing" },
          ].map(({ label, path }) => (
            <li
              key={path}
              className={`hover:text-gray-400 transition ${
                isActive(path) ? "text-gray-300" : ""
              }`}
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop only) */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center justify-center w-[153px] h-[42px] rounded-[77px] border-2 border-[#7138F5] text-[#7138F5] font-semibold hover:bg-[#7138F5] hover:text-white transition duration-300 ease-in-out active:bg-[#ff6f59]"
        >
          Contact
        </Link>

        {/* Mobile & Tablet Menu Toggle */}
        <button
          className="lg:hidden flex items-center text-white focus:outline-none active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile & Tablet Dropdown */}
      <div
        className={`lg:hidden bg-black rounded-b-[41.81px] border-t border-gray-800 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium">
          {[
            { label: "Product", path: "/product" },
            { label: "Resources", path: "/resources" },
            { label: "Company", path: "/company" },
            { label: "Pricing", path: "/pricing" },
          ].map(({ label, path }) => (
            <li
              key={path}
              className={`hover:text-gray-400 transition ${
                isActive(path) ? "text-gray-300" : ""
              }`}
            >
              <Link to={path} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-[140px] h-[40px] flex items-center justify-center rounded-full border-2 border-[#7138F5] text-[#7138F5] font-semibold hover:bg-[#7138F5] hover:text-white transition duration-300 ease-in-out active:bg-[#ff6f59]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
