import { Hero } from "@/components/home/Hero";
import { AboutEmaus } from "@/components/home/AboutEmaus";
import { Testimonials } from "@/components/home/Testimonials";
import { UpcomingRetreats } from "@/components/home/UpcomingRetreats";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutEmaus />
      <Testimonials />
      <UpcomingRetreats />
    </>
  );
}
