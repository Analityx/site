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
        <section className="my-[10vh] flex max-sm:flex-wrap min-h-[50vh] bg-[#E7E7E7] rounded-[20px] py-[5vh] px-[3vh] max-sm:mx-5">
            <div className="w-2/3 max-sm:w-full relative" >
                <Reveal>
                    <h1 className="text-5xl">Nuestro impacto</h1>
                </Reveal>
                <div className="w-[55%] max-sm:w-full mt-6">
                    <Reveal>
                        <p>En Analityx, valoramos la innovación como un pilar fundamental de nuestro trabajo. Implementamos herramientas tecnológicas de vanguardia que nos permiten comprender en profundidad los fenómenos políticos, económicos y sociales</p>
                    </Reveal>

                </div>
                <div className="absolute max-sm:relative max-sm:mt-3 bottom-2 ">
                    <Reveal>
                        <button className="bg-transparent border-2 hover:bg-[#1EA131] hover:text-white border-[#1EA131] rounded-[20px] font-bold text-[#1EA131] px-4 py-2 ">
                            <span className="text-xl">conocenos</span>
                        </button>
                    </Reveal>
                </div>
            </div>
            <div className="w-1/3 max-sm:w-full flex justify-end max-sm:mt-5">
                <div className="w-2/3 max-sm:w-full flex flex-wrap justify-start">
                    {numeros.map((element) => (

                        <div className="text-start space-y-2 pe-3" key={element.title}>
                            <Reveal>
                                <h1 className="text-[#1EA131] text-6xl">{element.number}</h1>
                            </Reveal>
                            <Reveal>
                                <p className="text-lg">{element.title}</p>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
