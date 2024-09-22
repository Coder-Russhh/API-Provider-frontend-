import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 border-b-2 border-gray-700 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            API.Provider
          </Link>
        </div>

        {/* Menu Links */}
        <div className="space-x-6">
          <Link to="/api-select" className="bg-[#9bff52] text-black px-2 py-2 rounded-lg font-semibold hover:bg-[#7ddf33]">
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
    </nav>
  );
};

export default Navbar;
