import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // check both emails and message ----
    if (!formData.email || !formData.message) {
      alert("Please fill in both fields");
      return;
    }

    // EmailJS configuration
    emailjs
      .send(
        "service_9y5ca0j", // Replace with your service ID
        "template_0vjl0v1", // Replace with your email template ID
        formData,
        "v37_DDYCXRvoMvGRQ" // Replace with your user ID from EmailJS
      )
      .then(() => {
        setSuccessMessage("Your message has been sent!");
        setFormData({
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed to send message, please try again.");
      });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center">
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
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
              placeholder="How can we improve?"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#9bff52] text-black p-2 rounded-lg font-semibold hover:bg-[#7ddf33] transition"
          >
            Submit
          </button>
        </form>
        {successMessage && (
          <p className="mt-4 text-green-500 font-semibold">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
