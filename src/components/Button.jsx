import React from "react";

function Button({ service }) {
  return (
    <button
      className={`rounded-md bg-blue-gradient text-primary ${
        service ? "md:w-[40%] w-[100%]" : "sm:w-[30%]"
      } w-[100%] md:self-start self-center h-fit px-6 py-4`}
    >
      Get Started
    </button>
  );
}

export default Button;
