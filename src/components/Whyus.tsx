import Image from "next/image";
import React from "react";
export function WhyUs() {
  return (
    <section className="  lg:text-white text-center lg:text-left font-playfair pt-20 lg:px-32 px-2 h-[500px] my-5 bg-cover lg:flex justify-evenly lg:bg-[url(/img/Rectangle.png)]">
      <h2 className="text-4xl hidden lg:block">
        Why
        <br />
        Choose
        <br />
        Pineapple
        <br />
        Island
      </h2>
      <h2 className="text-4xl block lg:hidden">
        Why Choose
        <br />
        Pineapple Island
      </h2>
      <div className="lg:bg-white lg:w-3/4 h-[450px] lg:shadow-2xl lg:flex block w-full">
        <div className=" my-2 font-manrope text-[#0E204E] lg:text-black lg:w-[50%] lg:flex items-center justify-center lg:h-full">
          <p className="lg:w-3/4">
            Pineapple Island is the most sought-after community in Ibadan that
            values and puts the needs of their clients first. It is a territory
            with loft complexes that creates a country life and homely feeling
            that is integrated with industrial development. A perfect,
            professional built abode that gives you the true taste of beauty and
            happiness.
          </p>
        </div>
        <Image
          src={"/img/kitchen.png"}
          width={400}
          height={0}
          alt="Kitchen"
          className="w-full lg:w-1/2"
        ></Image>
      </div>
    </section>
  );
}
