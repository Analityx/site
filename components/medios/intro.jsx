import { Reveal } from "../utils/reveal";

export function IntroMedios() {
    const textos = [
        {
            title: "",
            text: 'En el área de "Applied Analytics" nos enfocamos en proporcionar servicios de análisis de datos avanzados a nuestros clientes. Nuestro principal objetivo es ayudar a las organizaciones a tomar decisiones informadas y estratégicas basadas en datos, aprovechando la potencia de la analítica y la tecnología avanzada. '
        },
        {
            title: "",
            text: "De manera constante implementamos las herramientas tecnológicas y programas más innovadores en nuestros desarrollos para que cada uno de nuestros clientes obtenga ventajas comparativas frente a sus competidores. Para ello, desarrollamos un enfoque multidisciplinario que combina la potencia de los datos con herramientas de opinión pública y métricas del mundo digital que nos permite lograr modelos predictivos de última generación."
        }
    ]

    return (
        <section className="w-full flex pt-[5vh] max-sm:flex-wrap max-sm:px-4">
            <div className="w-1/3 max-sm:w-full px-1">
                <Reveal>
                    <h1 className="text-5xl font-bold text-[#474747] max-sm:text-4xl max-sm:mb-3">Conoce nuestros casos de estudio</h1>
                </Reveal>
            </div>
            <div className="w-2/3 max-sm:w-full px-3">
                {textos.map((element) => (
                    <div key={element.title} className="mb-4">
                        <Reveal>
                            <h1 className="text-xl font-bold text-[#474747]">{element.title ? element.title : ''}</h1>
                        </Reveal>
                        <Reveal>
                            <p className="mt-3">{element.text}</p>
                        </Reveal>
                    </div>
                ))}
            </div>
        </section>
    )
};
