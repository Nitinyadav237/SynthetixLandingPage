import { useState } from "react";
import { cross, hamburger, logo } from "../assets/svg";
import { navLinks, icons } from "../constant";
import CircleArrow from "./circleArrow";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between lg:py-2 md:py-4">
      {/* Logo and Links Container */}
      <div className="flex items-center lg:gap-36">
        {/* Logo */}
        <img className="w-44 h-20" src={logo} alt="logo" />

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-10 text-[#4e4e4f] font-semibold">
          {navLinks.map((link, index) => (
            <h1
              key={index}
              className="cursor-pointer uppercase hover:text-[#76b4e0]"
            >
              {link}
            </h1>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex space-x-4">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-10 h-10 border border-[#4e4e4f] rounded-full px-2 py-1 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu Trigger & Circle Arrow */}
      <div className="flex items-center gap-4">
        <CircleArrow />
        <img
          onClick={() => setOpen(!open)}
          className="w-10 h-10 cursor-pointer lg:hidden block "
          src={open ? cross : hamburger}
          alt={open ? "close menu" : "open menu"}
        />
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-24 border-2 rounded-2xl w-44 right-10  md:right-20 bg-white shadow-lg py-4 z-20 flex flex-col items-center space-y-4">
          {/* Mobile Links */}
          <div className="space-y-2 text-[#4e4e4f] font-semibold">
            {navLinks.map((link, index) => (
              <h1
                key={index}
                className="cursor-pointer uppercase hover:text-[#76b4e0]"
              >
                {link}
              </h1>
            ))}
          </div>

          {/* Mobile Icons */}
          <div className="flex space-x-4">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="w-10 h-10 border border-[#4e4e4f] rounded-full px-2 py-1 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
