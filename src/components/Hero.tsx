import React from "react";
import Image from "next/image";
export function Hero() {
  return (
    <section dir="rtl" className="flex relative mx-2">
      <Image
        src={"/img/VillaDesktop.png"}
        width={1368}
        className=" w-[60%] hidden lg:block"
        height={717}
        alt="Villa view"
      />
      <Image
        src={"/img/VillaMobile.png"}
        width={1368}
        className=" w-[100%] h-auto block lg:hidden"
        height={0}
        alt="Villa view"
      />

      <div
        className="text-center lg:text-left  py-[20px] px-[20px] lg:w-[50%] lg:h-[70%] w-full h-full  font-playfair absolute lg:left-[10%]  lg:top-[10%] text-white top-0 left-0 lg:bg-[#0E204E] lg:block flex flex-col items-center justify-center"
        dir="ltr"
      >
        <h2 className="text-4xl text-white">
          Pineapple Island:
          <br />
          GenZ and Millenial
          <br />
          Abode
        </h2>
        <br />
        <p className="font-manrope  text-white">
          a community that gives you a taste of happiness, a place you’ll love
          to live and an opportunity to build a home.
        </p>
        <button className="font-manrope lg:hidden text-lg bg-white rounded text-black p-2 hover:bg-slate-100 transition-colors duration-100">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
