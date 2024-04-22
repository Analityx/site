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
        <section className="my-[5vh] flex max-sm:flex-wrap min-h-[50vh] bg-[#E7E7E7] rounded-[20px] py-[5vh] max-sm:pt-[3vh] max-sm:pb-[2vh]  px-[3vh] max-sm:mx-5">
            <div className="w-1/2 max-sm:w-full relative" >
                <Reveal>
                    <h2 className="2xl:text-4xl lg:text-3xl font-aspekta max-sm:pb-1 pb-5 text-3xl max-sm:text-center text-left font-bold text-[#474747]">Nuestro impacto</h2>
                </Reveal>
                <div className="w-[100%] max-sm:w-full mt-6 max-sm:mt-3">
                    <Reveal>
                        <p className="mb-4 max-sm:mb-2 font-arial">Contamos con presencia regional en Buenos Aires, Miami, San Pablo, Ciudad de México, Uruguay, Santiago y Lima. Hemos desarrollado asociaciones estratégicas con empresas y consultores en toda América Latina para ofrecer soluciones integrales y adaptadas a las necesidades específicas de cada mercado. Nuestra red nos permite tener un profundo conocimiento local y acceso a recursos especializados, garantizando un servicio de alto nivel.</p>
                    </Reveal>
                    <Reveal>
                        <div className="mt-7 w-full max-sm:flex max-sm:justify-center">
                            <Link href="/about-us" >
                                <button className="bg-transparent border-2 hover:bg-[#1EA131] hover:text-white border-[#1EA131] rounded-[20px] font-bold text-[#1EA131] px-4 py-2 ">
                                    <span className="text-xl">Conocenos</span>
                                </button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="w-1/2  max-sm:w-full items-center flex justify-end max-sm:justify-center max-sm:mt-5 ">
                <Reveal>
                    <div className=" overflow-hidden w-full  ">
                        <img src="/assets/img/nuevas/Mapasv4-01.png" alt="Mapa puntos estrategicos" className="w-full h-auto object-fill rounded-[20px] sm:max-h-[50vh] md:max-h-[60vh]" />
                    </div>
                </Reveal>
            </div>
        </section>
    )
};
