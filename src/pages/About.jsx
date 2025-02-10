import React from "react";
import WomanImage from "../assets/img/about/woman.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* <section className="">
        <div className="container relative h-full">
          <div className="flex h-full flex-col items-center justify-center gap-x-24 text-center lg:flex-row lg:pt-16 lg:text-left">
            <div className="order-2 max-h-96 flex-1 overflow-hidden lg:order-none lg:max-h-max">
              <img src={WomanImage} alt="Woman Image" />
            </div>
            <div className="z-10 flex flex-1 flex-col items-center justify-center pb-14 pt-32 lg:w-auto lg:items-start lg:pt-0">
              <h1 className="h1">about me</h1>
              <p className="mb-12 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <b>Dolore recusandae</b> aliquid vel ea vitae dolor eius commodi
                ipsum dolorum.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                quibusdam rerum et natus?
              </p>
              <Link to={"/portfolio"} className="btn">
                View my work
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section">
        <div className="container h-full">
          <div className="flex h-full flex-col items-center justify-center gap-y-12 lg:flex-row lg:gap-x-16 lg:pb-8">
            <div className="flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-start">
              <h1 className="h1">about me</h1>
              <p className="mb-12 max-w-[500px] px-6 md:max-w-[600px] lg:max-w-[500px] lg:px-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <b>Dolore recusandae</b> aliquid vel ea vitae dolor eius commodi
                ipsum dolorum.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                quibusdam rerum et natus?
              </p>
              <Link to={"/portfolio"} className="btn">
                View my work
              </Link>
            </div>
            <div className="order-1 flex h-full items-center justify-center overflow-hidden lg:w-[500px]">
              <img
                className="w-[480px] lg:scale-[0.8] xl:scale-90"
                src={WomanImage}
                alt="Woman Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
