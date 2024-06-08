import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { SlideshowSection } from "@/components/SlideshowSection";
import { WhyUs } from "@/components/Whyus";
import { Offers } from "@/components/offers";
import { Gal } from "@/components/Gal";
import { Features } from "@/components/features";
import Join from "@/components/join";
export default function App(){
  return(
    <main>
      <Nav/>
      <Hero/>
      <SlideshowSection/>
      <WhyUs/>
      <Offers/>
      <Gal/>
      <Features/>
      <Join/>
    </main>
  )
}