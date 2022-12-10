import React from "react";
import { clients } from "../static-data";

function CTA() {
  return (
    <section
      className={`px-[30px] container flex xs:flex-row xs:flex-wrap flex-col gap-8 justify-between items-center mx-auto w-full`}
    >
      {clients.map((x) => {
        return (
          <div key={x.id} className="xs:w-[18%] w-[110px]">
            <img src={x.logo} alt="img" className="h-full w-full" />
          </div>
        );
      })}
    </section>
  );
}

export default CTA;
