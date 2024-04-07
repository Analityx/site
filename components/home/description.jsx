import Image from "next/image";
import { motion } from "framer-motion"
import { Reveal } from "../utils/reveal";

export function DescriptionHome() {
    const descriptions = [
        {
            id: "1",
            title: "Transformamos datos en información",
            descriptions: "En Analityx, creemos firmemente que la información es el recurso más valioso que puede tener cualquier organización. En un mundo cada vez más competitivo, ofrecemos herramientas orientadas a la acción y a obtener una clara ventaja para nuestros clientes. Somos el puente entre el caos de los datos y las decisiones, superando barreras y proporcionando insights valiosos para organizaciones e instituciones en toda la región.",
            image: "/assets/img/recursos/analytics.svg"
        },
        {
            id: "2",
            title: "Inteligencia Estratégica",
            descriptions: "Nos especializamos en el análisis y la recopilación sistemática de información para que nuestros clientes puedan tomar decisiones informadas.  Las industrias líderes reconocen que estar un paso adelante, conocer las estrategias de la competencia y anticipar movimientos del mercado son factores cruciales para mantenerse en la cima.",
            image: "/assets/img/recursos/data.svg"

        }
    ]


    return (
        <section className="w-full mt-[2vh] max-sm:mt-[2vh] ">
            {descriptions.map((element) => (

                <div className={`w-full flex min-h-[35vh] mb-6 ${element.id === "1" ? "flex-row" : "  flex-row-reverse"} max-sm:flex-wrap max-sm:mb-[4vh] `} key={element.id}>
                    <div className="w-1/3 max-sm:w-full max-sm:mb-3 flex items-center justify-center flex-wrap min-h-[35vh]">
                        <Reveal>
                            <Image
                                src={element.image}
                                alt="Analitycs illustration"
                                width={150}
                                height={150}
                                className="w-full max-h-[30vh] p-5"
                            />
                        </Reveal>
                    </div>
                    <div className="w-2/3 flex items-center flex-wrap min-h-[35vh] space-y-1 mx-[5vw] max-sm:w-full">
                        <div className="w-full">
                            <div className="p-3 w-full text-start border-b-[#1EA131] border-b">
                                <Reveal>
                                    <h1 className="text-4xl max-sm:text-3xl text-center font-bold text-[#474747]">{element.title}</h1>
                                </Reveal>
                            </div>
                            <div className="pt-6">
                                <Reveal>
                                    <p>{element.descriptions}</p>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
};
