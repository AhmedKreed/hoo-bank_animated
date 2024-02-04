import { feedback } from "@/constants";
import Image from "next/image";
import { quotes } from "@/assets";
const About = () => (
  <section className="section padding-Y" id="clients">
    <div className="flex lg:items-center mb-20 lg:flex-row flex-col">
      <h1 className="sm:text-[48px] text-[36px] leading-[130%] sm:leading-[170%]  font-semibold max-w-[470px] lg:mb-0 mb-4">
        What people are saying about us
      </h1>
      <p className="leading-[170%]  text-dimWhite max-w-[400px] lg:mx-auto ">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      {feedback.map((feed) => (
        <div
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
        </div>
      ))}
    </div>
  </section>
);

export default About;
