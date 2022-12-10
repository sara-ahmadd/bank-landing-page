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
            className="feature-hover rounded-lg p-[10px] flex  gap-12 flex-col justify-between flex-1 items-start"
          >
            <div>
              <img src={quotes} alt="quotes" />
            </div>
            <div>
              <p className="text-dimWhite w-[70%]">{x.content}</p>
            </div>
            <div className="flex flex-row gap-5 justify-between items-center">
              <div className="flex-1/2 rounded-full w-fit">
                <img src={x.img} alt="img" className="w-[100%] h-[100%]" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{x.name}</h4>
                <p>{x.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
