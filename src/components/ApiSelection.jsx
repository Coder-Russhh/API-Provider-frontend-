import React from "react";
import { Link } from "react-router-dom";

const apis = [
  { id: 1, name: "Food Items API", query: "/items" },
  { id: 2, name: "Social Media API", query: "/instagramUsers" },
  { id: 3, name: "Chatbot Training API", query: "/chatbotData" },
  { id: 4, name: "Products API", query: "/products" },
];

const ApiSelection = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12">
      <h1 className="text-4xl font-bold text-center text-[#9bff52] mb-8">
        Select an API to Explore
      </h1>

      {/* API Boxes */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {apis.map((api) => (
          <Link to={`/api-select${api.query}`}>
            <div
              key={api.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer text-center"
            >
              <h1 className="text-2xl font-semibold text-white">{api.name}.</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ApiSelection;
