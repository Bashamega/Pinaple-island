import React from "react";
import { Slideshow } from "./Slideshow";
export function SlideshowSection() {
    return (
        <section className="lg:flex relative lg:mx-[188px] mx-2 my-1 justify-between items-center">
            <div className="font-playfair">
                <h1 className="text-4xl hidden lg:block">
                    Pineapple Island:
                </h1>
                <h1 className="text-4xl hidden lg:block">
                    GenZ and Millenial
                </h1>
                <h1 className="text-4xl lg:hidden block">
                    Pineapple Island: GenZ and Millenial
                </h1>
                <h1 className="text-4xl">
                    Abode
                </h1>
            </div>
            <Slideshow/>

        </section>
    )
}