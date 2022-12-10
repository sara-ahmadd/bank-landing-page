import styles from "../style";
import { stats } from "../static-data";
const Stats = () => {
  return (
    <section
      className={`px-[30px] container flex justify-between items-start  p-4 sm:flex-row sm:flex-wrap flex-col font-poppins mx-auto w-full`}
    >
      {stats.map((x) => {
        return (
          <div
            key={x.id}
            className={`flex xs:justify-center justify-start items-start sm:p0 pl-3 gap-4 mt-3 xs:text-2xl text-lg  font-poppins  w-fit`}
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
