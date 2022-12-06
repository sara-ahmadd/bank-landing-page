import React from "react";
import styles from "../style";
import { features } from "../static-data";
import Button from "./Button";

const Business = () => {
  return (
    <section
      className={`container mx-auto flex md:flex-row flex-col ${styles.flexCenter}  ${styles.paddingX} font-poppins`}
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
        className="flex flex-col items-start justify-center gap-5 my-7 md:w-[40%] w-[100%]"
      >
        {features.map((feature, index) => {
          return (
            <div
              key={feature.id}
              className={`${
                styles.flexCenter
              } items-start gap-4 py-2 px-5 rounded-lg feature-hover ${
                index !== features.length - 1 && `mb-6 `
              }`}
            >
              <div className="rounded-full bg-dimBlue p-4">
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
