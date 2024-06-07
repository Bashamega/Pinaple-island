import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export function Slideshow() {
    return (
        <div className=" bg-[#0E204E] relative text-white w-3/4 flex">
            <Image src={'/img/House.png'} width={300} height={0} alt="a house" className=" w-[50%]" />
            <IoIosArrowBack size={30} className="absolute top-[50%] left-[2%] cursor-pointer"/>
            <IoIosArrowForward size={30} className="absolute top-[50%] left-[42%] cursor-pointer"/>
            <div className="font-manrope flex p-2 items-center">
                <p>Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.</p>
            </div>
        </div>
    )
}