import React, { useContext, useEffect, useState } from "react";
import Image1 from "../assets/img/portfolio/1.png";
import Image2 from "../assets/img/portfolio/2.png";
import Image3 from "../assets/img/portfolio/3.png";
import Image4 from "../assets/img/portfolio/4.png";
import { Link } from "react-router-dom";

import { motion } from "motion/react";
import { transitionOne } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={transitionOne}
        className="section"
      >
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="container h-full"
        >
          <div className="flex h-full flex-col items-center justify-center gap-y-12 lg:flex-row lg:gap-x-16 lg:pb-8">
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transitionOne}
              className="text-center lg:text-start"
            >
              <h1 className="h1">portfolio</h1>
              <p className="mx-auto mb-12 max-w-[500px] px-6 md:max-w-[600px] lg:mx-0 lg:max-w-[500px] lg:px-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <b>Dolore recusandae</b> aliquid vel ea vitae dolor eius commodi
                ipsum dolorum.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                quibusdam rerum et natus?
              </p>
              <Link to={"/contact"} className="btn mx-auto lg:mx-0">
                Hire me
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 lg:gap-2">
              <div className="h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[300px]">
                <img
                  className="h-full object-cover transition-all duration-500 hover:scale-[110%] lg:h-[220px]"
                  src={Image1}
                  alt=""
                />
              </div>
              <div className="h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[300px]">
                <img
                  className="h-full object-cover transition-all duration-500 hover:scale-[110%] lg:h-[220px]"
                  src={Image2}
                  alt=""
                />
              </div>
              <div className="h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[300px]">
                <img
                  className="h-full object-cover transition-all duration-500 hover:scale-[110%] lg:h-[220px]"
                  src={Image3}
                  alt=""
                />
              </div>
              <div className="h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[300px]">
                <img
                  className="h-full object-cover transition-all duration-500 hover:scale-[110%] lg:h-[220px]"
                  src={Image4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Portfolio;
