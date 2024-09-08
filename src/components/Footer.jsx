import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-8 border-t-2 border-gray-700">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Side: Logo & Description */}
        <div>
          {/* Logo */}
          <h1 className="text-2xl font-bold mb-4">Free.Large.API</h1>

          {/* Short Description */}
          <p className="text-gray-400">
            Providing developers free, easy-to-use, reliable APIs.
            <br /> No authentication needed to get started, just plug and play!
          </p>
        </div>

        {/* Right Side: Get in Touch & Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
            <FaLinkedin className="text-white hover:text-gray-400" size={24} />
            <FaFacebookF className="text-white hover:text-gray-400" size={24} />
            <FaTwitter className="text-white hover:text-gray-400" size={24} />
            <FaInstagram className="text-white hover:text-gray-400" size={24} />
          </div>

          {/* Contact Info */}
          <p className="text-gray-400">
            Email us for any query:
            <br />
            <span className="text-[#9bff52] hover:text-[#7ddf33] text-xl underline">
              {" "}
              Contact me
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
