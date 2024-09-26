import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  // Step 1: State for form data
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  // Step 2: State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Step 3: State for handling errors (if needed)
  const [errorMessage, setErrorMessage] = useState("");

  // Step 4: Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of page on load
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.email || !formData.message) {
      setErrorMessage("Please fill in both fields.");
      return;
    }

    // EmailJS configuration
    emailjs
      .send(
        "service_9y5ca0j", // Replace with your service ID
        "template_0vjl0v1", // Replace with your template ID
        formData,
        "v37_DDYCXRvoMvGRQ" // Replace with your user ID
      )
      .then(() => {
        // Success handling
        setSuccessMessage("Your message has been sent!");
        setErrorMessage(""); // Clear errors if successful
        setFormData({
          email: "",
          message: "",
        });
      })
      .catch(() => {
        // Error handling
        setErrorMessage("Failed to send message, please try again.");
        setSuccessMessage(""); // Clear success message on error
      });
  };

  return (
    <div className="bg-gray-900 min-h-[75vh] md:min-h-screen text-white flex items-center justify-center">
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Your Suggestion/Query
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none"
              rows="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#9bff52] text-black p-2 rounded-lg font-semibold hover:bg-[#7ddf33] transition"
          >
            Submit
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <p className="mt-4 text-green-500 font-semibold">{successMessage}</p>
        )}

        {/* Error Message */}
        {errorMessage && (
          <p className="mt-4 text-red-500 font-semibold">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
