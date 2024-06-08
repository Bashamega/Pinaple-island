import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export function Slideshow() {
    return (
        <div className=" bg-[#0E204E] relative text-white lg:w-3/4 w-full lg:flex">
            <Image src={'/img/House.png'} width={300} height={0} alt="a house" className=" lg:w-1/2 w-full" />
            <IoIosArrowBack size={30} className="absolute top-[50%] left-[2%] cursor-pointer z-50 text-white"/>
            <IoIosArrowForward size={30} className="absolute top-[50%] lg:left-[42%] right-[2%] z-50 cursor-pointer text-white"/>
            <div className="font-manrope flex p-2 items-center absolute lg:static top-0 left-0 w-full px-10 h-full lg:bg-transparent bg-[rgba(0,0,0,.5)]">
                <p className="text-center lg:text-left text-white">Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.</p>
            </div>
        </div>
    )
}