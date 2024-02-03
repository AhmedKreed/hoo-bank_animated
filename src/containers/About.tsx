import { feedback } from "@/constants";
import Image from "next/image";
import { quotes } from "@/assets";
const About = () => (
  <section className="section padding-Y">
    <div>
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div>
        {feedback.map((feed) => (
          <div key={feed.id}>
            <Image src={quotes} alt={"quotes"} width={42.6} height={27.6} />
            <p>{feed.content}</p>
            <div>
              <Image src={feed.img} alt={"img"} />
              <div>
                <p>{feed.name}</p>
                <p>{feed.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
