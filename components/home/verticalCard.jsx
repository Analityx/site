import Image from "next/image";

export const VerticalCard = ({ imageSrc, title, description }) => {
    return (
        <div className="mx-3 w-1/2 my-[5vh] flex justify-center items-center">
            <div className="w-full bg-[#1EA131] rounded-xl overflow-hidden shadow-md mb-4 py-4 px-5">
                <Image src={imageSrc} alt={title} className="w-full rounded-[20px] h-[30vh] object-fill" width={500} height={500} />
                <div className="pt-6 text-white p-2 my-5">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="mb-4  ">{description}</p>
                    <button className="bg-transparent border-2 font-bold border-white rounded-[20px] text-white px-4 py-2 hover:bg-white hover:text-black">
                        Conocé más
                    </button>
                </div>
            </div>
        </div>
    );
};