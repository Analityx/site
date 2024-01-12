import Image from "next/image";

export function ImageAbout({ src }) {
    return (
        <div className="max-h-[25vh] overflow-hidden flex items-center">
            <Image src={src}
                className="w-full h-full "
                alt="Separador Analytics"
                width={1920}
                height={1080} />
        </div>
    )
};
