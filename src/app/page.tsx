import { Hero, Business, Billing, CardDeal, About, Footer } from "@/containers";
import { Brand, CTA, Stats } from "@/components";
const page = () => (
  <>
    <Hero />
    <Stats />
    <Business />
    <Billing />
    <CardDeal />
    <About />
    <Brand />
    <CTA />
    <Footer />
  </>
);

export default page;
