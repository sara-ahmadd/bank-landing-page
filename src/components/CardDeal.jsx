import React from "react";
import { card } from "../assets";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section
      className={`px-[30px] container mx-auto w-full flex md:flex-row flex-col gap-5 justify-between items-center  font-poppins`}
    >
      <div
        id="left"
        className="flex flex-col flex-1 gap-5  md:w-[50%] w-[100%]"
      >
        <h2
          className={`xs:text-5xl text-3xl font-semibold mb-10 md:leading-[5rem] leading-[3rem]`}
        >
          Find a better card deal
          <br /> in few easy steps.
        </h2>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
          <br /> quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="flex-1/2 md:w-[40%] w-[100%] justify-self-end">
        <img
          src={card}
          className="w-[100%]  h-[100%] object-cover"
          alt="card"
        />
      </div>
    </section>
  );
};

export default CardDeal;
