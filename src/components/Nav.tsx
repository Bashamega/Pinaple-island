"use client";
import Link from "next/link";
import React, { useState } from "react";
export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <nav className="mt-[50px] lg:mx-[100px] mx-[20px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[#0E204E] text-2xl font-playfair text-[32px]">
          Pinapple
          <br />
          Island
        </h1>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-black p-3"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className={"lg:flex lg:justify-evenly w-1/2 hidden"}>
          <Link href={"#"} className=" text-[#232323] font-manrope text-[20px]">
            About us
          </Link>
          <Link href={"#"} className=" text-[#232323] font-manrope text-[20px]">
            What we do?
          </Link>
          <Link href={"#"} className=" text-[#232323] font-manrope text-[20px]">
            Project
          </Link>
        </div>
        <Link
          href={"#"}
          className="hover:bg-opacity-80 hidden  transition-colors duration-75 bg-[#0E204E] text-white font-manrope text-[20px] w-[188px] h-[50px] lg:flex justify-center items-center cursor-pointer"
        >
          Get in Touch
        </Link>
      </div>

      {isMobileMenuOpen ? (
        <div className=" flex flex-col h-[50vh] pt-2">
          <Link
            href={"#"}
            className="hover:bg-opacity-80   transition-colors duration-75 bg-[#0E204E] text-white font-manrope text-[20px] w-full mt-2 h-[50px] flex justify-center items-center cursor-pointer"
          >
            About us
          </Link>
          <Link
            href={"#"}
            className="hover:bg-opacity-80   transition-colors duration-75 bg-[#0E204E] text-white font-manrope text-[20px] w-full mt-2 h-[50px] flex justify-center items-center cursor-pointer"
          >
            What we do?
          </Link>
          <Link
            href={"#"}
            className="hover:bg-opacity-80   transition-colors duration-75 bg-[#0E204E] text-white font-manrope text-[20px] w-full mt-2 h-[50px] flex justify-center items-center cursor-pointer"
          >
            Projects
          </Link>
          <Link
            href={"#"}
            className="hover:bg-opacity-80   transition-colors duration-75 bg-[#0E204E] text-white font-manrope text-[20px] w-full mt-2 h-[50px] flex justify-center items-center cursor-pointer"
          >
            Get in Touch
          </Link>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
