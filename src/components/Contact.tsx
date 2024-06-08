import React from "react";
export function Contact() {
    return (
        <section className="  lg:px-[200px] text-centermt-10 px-[2%] pb-[50px] flex flex-col justify-evenly items-center lg:bg-transparent bg-[#0E204E]">
            <h1 className=" font-playfair text-4xl text-white lg:text-[#0E204E]  block">Stay in Touch</h1>
            <p className="my-5 font-manrope text-white lg:text-[#0E204E]">
                Are you curious about Pineapple Island? Send a message
            </p>
            <form className="my-5 w-full grid gap-[25px] font-marope">
                <input type="text" placeholder="Name" className="border-2 w-full border-gray-300 p-2  " required />
                <input type='tel' placeholder="Phone No" className="border-2 w-full border-gray-300 p-2  " required />
                <input type="email" placeholder="Email" className="border-2 w-full border-gray-300 p-2  " required />
                <textarea placeholder="Your Message" className="border-2 border-gray-300 w-full p-2 resize-none"></textarea>
                <div className="flex justify-center">
                    <button className="hover:bg-opacity-80 hidden  transition-colors duration-75 bg-[#0E204E] text-white font-manrope text-[20px] w-[188px] h-[50px] lg:flex justify-center items-center cursor-pointer">Submit</button>
                </div>
            </form>
        </section>
    )
}