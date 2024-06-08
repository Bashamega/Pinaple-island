'use client'
import Image from "next/image";
import React from "react";
export function Gal() {
    return (
        <section className=" my-20   mt-20 px-[2%]">
            <h1 className="text-2xl font-playfair text-center ">Galleries</h1>
            <p className=" font-manrope text-center">a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.</p>
            <div className="lg:grid grid-cols-3 gap-2 w-full hidden ">
                {Array.from({ length: 9 }, (_, index) => (
                    <Image width={500} height={0} className="w-[500px]" src={`/img/gal/${index +1}.png`} alt={`Image ${index+1}`} />
                ))}
            </div>
            <div className="grid grid-cols-2 gap-2 w-full lg:hidden ">
                {Array.from({ length: 13 }, (_, index) => (
                    index === 4 ? (
                        <div className=" grid gap-2">
                            <Image width={500} height={0} className="w-[500px]" src={`/img/gal/mobile/${index + 1}.png`} alt={`Image ${index+1}`} />
                            <Image width={500} height={0} className="w-[500px]" src={`/img/gal/mobile/${index + 3}.png`} alt={`Image ${index+1}`} />
                        </div>
                    ):index==8?(
                        <div className=" grid gap-2">
                            <Image width={500} height={0} className="w-[500px]" src={`/img/gal/mobile/${index + 1}.png`} alt={`Image ${index+1}`} />
                            <Image width={500} height={0} className="w-[500px]" src={`/img/gal/mobile/${index + 2}.png`} alt={`Image ${index+1}`} />
                        </div>
                    ):index !==  6 && index !==9 && index !=12? (
                        <Image width={500} height={0} className="w-[500px]" src={`/img/gal/mobile/${index + 1}.png`} alt={`Image ${index+1}`} />
                    ) : (<></>)
                ))}
            </div>
            <Image src={'/img/gal/mobile/13.png'} width={500} height={0} className="w-full mt-2" alt="house"/>

        </section>
    )
}