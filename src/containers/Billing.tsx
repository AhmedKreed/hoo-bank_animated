"use client";
import Image from "next/image";
import { bill, apple, google } from "@/assets";
import { fadeIn, slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
const Billing = () => (
  <section className="section padding-Y" id="product">
    <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
      >
        <Image
          src={bill}
          alt={"Image"}
          width={530}
          className="lg:mb-0 mb-20 lg:mr-auto"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="sm:leading-[160%] leading-[130%] sm:text-5xl text-4xl font-semibold mb-6 max-w-[513px]">
          Easily control your billing & invoicing.
        </h1>
        <p className="max-w-[470px] leading-[160%] mb-12 text-dimWhite tracking-wide">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex sm:gap-8 sm:justify-start justify-between">
          <Image src={apple} alt={"Image"} />
          <Image src={google} alt={"Image"} />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Billing;
