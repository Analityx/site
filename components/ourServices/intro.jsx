import { Reveal } from "../utils/reveal"
import "@/app/globals.css"

export function IntroServices({ type }) {


    const intro = {
        title: "Análisis de datos con enfoque humano",
        description: [
            {
                title: "Comprometidos con la excelent",
                text: 'En el área de "Applied Analytics" nos enfocamos en proporcionar servicios de análisis de datos avanzados a nuestros clientes. Nuestro principal objetivo es ayudar a las organizaciones a tomar decisiones informadas y estratégicas basadas en datos, aprovechando la potencia de la analítica y la tecnología avanzada.'
            },
            {
                title: "",
                text: "De manera constante implementamos las herramientas tecnológicas y programas más innovadores en nuestros desarrollos para que cada uno de nuestros clientes obtenga ventajas comparativas frente a sus competidores. Para ello, desarrollamos un enfoque multidisciplinario que combina la potencia de los datos con herramientas de opinión pública y métricas del mundo digital que nos permite lograr modelos predictivos de última generación"
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

    return (
        <section className="w-full flex max-sm:flex-wrap pt-[5vh] max-sm:px-4">
            <div className="w-1/3 max-sm:w-full max-sm:mb-5 flex items-center max-sm:pb-5 px-1 max-sm:text-center md:text-left lg:text-left ">
                <Reveal>
                    <h1 className="font-aspekta text-5xl font-[900] text-[#474747] max-sm:text-4xl p-3 min-sm:w-[80%] ">{intro.title}</h1>
                </Reveal>
            </div>
            <div className="w-2/3 max-sm:w-full px-3">
                {intro.description.map((element) => (
                    <div key={element.title} className="mb-4">
                        <Reveal>
                            <h1 className="font-aspekta font-[900] text-2xl text-[#474747]">{element.title ? element.title : ''}</h1>
                        </Reveal>
                        <Reveal>
                            <p className="mt-3 ">{element.text}</p>
                        </Reveal>
                    </div>
                ))}
            </div>
        </section>
    )
};
