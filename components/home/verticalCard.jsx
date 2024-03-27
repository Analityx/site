import Image from "next/image";
import { Reveal } from "../utils/reveal";
import Link from "next/link";

export const VerticalCard = ({ imageSrc, title, description, href }) => {
    return (
        <div className="mx-3 w-1/2 max-sm:w-full my-[2vh] max-sm:my-3 flex justify-center items-center">
            <div className="w-full bg-[#1EA131] rounded-xl overflow-hidden shadow-md mb-4 py-4 px-5">
                <Reveal>
                    <Image src={imageSrc} alt={title} className="w-full rounded-[20px] h-[30vh] object-fill" width={500} height={500} />
                </Reveal>
                <div className="pt-6 text-white p-2 my-5">
                    <Reveal>
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    </Reveal>
                    <Reveal>
                        <p className="mb-4  ">{description}</p>
                    </Reveal>
                    <Reveal>
                        <div className="max-sm:min-h-[7vh] relative">
                            <Link href={href} className="bg-transparent border-2 my-2 font-bold border-white rounded-[20px] text-white px-4 py-2 hover:bg-white hover:text-black absolute">
                                Conocé más
                            </Link>
                        </div>
                    </Reveal>


                </div>
            </div>
        </div>
    );
};