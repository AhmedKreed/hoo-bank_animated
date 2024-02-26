"use client";
import { motion } from "framer-motion";
import { Button } from ".";
import { zoomIn } from "@/utils/motion";

const CTA = () => {
  return (
    <section className="section padding-Y ">
      <motion.div
        variants={zoomIn(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="sm:px-[72px] px-[40px]  py-24 flex gap-24 items-center justify-between rounded-[20px] bg-black-gradient-2 flex-wrap md:flex-nowrap"
      >
        <div>
          <h1 className="sm:text-[48px] text-[38px] font-semibold leading-[140%] mb-6">
            Let’s try our service now!
          </h1>
          <p className="max-w-[445px] lg:text-[18px] leading-[160%] text-dimWhite">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button />
      </motion.div>
    </section>
  );
};

export default CTA;
