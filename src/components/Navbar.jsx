"use client";
import { useState } from "react";
import { GoArrowUpRight, GoDotFill } from "react-icons/go";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import { useDarkMode } from "@/hooks/useDarkMode";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((isOpen) => !isOpen);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Services", to: "services" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact Us", to: "contact" },
  ];

  const logoPath = "/images/logo.png";

  return (
    <nav className="w-full sticky top-0 z-40 flex  lg:h-[14vh] justify-between items-center lg:p-2 bg-[#F6F3ED] dark:bg-[#000] lg:dark:bg-[#18181B] lg:bg-[#fff]">
      {/* Logo */}
      <img src={logoPath} alt="Membres Haven Logo" className="md:w-22 w-20" />

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 text-sm font-semibold uppercase text-[#18181B] dark:text-white">
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link
              spy={true}
              smooth={true}
              hashSpy={true}
              to={item.to}
              duration={1500}
              offset={-150}
              className="flex items-center transition-colors ease-linear duration-300 cursor-pointer justify-center hover:text-[#D9A74A]"
              activeClass="text-[#D9A74A] font-bold"
            >
              <p>{item.name}</p>
              <GoDotFill className="mt-[2px] ml-3 text-[#D9A74A] text-xs" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Right-Side Icons */}
      <div className="flex gap-4 items-center">
        {/* Dark Mode Toggle */}
        <button
          variant={"ghost"}
          size={"icon"}
          onClick={toggleDarkMode}
          className="relative grid place-items-center cursor-pointer rounded-full w-14 h-14 hover:bg-transparent"
        >
          {/* Moon Icon */}
          <div
            className={`absolute transition-all duration-500 ease-in-out transform ${
              !darkMode
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 -rotate-[360deg] opacity-0"
            } text-[#18181B]`}
          >
            <FaMoon className="size-6" />
          </div>

          {/* Sun Icon */}
          <div
            className={`absolute transition-all duration-500 ease-in-out transform ${
              darkMode
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 rotate-[360deg] opacity-0"
            } text-[#D9A74A]`}
          >
            <FaSun className="size-6" />
          </div>
        </button>
        <Link
          to="contact"
          offset={-150}
          smooth={true}
          className="hidden lg:flex items-center gap-2 p-3 bg-[#D9A74A] text-sm text-white font-semibold uppercase rounded-xl hover:bg-[#0A132E] dark:hover:text-white cursor-pointer dark:hover:bg-[#D9A74A] dark:bg-white dark:text-[#0A132E] transition duration-300 ease-linear"
        >
          Reserve Now
          <GoArrowUpRight />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <HiOutlineMenuAlt3
        onClick={handleOpen}
        className="block lg:hidden text-4xl md:text-5xl cursor-pointer dark:text-white text-[#0A132E] font-extrabold"
        aria-label="Toggle navigation menu"
      />

      {/* Mobile Navigation */}

      <MobileNav open={open} handleOpen={handleOpen} />
    </nav>
  );
};

export default Navbar;
