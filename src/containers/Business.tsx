"use client";
import { Button } from "@/components";
import { features } from "@/constants";
import { fadeIn, textContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
const Business = () => (
  <section className="section padding-Y " id="features">
    <div className="flex justify-between lg:flex-row flex-col lg:gap-10 gap-20">
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="sm:text-5xl text-4xl font-semibold mb-6 sm:leading-[160%] leading-[130%]">
          You do the business, we’ll handle the money.
        </h1>
        <p className="lg:max-w-[470px] leading-[170%] text-dimWhite mb-12 tracking-wide">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </motion.div>
      <div className="lg:max-w-[470px] flex flex-col gap-14">
        {features.map((feat, index) => (
          <motion.div
            key={feat.id}
            className="flex p-5 items-center rounded-[20px] feat_hover cursor-pointer"
            variants={textVariant(0 + (index + 1) / 5)}
            initial="hidden"
            whileInView="show"
          >
            <div className="bg-[#09977C] bg-opacity-10 min-w-16  min-h-16 max-h-16 rounded-full flex items-center justify-center mr-5">
              <Image src={feat.icon} alt={"feat icon"} width={38} height={38} />
            </div>
            <div>
              <h4 className="font-semibold leading-[130%] text-[18px] mb-2">
                {feat.title}
              </h4>
              <p className="text-dimWhite text-[14px]">{feat.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Business;
