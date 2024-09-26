import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-8 border-b-2 border-gray-700 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            API.Provider
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Links - Hidden on mobile, shown on medium and larger screens */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/api-select"
            className="bg-[#9bff52] text-black px-2 py-2 rounded-lg font-semibold hover:bg-[#7ddf33]"
          >
            Let's Start
          </Link>
          <Link to="/documentation" className="hover:text-gray-400">
            API Docs
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
          <Link to="/knowmore" className="hover:text-gray-400">
            Know More
          </Link>
        </div>
      </div>

      {/* Collapsible menu for mobile screens */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-4 flex flex-col">
          <Link
            to="/api-select"
            onClick={toggleMenu} // Close the menu on link click
            className="bg-[#9bff52] text-black px-2 py-2 rounded-lg font-semibold hover:bg-[#7ddf33]"
          >
            Let's Start
          </Link>
          <Link to="/documentation" onClick={toggleMenu} className="hover:text-gray-400">
            API Docs
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-400">
            Contact Us
          </Link>
          <Link to="/knowmore" onClick={toggleMenu} className="hover:text-gray-400">
            Know More
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
