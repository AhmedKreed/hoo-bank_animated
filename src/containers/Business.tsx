import { Button } from "@/components";
import { features } from "@/constants";
import Image from "next/image";
const Business = () => (
  <section className="section padding-Y ">
    <div className="flex justify-between lg:flex-row flex-col  lg:gap-0 gap-20">
      <div className="">
        <h1 className="sm:text-5xl text-4xl font-semibold mb-6 sm:leading-[160%] leading-[130%]">
          You do the business, we’ll handle the money.
        </h1>
        <p className="lg:max-w-[470px] leading-[170%] text-dimWhite mb-12 ">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="lg:max-w-[470px] flex flex-col gap-14">
        {features.map((feat) => (
          <div
            key={feat.id}
            className="flex p-5 items-center rounded-[20px] feat_hover cursor-pointer"
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Business;
