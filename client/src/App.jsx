import { Heading } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./screens/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes></Routes>
    </Router>
  );
};

export default App;
