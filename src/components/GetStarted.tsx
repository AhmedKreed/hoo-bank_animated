import Image from "next/image";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`flex items-center justify-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`flex items-center justify-center flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`flex flex-row gap-3`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <Image
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className=" font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
