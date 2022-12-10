import React from "react";
import { logo } from "../assets";
import { socialMedia, footerLinks } from "../static-data";

const Footer = () => {
  return (
    <section className="mb-0 py-5 bg-primary">
      <div
        className={`px-[30px] container flex flex-col justify-between items-center mx-auto  font-poppins w-full h-fit gap-12`}
      >
        <div className="up flex sm:flex-row flex-col sm:justify-between justify-start gap-5 items-center w-full">
          <div
            id="left"
            className="flex-1 flex flex-col items-start justify-center"
          >
            <div className="w-[300px] h-[80px]">
              <img src={logo} alt="img" />
            </div>
            <p className="text-dimWhite w-full">
              A new way to make the payments
              <br />
              easy, reliable and secure.
            </p>
          </div>
          <div
            id="right"
            className="flex-1 flex flex-row justify-between items-start gap-5"
          >
            {footerLinks.map((x) => {
              return (
                <div
                  key={x.title}
                  className="flex flex-col justify-start items-start"
                >
                  <div>
                    <h3 className="text-md font-semibold">{x.title}</h3>
                    <ul>
                      {x.links.map((x) => {
                        return (
                          <li key={x.name} className="text-dimWhite py-1">
                            <a
                              href={x.link}
                              className="footer-link-hover block w-full h-full"
                            >
                              {x.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="down flex  sm:flex-row flex-col justify-between items-center w-full border-t-2 border-dimWhite">
          <div>
            <p className="text-dimWhite flex-1 flex sm:flex-row flex-col p-2 justify-center items-center gap-5">
              <span>Copyright &#169;</span>
              <span>2021 HooBank. All Rights Reserved.</span>
            </p>
          </div>
          <div>
            <div className="flex-1  flex justify-center items-center gap-8">
              {socialMedia.map((x) => {
                return (
                  <div key={x.id}>
                    <a href={x.link}>
                      <img src={x.icon} alt="img" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
