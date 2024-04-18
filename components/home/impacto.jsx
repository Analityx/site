import Link from "next/link"
import { Reveal } from "../utils/reveal"

export function Impacto() {
    const numeros = [
        {
            number: "545.386",
            title: "Análisis realizados"
        },
        {
            number: "2.373.412",
            title: "Personas alcanzadas"
        },
        {
            number: "64",
            title: "Organizaciones confían en nosotros"
        }
    ]
    return (
        <section className="my-[5vh] flex max-sm:flex-wrap min-h-[50vh] bg-[#E7E7E7] rounded-[20px] py-[5vh] px-[3vh] max-sm:mx-5">
            <div className="w-1/2 max-sm:w-full relative" >
                <Reveal>
                    <h1 className="text-5xl max-sm:text-4xl">Nuestro impacto</h1>
                </Reveal>
                <div className="w-[75%] max-sm:w-full mt-6">
                    <Reveal>
                        <p>En Analityx, valoramos la innovación como un pilar fundamental de nuestro trabajo. Implementamos herramientas tecnológicas de vanguardia que nos permiten comprender en profundidad los fenómenos políticos, económicos y sociales</p>
                    </Reveal>

                </div>
                <div className="absolute max-sm:w-full max-sm:flex max-sm:justify-center max-sm:pt-5 max-sm:relative max-sm:mt-3 bottom-2 ">
                    <Reveal>
                        <Link href="/about-us">
                            <button className="bg-transparent border-2 hover:bg-[#1EA131] hover:text-white border-[#1EA131] rounded-[20px] font-bold text-[#1EA131] px-4 py-2 ">
                                <span className="text-xl">Conocenos</span>
                            </button>
                        </Link>
                    </Reveal>
                </div>
            </div>
            <div className="w-1/2  max-sm:w-full items-center flex justify-center max-sm:mt-5 ">
                <div className=" overflow-hidden w-full ">
                    <img src="/assets/img/nuevas/MAPASv2-01.png" alt="Mapa puntos estrategicos" className="w-full h-auto object-cover rounded-[20px]" />
                </div>
            </div>
        </section>
    )
};
