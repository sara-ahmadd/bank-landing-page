import React from "react";
import { arrowUp } from "../assets";

const Getstarted = () => {
  return (
    <div
      className={`flex justify-center items-center rounded-full bg-blue-gradient p-[2px] w-[140px] h-[140px] cursor-pointer`}
    >
      <div
        className={`flex flex-col justify-center rounded-full bg-primary w-[100%] h-[100%]`}
      >
        <div
          className={`flex justify-center items-start xs:text-lg text-s text-gradient`}
        >
          <p>
            <span>Get</span>
          </p>
          <img className={`w-[23px] h-[23px] ml-2`} src={arrowUp} alt="img" />
        </div>
        <p
          className={`flex justify-center items-start  xs:text-lg text-s text-gradient`}
        >
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default Getstarted;
