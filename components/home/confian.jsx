import Image from "next/image"
import "../../public/assets/css/home.css"
import Link from "next/link";

export function Confian() {
    const logos = [
        {
            name: "Coca Cola",
            imgSrc: "/assets/img/empresas/Coca-Cola_logo.svg",
            link: "/"
        },
        {
            name: "Google",
            imgSrc: "/assets/img/empresas/Google_2015_logo.svg",
            link: "/"
        },
        {
            name: "Unicef",
            imgSrc: "/assets/img/empresas/Logo_of_UNICEF.svg",
            link: "/"
        },
        {
            name: "Pro",
            imgSrc: "/assets/img/empresas/Propuesta_Republicana.svg",
            link: "/"
        },
        {
            name: "Microsoft",
            imgSrc: "/assets/img/empresas/Microsoft_logo_(2012).svg",
            link: "/"
        },
        {
            name: "Disco",
            imgSrc: "/assets/img/empresas/Disco-Supermarket-Logo.svg",
            link: "/"
        }
    ]

    const widthLogo = Math.floor(100 / logos.length);
    return (
        <section className="my-10">
            <div className="my-[3vh]">
                <h1 className="text-5xl">Confian</h1>
            </div>
            <div className="flex space-x-2 w-full justify-between">
                {logos.map((element) => (
                    <div className={` w-[15%] rounded-xl py-4 px-4 bg-[#0A0AAB]  `} key={element.name}>
                        <Link href={element.link} className="flex items-center justify-center link-img-empresa">
                            <Image
                                src={element.imgSrc}
                                alt={element.name}
                                className={`img-empresas`}
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
};

