import Image from "next/image";
import { Reveal } from "../utils/reveal";
import Link from "next/link";
import "@/app/globals.css"

export const VerticalCard = ({ imageSrc, title, description, href, index }) => {
    return (
        <div className="md:mx-3 lg:mx-3 max-sm:px-3 w-full my-[2vh] max-sm:my-3 flex justify-center items-center">
            <div className={` w-full flex ${index === 1 ? ("flex-row-reverse max-sm:flex-col-reverse flex-wrap-reverse") : ("max-sm:flex-col-reverse flex-wrap")} rounded-xl overflow-hidden shadow-md mb-4 py-4 px-5`}>
                <div className="w-1/2 max-sm:w-full px-2 ">
                    <Reveal>
                        <div className=" overflow-hidden max-h-[45vh] rounded-2xl">
                            <Image src={imageSrc} alt={title} className="object-cover" width={1920} height={1080} />
                        </div>
                        <div className="md:hidden xl:hidden 2xl:hidden lg:hidden w-full flex pt-3 justify-center">
                            <Link href={href} className="">
                                <button className="bg-transparent border-2 hover:bg-[#1EA131] hover:text-white border-[#1EA131] rounded-[20px] font-bold text-[#1EA131] px-4 py-2 ">
                                    <span className="text-xl">Conoce Más</span>
                                </button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
                <div className="my-5 px-4 w-1/2 max-sm:w-full flex flex-wrap justify-center items-center">
                    <div className="w-full">
                        <Reveal>
                            <h2 className="2xl:text-4xl lg:text-3xl font-aspekta max-sm:pb-2 pb-5 text-2xl text-center font-bold mb-2 text-[#474747]">{title}</h2>
                        </Reveal>
                        <Reveal>
                            <div className="w-full flex justify-center ">
                                <div className="w-[80%] max-sm:w-full">
                                    <p className="mb-4 max-sm:mb-2 font-arial ">{description}</p>
                                </div>
                            </div>
                            <div className="max-sm:hidden w-full flex pt-3 justify-center">
                                <Link href={href} className="">
                                    <button className="bg-transparent border-2 hover:bg-[#1EA131] hover:text-white border-[#1EA131] rounded-[20px] font-bold text-[#1EA131] px-4 py-2 ">
                                        <span className="text-xl">Conoce Más</span>
                                    </button>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>

            </div>
        </div>
    );
};