import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Join() {
  return (
    <section
      className=" my-20 lg:p-[200px] text-center lg:text-left mt-10 px-[2%] py-[50px] flex justify-evenly items-center lg:bg-transparent bg-[#0E204E]"
    >
      <div  className="lg:w-1/2 lg:block flex items-center flex-col">
        <h2 className=" font-playfair text-4xl text-white lg:text-[#0E204E] lg:hidden block">
          Become an Agent
        </h2>
        <h2 className=" font-playfair text-4xl text-white lg:text-[#0E204E] hidden lg:block">
          Become an <br /> Agent
        </h2>
        <p className="my-5 font-manrope text-white lg:text-[#0E204E]">
          a community that gives you a taste of happiness, a place you’ll love
          to live and an opportunity to build a home.
        </p>
        <Link
          href={"#"}
          className="hover:bg-opacity-80 rounded lg:rounded-none   transition-colors duration-75 lg:text-white text-[#0E204E] bg-white lg:bg-[#0E204E]  font-manrope w-[188px] h-[50px] flex justify-center items-center cursor-pointer"
        >
          Join Now
        </Link>
      </div>
      <div className="lg:flex items-center hidden">
        <div className=" bg-[#0E204E] block w-[100px] h-[200px]" />
        <Image
          src={"/img/agent.png"}
          width={400}
          height={0}
          alt="Agent"
          className="w-3/4"
        />
      </div>
    </section>
  );
}
