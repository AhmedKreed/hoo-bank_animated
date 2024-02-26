"use client";
import { clients } from "@/constants";
import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Brand = () => {
  return (
    <section className="section mt-9 mb-[100px]">
      <motion.div
        className="flex flex-wrap justify-around items-center gap-10"
        variants={textContainer}
        initial="hidden"
        whileInView="show"
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <Image src={client.logo} alt={"logo"} width={192} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Brand;
