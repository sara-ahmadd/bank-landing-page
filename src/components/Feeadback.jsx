import React from "react";
import Testimonials from "./Testimonials";

const Feeadback = () => {
  return (
    <section
      id="clients"
      className={`relative z-10  px-[30px] py-2 container mx-auto w-full flex flex-col gap-6 justify-between items-center  font-poppins`}
    >
      <div className="absolute rounded-full z-[3] top-[0] -right-[100px] h-[100%] w-[10%] white__gradient" />
      <div className="absolute rounded-full z-[5] top-[10%] -right-[100px] h-[100%] w-[20%] blue__gradient " />
      <div className="absolute rounded-full z-[3] bottom-[0] -right-[100px] h-[100%] w-[10%] white__gradient" />
      <div className="w-full flex md:flex-row flex-col gap-6 justify-between items-center ">
        <div id="left" className="flex-1">
          <h2
            className={`xs:text-5xl text-3xl font-semibold mb-10 md:leading-[5rem] leading-[3rem] w-full`}
          >
            What people are
            <br /> saying about us
          </h2>
        </div>
        <div id="right" className="flex-1/2">
          <p className="text-dimWhite text-2xl w-[100%]">
            Everything you need to accept card payments
            <br /> and grow your business anywhere on the planet.
          </p>
        </div>
      </div>
      <div>
        <Testimonials />
      </div>
    </section>
  );
};

export default Feeadback;
