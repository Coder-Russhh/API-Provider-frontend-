import React from "react";
import { useParams } from "react-router-dom";
import apiContent from "./ApiDetailsData.jsx";

const ApiDetails = () => {
  const { apiQuery } = useParams();

  const currentApi = apiContent[apiQuery];

  if (!currentApi) {
    return (
      <div className="text-center text-white py-12">
        Currently API is not available.
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-900 min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#9bff52] mb-8">
          {currentApi.title}
        </h1>
        <div className="max-w-4xl mx-auto text-gray-300">
          <p className="text-base sm:text-lg mb-6">
            {currentApi.description}
          </p>

          {/* API Request Details */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg my-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {currentApi.name}
            </h3>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">
              To get a list of items <span className="text-white">({currentApi.provider})</span>:
            </p>
            <div className="bg-gray-900 p-3 sm:p-4 rounded-lg text-green-400 font-mono text-xs sm:text-sm overflow-auto">
              <code>
                GET: "https://api-provider-umjo.onrender.com/api/v2/{apiQuery}"
              </code>
            </div>
          </div>

          {/* Sample JSON Response */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
            <p className="text-gray-400 mb-2 text-sm sm:text-base">
              Sample JSON response:
            </p>
            <div className="bg-gray-900 p-2 sm:p-2 rounded-lg text-green-400 font-mono text-xs sm:text-sm overflow-auto">
              <pre className="leading-6">
                <code className="text-pink-600">
                  {currentApi.example}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDetails;
