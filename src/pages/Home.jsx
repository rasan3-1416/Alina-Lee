import React from "react";
import WomanImage from "../assets/img/home/woman.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container relative h-full">
        <div className="flex flex-col justify-center">
          <div className="z-10 flex h-full w-full flex-col items-center justify-center pb-8 pt-32 lg:absolute lg:w-auto lg:items-start lg:pb-0 lg:pt-0">
            <h1 className="h1">
              photographer <br /> & film maker
            </h1>
            <p className="mb-4 font-primary text-[26px] lg:mb-12 lg:text-[32px]">
              Los Angelos, USA
            </p>
            <Link to={"/contact"} className="btn mb-[30px] w-fit">
              hire me
            </Link>
          </div>
          <div className="flex max-h-96 justify-end lg:max-h-max">
            <div className="relative h-full overflow-hidden lg:-right-40">
              <img src={WomanImage} alt="Woman Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
