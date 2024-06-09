import Image from "next/image";
import React from "react";
import { Photo } from "./ui/photo";

export function Features() {
  return (
    <section className=" my-20  hidden lg:mt-20 lg:px-[200px] px-[2%] lg:flex  items-center">
      <div className="w-1/2 flex items-center">
        <Photo content={<Image
          src={"/img/table.png"}
          width={300}
          height={0}
          alt="Table"
          className="w-[300px] h-[400px]"
        ></Image>} rtl={true} height={180}/>
        
      </div>
      <div className="w-1/3">
        <h2 className="text-2xl font-playfair text-center ">
          Amazing Features
        </h2>
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={
              " h-[40px] items-center  w-full flex justify-evenly " +
              (index % 2 !== 0 ? "" : "bg-slate-200")
            }
          >
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <input type="checkbox" checked={true} />
          </div>
        ))}
      </div>
    </section>
  );
}
