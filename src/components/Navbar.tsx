import { useState } from "react";
import { cross, hamburger, logo } from "../assets/svg";
import { navLinks, icons } from "../constant";
import CircleArrow from "./circleArrow";
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child element's animation
    },
  },
};

const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};
  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between lg:py-2 md:py-4">
      {/* Logo and Links Container */}
      <div className="flex items-center lg:gap-36">
        {/* Logo */}
        <motion.img variants={logoVariants} className="w-44 h-20" src={logo} alt="logo" />

        {/* Desktop Links */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex space-x-10 text-[#4e4e4f] font-semibold">
          {navLinks.map((link, index) => (
            <h1
              key={index}
              className="cursor-pointer uppercase hover:text-[#76b4e0]"
            >
              {link}
            </h1>
          ))}
        </motion.div>

        {/* Desktop Icons */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex space-x-4">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-10 h-10 border border-[#4e4e4f] rounded-full px-2 py-1 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>

      {/* Mobile Menu Trigger & Circle Arrow */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-4">
        <CircleArrow />
        <img
          onClick={() => setOpen(!open)}
          className="w-10 h-10 cursor-pointer lg:hidden block "
          src={open ? cross : hamburger}
          alt={open ? "close menu" : "open menu"}
        />
      </motion.div>

      {/* Mobile Menu */}
       <AnimatePresence mode="wait">
      {open && (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }} className="absolute top-24 border-2 rounded-2xl w-44 right-10  md:right-20 bg-white shadow-lg py-4 z-20 flex flex-col items-center space-y-4">
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
        </motion.div>
      )}
</AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
