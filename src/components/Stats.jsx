import styles from "../style";
import { stats } from "../static-data";
const Stats = () => {
  return (
    <section
      className={`container mx-auto ${styles.flexStart} items-center  p-4 sm:flex-row flex-col font-poppins mx-auto w-full`}
    >
      {stats.map((x) => {
        return (
          <div
            key={x.id}
            className={`flex sm:justify-center justify-start items-start sm:p0 pl-3 gap-4 mt-3 xs:text-2xl text-lg  font-poppins  w-[100%]`}
          >
            <h1 className="xs:text-3xl text-lg font-semibold">{x.value}</h1>
            <h1 className="text-gradient uppercase">{x.title}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
