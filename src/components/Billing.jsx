import React from "react";
import styles from "../style";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <section
      className={`px-[30px] container flex md:flex-row flex-col-reverse justify-between items-center mx-auto  font-poppins w-full`}
    >
      <div id="left" className="flex-1 relative ">
        <img src={bill} className="w-[100%]  h-[100%]" alt="bill" />
        <div className="absolute -left-1/2 top-2 w-[50%] h-[50%] z-[3] rounded-full white__gradient" />
        <div className="absolute -left-1/2 bottom-2 w-[50%] h-[50%] z-[0] rounded-full   pink__gradient" />
      </div>
      <div
        id="right"
        className="flex flex-col flex-1/2 gap-5  md:w-[40%] w-[100%]"
      >
        <h2
          className={`xs:text-5xl text-3xl font-semibold mb-10 md:leading-[5rem] leading-[3rem] w-full`}
        >
          Easily control your
          <br /> billing & invoicing.
        </h2>
        <p className="text-dimWhite  w-[100%]">
          Elit enim sed massa etiam. Mauris eu adipiscing
          <br /> ultrices ametodio aenean neque. Fusce ipsum orci
          <br /> rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="btns flex items-center md:justify-start justify-center gap-4">
          <button>
            <img src={apple} alt="apple" />
          </button>
          <button>
            <img src={google} alt="google" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Billing;
