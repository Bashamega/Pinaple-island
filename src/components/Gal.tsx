"use client";
import Image from "next/image";
import React from "react";
export function Gal() {
  return (
    <section className=" my-20   mt-20 px-[2%]">
      <h2 className="text-2xl font-playfair text-center hidden lg:block ">
        Galleries
      </h2>
      <p className=" font-manrope text-center hidden lg:block">
        a community that gives you a taste of happiness, a place you’ll love to
        live and an opportunity to build a home.
      </p>
      <h2 className="text-2xl font-playfair text-center lg:hidden block ">
        Available Homes
      </h2>
      <p className=" font-manrope text-center lg:hidden block mx-5">
        a community that gives you a taste of happiness, a place you’ll love to
        live and an opportunity to build a home.
      </p>

      <div className="lg:grid grid-cols-3 gap-2 w-full hidden ">
        {Array.from({ length: 9 }, (_, index) => (
          <Image
            key={index + 1}
            width={500}
            height={0}
            className="w-[500px]"
            src={`/img/gal/${index + 1}.png`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 w-full lg:hidden ">
        {Array.from({ length: 13 }, (_, index) =>
          index === 4 ? (
            <div className=" grid gap-2" key={index + 1}>
              <Image
                width={500}
                height={0}
                className="w-[500px]"
                src={`/img/gal/mobile/${index + 1}.png`}
                alt={`Image ${index + 1}`}
              />
              <Image
                width={500}
                height={0}
                className="w-[500px]"
                src={`/img/gal/mobile/${index + 3}.png`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ) : index == 8 ? (
            <div className=" grid gap-2">
              <Image
                width={500}
                height={0}
                className="w-[500px]"
                src={`/img/gal/mobile/${index + 1}.png`}
                alt={`Image ${index + 1}`}
              />
              <Image
                width={500}
                height={0}
                className="w-[500px]"
                src={`/img/gal/mobile/${index + 2}.png`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ) : index !== 6 && index !== 9 && index != 12 ? (
            <Image
              width={500}
              height={0}
              className="w-[500px]"
              src={`/img/gal/mobile/${index + 1}.png`}
              alt={`Image ${index + 1}`}
            />
          ) : (
            <></>
          ),
        )}
      </div>
      <Image
        src={"/img/gal/mobile/13.png"}
        width={500}
        height={0}
        className="w-full mt-2 lg:hidden block"
        alt="house"
      />
    </section>
  );
}
