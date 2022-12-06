import styles from "../style";
import { discount, arrowUp, robot } from "../assets";
import Getstarted from "./Getstarted";
const Mainsection = () => {
  return (
    <section
      id="home"
      className={`container mx-auto ${styles.paddingX} flex md:flex-row flex-col mx-auto my-0 items-center justify-between font-poppins`}
    >
      <div
        id="left-part"
        className={`flex-1 flex flex-col gap-3 rounded-lg bc-primary`}
      >
        <div
          className={` flex flex-row  gap-3 justify-start w-fit px-3 py-1 items-center bg-discount-gradient rounded-[10px]`}
        >
          <img src={discount} alt="img" />
          <p className={`sm:text-xl text-sm xs:w-[100%]`}>
            <span>20% </span>
            <span className={`text-dimWhite`}>DISCOUNT FOR </span>
            <span>1 MONTH</span>
            <span className={`text-dimWhite`}> ACCOUNT</span>
          </p>
        </div>
        <div
          className={`flex flex-row items-center justify-between md:w-[100%] xl:w-[60%]`}
        >
          <p
            className={`xs:text-7xl text-4xl flex flex-col font-semibold sm:leading-[90px]`}
          >
            The Next <span className={`text-gradient`}>Generation</span>
          </p>
          <div className="sm:block hidden">
            <Getstarted />
          </div>
        </div>
        <h1 className="xs:text-7xl text-4xl font-semibold sm:leading-[90px] w-f">
          Payment Method.
        </h1>
        <div>
          <p className={`xs:w-[70%] w-[100%]`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs.
            <br />
            We examine annual percentage rates,annual fees.
          </p>
        </div>
      </div>
      <div
        id="right-part"
        className="flex-1 xl:w-[60rem] xl:h-[60rem] relative"
      >
        <img
          className={`object-contain mx-auto max-w-[100%] max-h-[100%]  z-[15] `}
          src={robot}
          alt="img"
        />
        {/* <div className={`absolute vector-16 z-[0]`} /> */}
        <div className="absolute z-[0] rounded-full w-[40%] h-[60%] right-[10%] top-[10%] pink__gradient" />
        <div className="absolute z-[1] rounded-full w-[80%] h-[40%] right-[10%] bottom-[30%] blue__gradient" />
        <div className="absolute z-[2] rounded-full w-[50%] h-[60%] right-[10%] bottom-[10%] white__gradient" />
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <Getstarted />
        </div>
      </div>
    </section>
  );
};

export default Mainsection;
