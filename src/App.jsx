import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ApiSelection from "./components/ApiSelection";
import ApiDetails from "./components/ApiDetails";
import ApiDocs from "./components/ApiDocs";
import ContactUs from "./components/ContactUs";
import KnowMore from "./components/KnowMore";
import Footer from "./components/Footer";
// import FoodItem from "./components/FoodItem";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/api-select" element={<ApiSelection />} />
        <Route path="/api-select/:apiQuery" element={<ApiDetails />} />
        <Route path="/documentation" element={<ApiDocs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/knowmore" element={<KnowMore />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
