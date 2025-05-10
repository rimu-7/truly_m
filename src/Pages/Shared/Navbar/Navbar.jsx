import React, { useEffect, useState } from "react";
import { navLinks } from "../../../assets/Constant/index"; // adjust the path
import { HiMenu, HiX } from "react-icons/hi"; // icons for menu

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);
    };

    handleScroll(); // run on mount

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="min-w-screen mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="text-3xl font-bold uppercase text-[#FFD700]">
          truly m
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ link, name, icon }) => (
            <a
              key={name}
              href={link}
              className="relative text-xl text-[#FFD700] hover:text-[#ffd900cd] group"
            >
              <span>{name}</span>
              <span>{icon}</span>
              <span className="block h-0.5 bg-[#FFD700] w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Auth Buttons (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-x-3">
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          >
            Sign Up
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          >
            Log In
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#FFD700] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 backdrop-blur-md text-white space-y-4">
          {navLinks.map(({ link, name }) => (
            <a
              key={name}
              href={link}
              className="block text-[#FFD700] hover:text-[#ffd900cd]"
              onClick={() => setMenuOpen(false)} // close on click
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          >
            Sign Up
          </a>
          <a
            href="#contact"
            className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          >
            Log In
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
