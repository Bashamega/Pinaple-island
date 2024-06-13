import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export function Contact() {
  return (
    <section className="  lg:px-[200px] text-centermt-10 px-[2%] pb-[50px] flex flex-col justify-evenly items-center">
      <h2 className=" font-playfair text-4xl text-[#0E204E]  block">
        Stay in Touch
      </h2>
      <p className="my-5 font-manrope text-[#0E204E]">
        Are you curious about Pineapple Island? Send a message
      </p>
      <form className="my-5 w-full grid gap-[25px] font-marope">
        <Input type="text" placeholder="Name" required/>
        <Input
          type="tel"
          placeholder="Phone No"
          required
        />
        <Input
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          placeholder="Message"
          className="border-2 border-gray-300 w-full p-2 resize-none hidden lg:block"
        ></textarea>
        <label className="text-gray-400 lg:hidden">Message</label>
        <textarea className="border-2 border-gray-300 w-full p-2 resize-none lg:hidden block"></textarea>

        <div className="flex justify-center">
          
          <Button variant={"ocean"}>
            Send
          </Button>
        </div>
      </form>
    </section>
  );
}
