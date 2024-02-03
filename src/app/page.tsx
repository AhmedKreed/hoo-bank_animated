import { Hero, Business, Billing, CardDeal, About } from "@/containers";
import { Stats } from "@/components";
const page = () => (
  <>
    <Hero />
    <Stats />
    <Business />
    <Billing />
    <CardDeal />
    <About />
  </>
);

export default page;
