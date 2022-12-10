import React from "react";
import Button from "./Button";

const Service = () => {
  return (
    <section
      className={`px-[30px] bg-black-gradient-2 rounded-xl py-[50px] container flex md:flex-row flex-col gap-12 justify-between items-center mx-auto  font-poppins w-full`}
    >
      <div className="flex flex-col items-start justify-between flex-2">
        <h2 className="font-semibold text-5xl">Let’s try our service now!</h2>
        <p className="text-dimWhite text-xl py-2">
          Everything you need to accept card payments
          <br /> and grow your business anywhere on the planet.
        </p>
      </div>
      <div className="flex-1 text-center w-fit">
        <Button service={true} />
      </div>
    </section>
  );
};

export default Service;
