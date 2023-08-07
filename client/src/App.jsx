import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./screens/Navbar";
import BreadCrumb from "./screens/BreadCrumb";
import Hero from "./screens/Hero";

const App = () => {
  return (
    <Router>
      <Navbar />
      <BreadCrumb />
      <Routes>
      <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
};

export default App;
