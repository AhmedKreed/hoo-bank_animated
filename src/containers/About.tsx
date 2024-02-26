"use client";
import { feedback } from "@/constants";
import Image from "next/image";
import { quotes } from "@/assets";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textContainer,
  textVariant,
  textVariant2,
} from "@/utils/motion";
const About = () => (
  <section className="section padding-Y" id="clients">
    <motion.div
      className="flex lg:items-center mb-20 lg:flex-row flex-col"
      variants={textContainer}
      initial="hidden"
      whileInView="show"
    >
      <motion.h1
        className="sm:text-[48px] text-[36px] leading-[130%] sm:leading-[170%]  font-semibold max-w-[470px] lg:mb-0 mb-4"
        variants={textVariant(0)}
        initial="hidden"
        whileInView="show"
      >
        What people are saying about us
      </motion.h1>
      <motion.p
        className="leading-[170%]  text-dimWhite max-w-[400px] lg:mx-auto "
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
      >
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </motion.p>
    </motion.div>
    <motion.div
      className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 "
      variants={staggerContainer(1)}
      initial="hidden"
      whileInView="show"
    >
      {feedback.map((feed, index) => (
        <motion.div
          variants={slideIn("left", "spring", 0.5 + index / 2, 0.5)}
          initial="hidden"
          whileInView="show"
          key={feed.id}
          className="max-w-[370px] flex-1 feat_hover px-10 py-[60px] rounded-[20px] flex flex-col justify-between cursor-pointer even:mx-auto last:ml-auto"
        >
          <Image src={quotes} alt={"quotes"} width={42.6} height={27.6} />
          <p className="leading-[180%] mt-10 lgtext-[18px] text-[16px] tracking-wider flex-1">
            {feed.content}
          </p>
          <div className="mt-6 flex">
            <Image src={feed.img} alt={"img"} width={48} height={48} />
            <div className="ml-4">
              <p className="text-xl">{feed.name}</p>
              <p className="text-dimWhite">{feed.title}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default About;
