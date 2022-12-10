import React, { useState } from "react";
import styles from "../style";
import { logo, menu, close } from "../assets";
import { navLinks } from "../static-data/index";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`px-[30px] container mx-auto flex justify-between items-center py-1  h-fit w-full`}
    >
      <div>
        <a href="#home">
          <img src={logo} className="w-[100px] h-[100px]" />
        </a>
      </div>
      <ul className={`justify-end gap-[60px] w-2/5 text-white sm:flex hidden`}>
        {navLinks.map((x) => (
          <li key={x.id}>
            <a href={`#${x.id}`} id={x.id}>
              {x.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden justify-center items-center p-2 flex flex-col">
        <img
          src={toggle ? close : menu}
          alt="toggle-menu"
          className={`w-[30px] h-[30px] object-contain cursor-pointer`}
          onClick={() => setToggle((prev) => !prev)}
        />
        <ul
          className={`list-none justify-center bg-black-gradient m-3  p-2 rounded-lg text-white items-center absolute w-[90%] top-20 mt-3 right-4 ${
            toggle ? "flex flex-col" : "hidden"
          }`}
        >
          {navLinks.map((x) => (
            <li key={x.id} className={`mb-3 text-center cursor-pointer`}>
              {" "}
              {x.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
