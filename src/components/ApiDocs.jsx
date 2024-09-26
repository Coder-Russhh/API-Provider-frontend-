import React from "react";

const ApiDocs = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#9bff52] mb-6 sm:mb-8">
        API Documentation
      </h1>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto text-gray-300 text-base sm:text-lg">
        <p className="mb-4 sm:mb-6">
          Welcome to our API documentation! This section will guide you through how to interact with our large and easy-to-use APIs as compared to other free APIs. Whether you're a developer looking to integrate our data into your app or just exploring, we've got you covered.
        </p>

        {/* Getting Started */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#9bff52] mb-4 sm:mb-6">
          Getting Started
        </h2>
        <p className="mb-4 sm:mb-6">
          You can start making API requests without registration or API keys. Simply use the following endpoints to get data:
        </p>

        {/* Example Endpoints */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
            Social Media Endpoint
          </h3>
          <p className="text-gray-400 mb-2 sm:mb-4">
            To get a list of <span className="text-white">(social media)</span> users:
          </p>
          <div className="bg-gray-900 p-3 sm:p-4 rounded-lg text-green-400 font-mono text-xs sm:text-sm overflow-auto">
            <code>GET: "https://api-provider-umjo.onrender.com/api/v2/instagramUsers"</code>
          </div>
        </div>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg mb-8">
          <p className="text-gray-400 mb-2 sm:mb-4">Sample JSON response:</p>
          <div className="bg-gray-900 p-3 sm:p-4 rounded-lg text-green-400 font-mono text-xs sm:text-sm overflow-auto">
            <pre className="leading-6">
              <code className="text-pink-600">
                {`
{
  "user_id": "111",
  "name": "Kavya Reddy",
  "isFollow": true,
  "image_url": "https://t.ly/KL42X",
  "like_count": 660,
  "comments_count": 150
},
{
  "user_id": "112",
  "name": "Lakshay Malhotra",
  "isFollow": false,
  "image_url": "https://t.ly/KL42X",
  "like_count": 320,
  "comments_count": 70
}
`}
              </code>
            </pre>
          </div>
        </div>

        <div className="border-2 my-4 border-gray-500"></div>

        {/* Products Endpoint */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg my-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
            Products Endpoint
          </h3>
          <p className="text-gray-400 mb-2 sm:mb-4">
            To get a list of products <span className="text-white">(e-commerce)</span>:
          </p>
          <div className="bg-gray-900 p-3 sm:p-4 rounded-lg text-green-400 font-mono text-xs sm:text-sm overflow-auto">
            <code>GET: "https://api-provider-umjo.onrender.com/api/v2/products"</code>
          </div>
        </div>

        {/* Products Response Example */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
          <p className="text-gray-400 mb-2 sm:mb-4">Sample JSON response:</p>
          <div className="bg-gray-900 p-3 sm:p-4 rounded-lg text-green-400 font-mono text-xs sm:text-sm overflow-auto">
            <pre className="leading-6">
              <code className="text-pink-600">
                {`[
  {
    "product_id": 149,
    "name": "Electric Lawn Mower",
    "description": "Eco-friendly electric lawn mower with adjustable cutting height and easy maneuverability.",
    "price": 399.99,
    "discount": 100,
    "category": "Outdoor",
    "product_image": "https://t.ly/tSt1x",
    "ratings": 4.7,
    "review_count": 90
  },
  {
    "product_id": 150,
    "name": "Electric Motor",
    "description": "Eco-friendly electric motor with adjustable cutting height and easy maneuverability.",
    "price": 399.99,
    "discount": 100,
    "category": "Outdoor",
    "product_image": "https://t.ly/tSt1x",
    "ratings": 4.7,
    "review_count": 90
  }
]`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
