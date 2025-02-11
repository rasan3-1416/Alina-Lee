import React from "react";
import WomanImage from "../assets/img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { transitionOne } from "../transitions";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transitionOne}
      className="section"
    >
      <div className="container relative h-full">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transitionOne}
            className="z-10 flex h-full w-full flex-col items-center justify-center pb-8 lg:absolute lg:w-auto lg:items-start lg:pb-0 lg:pt-0"
          >
            <h1 className="h1">
              photographer <br /> & film maker
            </h1>
            <p className="mb-4 font-primary text-[26px] lg:mb-12 lg:text-[32px]">
              Los Angelos, USA
            </p>
            <Link to={"/contact"} className="btn mb-[30px] w-fit">
              hire me
            </Link>
          </motion.div>
          <div className="flex max-h-96 justify-end lg:max-h-screen">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transitionOne}
              className="relative h-full lg:-right-40 lg:-top-24"
            >
              <img
                // whileHover={{ scale: 1.1 }}
                // transition={transitionOne}
                src={WomanImage}
                alt="Woman Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
