import React from "react";
import { Slideshow } from "./Slideshow";
export function SlideshowSection() {
  return (
    <section className="lg:flex relative lg:mx-[188px] mx-2 my-1 justify-between items-center">
      <div className="font-playfair">
        <h2 className="text-4xl text-center lg:text-left">About</h2>
        <h3 className="text-4xl hidden lg:block">
          Pineapple Island:
          <br />
          GenZ and Millenial
          <br />
          Pineapple Island: GenZ and Millenial
        </h3>

        <h3 className="text-4xl block lg:hidden text-center">
          Prineapple Island
        </h3>
      </div>
      <Slideshow />
    </section>
  );
}
