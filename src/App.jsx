import React from "react";
// Import Components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
// Import Browser Router
import { BrowserRouter } from "react-router-dom";
// Import Framer Motion
import { motion } from "motion/react";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
