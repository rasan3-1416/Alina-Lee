import React, { useContext } from "react";
// Import Components
import Header from "./Components/Header";
import AnimRoutes from "./components/AnimRoutes";
// Import Browser Router
import { BrowserRouter } from "react-router-dom";
// Import Framer Motion
import { motion } from "motion/react";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimRoutes />
      </BrowserRouter>
      {/* Cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="pointer-events-none fixed left-0 top-0 z-50 h-[32px] w-[32px] rounded-full bg-primary"
      ></motion.div>
    </>
  );
};

export default App;
