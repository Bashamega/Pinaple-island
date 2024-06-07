import React from "react";
import { Slideshow } from "./Slideshow";
export function SlideshowSection() {
    return (
        <section className="flex relative mx-[188px] my-1 justify-between items-center">
            <div className="font-playfair">
                <h1 className="text-4xl">
                    Pineapple Island:
                </h1>
                <h1 className="text-4xl">
                    GenZ and Millenial
                </h1>
                <h1 className="text-4xl">
                    Abode
                </h1>
            </div>
            <Slideshow/>

        </section>
    )
}