
import { describe } from "node:test"
import { Reveal } from "../utils/reveal"
import "@/app/globals.css"

export function IntroServices({ type }) {
    // type = appliedAnalytics  riskManagement
    const intro = [
        {
            type: "appliedAnalytics",
            types: [{
                title: "Análisis de datos con enfoque humano",
                description: [
                    {
                        title: "Comprometidos con la excelencia ",
                        text: 'En el área de "Applied Analytics" nos enfocamos en proporcionar servicios de análisis de datos avanzados a nuestros clientes. Nuestro principal objetivo es ayudar a las organizaciones a tomar decisiones informadas y estratégicas basadas en datos, aprovechando la potencia de la analítica y la tecnología avanzada.'
                    },
                    {
                        title: "Equipo multidisciplinario",
                        text: "Formado por expertos en estrategia, política, estadísticas, ciencia de datos, y economía. Hemos trabajado en una amplia gama de industrias en Latinoamérica, desarrollando estrategias en los contextos más variados."
                    },
                    {
                        title: "Funcionalidad y efectividad",
                        text: "No sólo generamos análisis de datos complejos, sino que también Los traducimos en recomendaciones claras y accionables para nuestros clientes. Entendemos que la toma de decisiones basada en datos debe ser sencilla y efectiva, y trabajamos incansablemente para proporcionar informes y visualizaciones que sean fáciles de comprender y aplicar en el mundo real"
                    }
                ],
            }
            ]
        },
        {
            type: "riskManagement",
            types: [{
                title: "Smart Solutions for Risk Management",
                description: [
                    {
                        title: "",
                        text: "En un entorno empresarial donde la incertidumbre es constante, la gestión efectiva de riesgos se convierte en un pilar fundamental para la protección de los activos y la preservación del valor corporativo"
                    },
                    {
                        title: "",
                        text: "En Analityx, contamos con un equipo de expertos dedicados a proporcionar soluciones integrales que ayuden a nuestros clientes a identificar, evaluar y mitigar los riesgos en todos los niveles de su operación. "
                    },
                    {
                        title: "",
                        text: "Con una combinación única de experiencia en análisis de datos, tecnología avanzada y un profundo conocimiento de las mejores prácticas industriales, estamos preparados para enfrentar los desafíos más complejos con determinación y eficacia."
                    }
                ]
            }]
        }]



    return (
        intro.map((element) => (
            element.type === type && (
                element.types.map((e) => (
                    <section className="w-full flex max-sm:flex-wrap pt-[5vh] max-sm:px-4" key={type}>
                        <div className="w-1/3 max-sm:w-full max-sm:mb-5 flex items-center max-sm:pb-5 px-1 max-sm:text-center md:text-left lg:text-left ">
                            <Reveal>
                                <h1 className="font-aspekta 2xl:text-5xl text-4xl font-[900] text-[#474747] max-sm:text-4xl p-3 min-sm:w-[80%] ">{e.title}</h1>
                            </Reveal>
                        </div>
                        <div className="w-2/3 max-sm:w-full px-3">
                            {e.description.map((e) => (
                                <div key={e.title} className="mb-4">
                                    <Reveal>
                                        <h1 className="font-aspekta font-[900] text-2xl text-[#474747]">{e.title ? e.title : ''}</h1>
                                    </Reveal>
                                    <Reveal>
                                        <p className="mt-3 ">{e.text}</p>
                                    </Reveal>
                                </div>
                            ))}
                        </div>
                    </section>
                ))))
        ))
};
