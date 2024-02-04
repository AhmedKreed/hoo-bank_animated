import Image from "next/image";
import { card } from "@/assets";
import { Button } from "@/components";

const CardDeal = () => (
  <section className="section padding-Y">
    <div className="flex lg:flex-row flex-col lg:gap-10 justify-center items-center ">
      <div>
        <h1 className="sm:text-5xl text-4xl font-semibold mb-6 sm:leading-[160%] leading-[130%]">
          Find a better card deal in few easy steps.
        </h1>
        <p className="lg:max-w-[470px] leading-[170%] text-dimWhite mb-12 tracking-wide">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <Image src={card} alt={"card"} width={513} />
    </div>
  </section>
);

export default CardDeal;
