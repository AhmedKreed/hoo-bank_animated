import { stats } from "@/constants";
const Stats = () => (
  <section className="section my-14">
    <div className="flex flex-wrap lg:justify-between flex-row justify-center lg:gap-0 gap-12">
      {stats.map((stat) => (
        <div key={stat.id} className="flex items-center">
          <h1 className="sm:text-[40px] text-[30px] font-semibold sm:leading-[53px] leading-[43px] mr-6">
            {stat.value}
          </h1>
          <p className="text-[20px] leading-[130%] text-gradient">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
