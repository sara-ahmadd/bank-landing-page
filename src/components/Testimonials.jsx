import React from "react";
import { feedback } from "../static-data";
import { quotes } from "../assets";

const Testimonials = () => {
  return (
    <div className="flex md:flex-row flex-col w-[100%] h-[100%] justify-between items-start gap-[30px]">
      {feedback.map((x) => {
        return (
          <div
            key={x.id}
            className="feature-hover rounded-lg px-[40px] py-[20px] flex  sm:gap-12 gap-[90px] flex-col md:w-[25%] w-[100%] md:h-[100%] h-fit justify-between flex-1 items-start"
          >
            <div>
              <img src={quotes} alt="quotes" />
            </div>
            <div>
              <p className="text-dimWhite w-[90%] md:h-[100px] h-[70px]">
                {x.content}
              </p>
            </div>
            <div className="flex xs:flex-row flex-col xs:gap-5 gap-10 w-full justify-between items-center">
              <div className="flex-1/2 rounded-full w-[100px]">
                <img src={x.img} alt="img" className="w-[100%] h-[100%]" />
              </div>
              <div className="flex-1 w-full max-h-[100px]">
                <h4 className="font-semibold w-full">{x.name}</h4>
                <p className="w-full">{x.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
