import Benefits from "@/components/Benefits";
import HeroSec from "@/components/HeroSec";
import About from "@/components/About";
import Image from "next/image";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Metrics from "@/components/Metrics";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <HeroSec />
      <Benefits />
      <About/>
      <Services/>
      <Testimonials/>
      <Metrics/>
      <Pricing/>
      <Blog/>
    </>
  );
}
