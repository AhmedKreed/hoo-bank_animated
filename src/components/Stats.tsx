"use client";
import { stats } from "@/constants";
import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
const Stats = () => (
  <section className="section my-14">
    <motion.div
      className="flex flex-wrap lg:justify-between flex-row justify-center lg:gap-0 gap-12"
      variants={textContainer}
      initial="hidden"
      whileInView="show"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className="flex items-center"
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="sm:text-[40px] text-[30px] font-semibold sm:leading-[53px] leading-[43px] mr-6">
            {stat.value}
          </h1>
          <p className="text-[20px] leading-[130%] text-gradient">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Stats;
