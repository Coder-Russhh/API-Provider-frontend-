import React from "react";

const KnowMore = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#9bff52] mb-8">
          Know More About Our API Services
        </h1>

        {/* Description Section */}
        <div className="text-base sm:text-lg text-center mb-12">
          <p className="mt-4">
            Explore our APIs to enhance your applications, and stay tuned for more exciting updates that will expand our offerings.
          </p>
        </div>

        {/* More Upcoming Section */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#9bff52] mb-4">More Upcoming</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            We're constantly working on adding more APIs and features. In the future, you can expect to see:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base">
            <li>Weather Data API - Get real-time weather updates for any location.</li>
            <li>Finance API - Access stock market data, currency conversions, and financial news.</li>
            <li>Sports Stats API - Fetch live scores and stats for various sports leagues.</li>
          </ul>
          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            Stay tuned for these new offerings and more. We aim to provide a comprehensive suite of APIs that will meet your needs as a developer. Follow our progress and updates regularly!
          </p>
        </div>

        {/* Contact or Suggest More Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#9bff52] mb-4">Want to Suggest an API?</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            If you have suggestions for new APIs or features, feel free to <a href="/contact" className="text-[#9bff52] underline hover:text-[#7ddf33]">Contact Us</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
