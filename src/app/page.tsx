import { Hero } from "@/components/Hero";
import { SlideshowSection } from "@/components/SlideshowSection";
import { WhyUs } from "@/components/Whyus";
import { Offers } from "@/components/offers";
import { Gal } from "@/components/Gal";
import { Features } from "@/components/features";
import Join from "@/components/join";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
export default function App() {
  return (
    <main>
      <Hero />
      <SlideshowSection />
      <WhyUs />
      <Offers />
      <Gal />
      <Features />
      <Join />
      <Contact />
      <Footer />
    </main>
  );
}
