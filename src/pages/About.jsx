import React, { useContext } from "react";
import WomanImage from "../assets/img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { transitionOne } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
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
              className="text-center lg:order-2 lg:text-start"
            >
              <h1 className="h1">about me</h1>
              <p className="mx-auto mb-12 max-w-[500px] px-6 md:max-w-[600px] lg:mx-0 lg:max-w-[500px] lg:px-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <b>Dolore recusandae</b> aliquid vel ea vitae dolor eius commodi
                ipsum dolorum.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                quibusdam rerum et natus?
              </p>
              <Link to={"/portfolio"} className="btn mx-auto lg:mx-0">
                View my work
              </Link>
            </motion.div>
            <div className="order-1 flex h-full items-center justify-center overflow-hidden lg:w-[500px]">
              <img
                className="lg:w-[480px] lg:scale-[0.8] xl:scale-90"
                src={WomanImage}
                alt="Woman Image"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
