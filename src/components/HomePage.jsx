import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen text-white">
        {/* Hero Section */}
        <div className=" text-white py-24 text-center flex justify-evenly items-center">
          <h1 className="text-6xl text-gray-200 font-bold">
            Free Api Data Service <br/>
            for Developers
          </h1>
          <div className="flex flex-col">
            <div className="mt-8 text-lg">
              <span className="flex items-center gap-4 mb-2"><FaCheck color="green"/>Access high-quality APIs</span>
              <span className="flex items-center gap-4 mb-2"vvvvvv><FaCheck color="green"/>Large Data-set</span>
              <span className="flex items-center gap-4"><FaCheck color="green"/>No Registration Required</span>
            </div>
            <Link
              to="/api-select"
              className="bg-[#9bff52] w-3/4 text-black px-2 py-2 mt-6 inline-block rounded-lg font-semibold hover:bg-[#7ddf33]"
            >
              Get Started Now &gt;
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-10 px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-200 text-center mb-6">
            Why Use Our API?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 hover: transition-colors">
              <h3 className="text-xl font-bold text-[#9bff52]">
                Free & Easy Access
              </h3>
              <p className="mt-2 text-gray-400">
                No need for registration or API keys. Just use our endpoints
                directly.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-[#9bff52]">
                Large Data
              </h3>
              <p className="mt-2 text-gray-400">
                Get updated data on restaurants, users, and products with fast
                response times.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-[#9bff52]">Rate Limiting</h3>
              <p className="mt-2 text-gray-400">
                Fair usage policies with proper rate limiting to ensure
                consistent access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
