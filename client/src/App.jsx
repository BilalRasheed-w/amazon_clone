import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./screens/Navbar";
import BreadCrumb from "./screens/BreadCrumb";
import MainCarousel from "./screens/MainCarousel";

const App = () => {
  return (
    <Router>
      <Navbar />
      <BreadCrumb />
      <Routes>
        <Route path="/" element={<MainCarousel />} />
      </Routes>
    </Router>
  );
};

export default App;
