import React from "react";
import Testimonials from "./Testimonials";

const Feeadback = () => {
  return (
    <section
      className={`px-[30px] py-2 container mx-auto w-full flex flex-col gap-6 justify-between items-center  font-poppins`}
    >
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
          <p className="text-dimWhite  w-[100%]">
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
