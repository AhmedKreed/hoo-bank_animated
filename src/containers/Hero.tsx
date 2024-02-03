import { discount, robot } from "@/assets";
import { GetStarted } from "@/components";
import Image from "next/image";
const Hero = () => (
  <section
    id="home"
    className="hero-container hero-section padding-Y flex lg:flex-row flex-col relative"
  >
    <div className="flex flex-1 flex-col lg:mb-0 mb-16">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-3 w-fit">
        <Image src={discount} alt={"discount"} />
        <p className="text-dimWhite ml-3">
          <span className="text-white">20%</span> DISCOUNT FOR
          <span className="text-white"> 1 MONTH</span> ACCOUNT
        </p>
      </div>
      <div className="flex justify-between items-center 2xl:w-fit ">
        <h1 className="flex-1 font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px] ">
          The Next <br className="block max-sm:hidden" />
          <span className="text-gradient">Generation </span>
        </h1>
        <div className="max-sm:hidden flex mr-4">
          <GetStarted />
        </div>
      </div>
      <h1 className=" font-semibold sm:text-[62px] text-[52px] text-white sm:leading-[100px] leading-[75px] mb-10">
        Payment Method.
      </h1>
      <p className="text-lg text-dimWhite max-w-[470px]">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className="relative flex justify-center items-center lg:my-0 my-10">
      <Image
        src={robot}
        alt={"billing"}
        className="w-[100%] h-[100%] relative z-[5] max-h-[90vh]"
      />
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>
    <div className={`sm:hidden flex justify-center items-center`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
