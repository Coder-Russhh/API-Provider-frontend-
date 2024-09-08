import React from "react";
import { Routes, Route } from "react-router-dom";
import {ApiDocs, ContactUs, KnowMore, HomePage, Navbar, Footer, ApiSelection, ApiDetails} from "./components/AllFiles";
import FoodItem from "./components/FoodItem";

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
