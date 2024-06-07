import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { SlideshowSection } from "@/components/SlideshowSection";
import { WhyUs } from "@/components/Whyus";
import { Offers } from "@/components/offers";

export default function App(){
  return(
    <main>
      <Nav/>
      <Hero/>
      <SlideshowSection/>
      <WhyUs/>
      <Offers/>
    </main>
  )
}