import { clients } from "@/constants";
import Image from "next/image";

const Brand = () => {
  return (
    <section className="section mt-9 mb-[100px]">
      <div className="flex flex-wrap justify-around items-center gap-10">
        {clients.map((client) => (
          <Image key={client.id} src={client.logo} alt={"logo"} width={192} />
        ))}
      </div>
    </section>
  );
};

export default Brand;
