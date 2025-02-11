import React from "react";
import WomanImage from "../assets/img/contact/woman.png";

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-x-8 text-center lg:flex-row lg:pb-8 lg:text-left">
          <div className="absolute bottom-0 left-0 right-0 top-40 -z-10 hidden bg-[#eef7f9] lg:flex"></div>
          <div className="px-4 lg:flex-1">
            <h1 className="h1">contact me</h1>
            <p className="mb-12">I would love to get suggestion from you.</p>
            <form action="" className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email"
                />
              </div>
              <input
                className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <input
                className="btn mx-auto mb-[30px] self-start lg:mx-0"
                type="submit"
                value={"Send it"}
              />
            </form>
          </div>
          <div className="h-screen lg:flex-1">
            <img src={WomanImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
