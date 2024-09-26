import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 sm:px-8 border-t-2 border-gray-700">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start">
        {/* Left Side: Logo & Description */}
        <div className="mb-6 sm:mb-0">
          {/* Logo */}
          <h1 className="text-3xl font-bold mb-2">API.Provider</h1>

          {/* Short Description */}
          <p className="text-gray-400 text-sm sm:text-base">
            Providing developers free,<br/> Easy-to-use, reliable APIs.
            <br /> No authentication needed !
          </p>
        </div>

        {/* Right Side: Get in Touch & Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Get in touch</h3>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link to="https://www.linkedin.com/in/ramsahu/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-gray-400" size={24} />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-gray-400" size={24} />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-gray-400" size={24} />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-400" size={24} />
            </Link>
          </div>

          {/* Contact Info */}
          <p className="text-gray-400 text-sm sm:text-base">
            {/* Email us for any query: */}
            <br />
            <Link to="/contact">
              <span  className="bg-[#9bff52] text-black px-2 py-2 rounded-lg font-semibold hover:bg-[#7ddf33]">
                {" "}
                Contact me
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
