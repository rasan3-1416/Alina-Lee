import React from "react";
import womanImage from "../assets/img/about/woman.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="container relative h-full">
        <div className="flex h-full flex-col items-center justify-center gap-x-24 text-center lg:flex-row lg:pt-16 lg:text-left">
          <div className="order-2 max-h-96 flex-1 overflow-hidden lg:order-none lg:max-h-max">
            <img src={womanImage} alt="Woman Image" />
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
    </section>
  );
};

export default About;
