import { createContext, useEffect, useState } from "react";

// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  //   cursor position state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // Cursor bg state
  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (event) => {
        setCursorPos({
          x: event.clientX,
          y: event.clientY,
        });
      };
      window.addEventListener("mousemove", move);
      // remove event
      return () => window.removeEventListener("mousemove", move);
    } else {
      setCursorBG("none");
    }
  });
  //   Cursor variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      background: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      background: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };
  //   Mouse Enter handler
  const mouseEnterHandler = () => {
    setCursorBG("text");
  };
  //   Mouse Leave handler
  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
