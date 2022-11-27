// import styles from "../style";
import { discount, arrowUp, robot } from "../assets";
const Mainsection = () => {
  return (
    <section
      id="home"
      className={`container p-2 flex xs:flex-row flex-col mx-auto items-center justify-between`}
    >
      <div
        id="left-part"
        className={`flex flex-col gap-3 rounded-lg bc-primary p-3`}
      >
        <div
          className={`flex flex-row  gap-3 justify-start w-fit px-3 py-1 items-center bg-discount-gradient rounded-[10px]`}
        >
          <img src={discount} alt="img" />
          <p className={`sm:text-xl text-sm xs:w-[100%]`}>
            <span>20% </span>
            <span className={`text-dimWhite`}>DISCOUNT FOR </span>
            <span>1 MONTH</span>
            <span className={`text-dimWhite`}> ACCOUNT</span>
          </p>
        </div>
        <div className={`flex flex-row items-center gap-3`}>
          <p
            className={`xs:text-7xl text-xl flex flex-col font-bold leading-relaxed`}
          >
            The Next <span className={`text-secondary`}>Generation</span>{" "}
            Payment Method.
          </p>
          <div
            className={`rounded-full border-2  border-secondary h-fit w-fit xs:p-9 p-4 xs:ml-[-20%] mb-[15%]`}
          >
            <p
              className={`flex flex-col xs:text-lg text-xs justify-center text-secondary`}
            >
              <span className={`flex flex-row`}>
                Get
                <img className={`flex-1 w-6 h-6`} src={arrowUp} alt="img" />
              </span>
              Started.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div id="right-part" className={`xs:w-[50%] w-[100%]`}>
        <img src={robot} alt="img" />
      </div>
    </section>
  );
};

export default Mainsection;
