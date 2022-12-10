import React from "react";
import { features } from "../static-data";
import Button from "./Button";

const Business = () => {
  return (
    <section
      id="features"
      className={`px-[30px] container mx-auto flex md:flex-row flex-col justify-center items-center  font-poppins`}
    >
      <div
        id="left"
        className="md:w-[60%] w-[100%] flex flex-col items-start justify-center gap-5 my-7"
      >
        <h2
          className={`xs:text-5xl text-3xl font-semibold mb-10 md:leading-[5rem] leading-[3rem]`}
        >
          You do the business,
          <br />
          we’ll handle the money.
        </h2>
        <p>
          With the right credit card, you can improve your financial life by
          <br />
          building credit, earning rewards and saving money. But with
          <br /> hundreds of credit cards on the market.
        </p>
        <Button />
      </div>
      <div
        id="right"
        className="flex flex-col items-start justify-between gap-5 my-7 md:w-[50%] w-[100%]"
      >
        {features.map((feature, index) => {
          return (
            <div
              key={feature.id}
              className={`flex justify-between items-start gap-6 p-2 rounded-lg feature-hover w-[100%] ${
                index !== features.length - 1 && `mb-6 `
              }`}
            >
              <div className="rounded-[50%] md:w-[70px] w-[80px] md:h-[70px] h-[80px]  bg-dimBlue p-4">
                <img
                  src={feature.icon}
                  alt={feature.icon}
                  className={`w-[100%] h-[100%]`}
                />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-dimWhite">{feature.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Business;
