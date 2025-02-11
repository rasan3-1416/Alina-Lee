import React from "react";
import Image1 from "../assets/img/portfolio/1.png";
import Image2 from "../assets/img/portfolio/2.png";
import Image3 from "../assets/img/portfolio/3.png";
import Image4 from "../assets/img/portfolio/4.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      {/* <section className="section">
        <div className="container relative h-full">
          <div className="flex h-full flex-col items-center justify-start gap-x-24 pb-8 pt-24 text-center lg:flex-row lg:pt-36 lg:text-start">
            <div className="flex flex-col lg:items-start">
              <h1 className="h1">portfolio</h1>
              <p className="mb-12 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <b>Dolore recusandae</b> aliquid vel ea vitae dolor eius commodi
                ipsum dolorum.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                quibusdam rerum et natus?
              </p>
              <Link
                to={"/contact"}
                className="btn mx-auto mb-[30px] w-fit lg:mx-0"
              >
                Hire me
              </Link>
            </div>
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
      </section> */}
      <section className="section">
        <div className="container h-full">
          <div className="flex h-full flex-col items-center justify-center gap-y-12 lg:flex-row lg:gap-x-16 lg:pb-8">
            <div className="text-center lg:text-start">
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
            </div>
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
      </section>
    </>
  );
};

export default Portfolio;
