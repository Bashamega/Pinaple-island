import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { SlideshowSection } from "@/components/SlideshowSection";

export default function App(){
  return(
    <main>
      <Nav/>
      <Hero/>
      <SlideshowSection/>
    </main>
  )
}