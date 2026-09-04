import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { Process } from "@/components/sections/Process";
import { Metrics } from "@/components/sections/Metrics";
import { Insights } from "@/components/sections/Insights";
import { ContactBand } from "@/components/sections/ContactBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Team variant="home" />
      <Services />
      <Approach />
      <Process />
      <Metrics />
      <Insights variant="home" />
      <ContactBand />
    </>
  );
}
