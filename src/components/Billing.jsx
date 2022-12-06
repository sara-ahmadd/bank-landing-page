import React from "react";
import styles from "../style";
import { bill, apple, google } from "../assets";
const Billing = () => {
  return (
    <section
      className={`container mx-auto font-poppins ${styles.flexCenter} ${styles.paddingX} md:flex-row flex-col `}
    >
      <div id="left" className="flex-1 md:order-first order-last">
        <img src={bill} alt="bill" />
      </div>
      <div
        id="right"
        className="flex flex-col flex-1 gap-5 md:w-[50%] w-[100%]"
      >
        <h2
          className={`xs:text-5xl text-3xl font-semibold mb-10 md:leading-[5rem] leading-[3rem] `}
        >
          Easily control your
          <br /> billing & invoicing.
        </h2>
        <p className="text-dimWhite sm:max-w-[80%] w-[100%]">
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
