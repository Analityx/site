import { Reveal } from "../utils/reveal"

export function IntroAbout() {
    const textos = [
        {
            title: "Compromiso con la Innovación",
            text: 'En Analityx, valoramos la innovación como un pilar fundamental de nuestro trabajo. Implementamos herramientas tecnológicas de vanguardia que nos permiten comprender en profundidad Los fenómenos políticos, económicos y sociales. Somos líderes en la convergencia entre Lo analógico y Lo digital, proporcionando a nuestros clientes información precisa y detallada que facilita la toma de decisiones estratégicas.'
        },
        {
            title: "Orientados al éxito",
            text: "Nuestro compromiso es el éxito de nuestros clientes. Llevamos a cabo un análisis riguroso de larealidad, desarrollando estrategias que aborden de manera efectiva los desafíos operativos y estratégicos de las organizaciones. En Analityx, ofrecemos un enfoque multidisciplinario que busca maximizar el impacto y la eficiencia en la toma de decisiones."
        },
        {
            title: "Nuestro legado",
            text: "Analityx se enorgullece de su legado de excelencia en cada proyecto emprendido, Nuestro equipo está compuesto por expertos altamente calificados y comprometidos, cuya vasta experiencia y conocimiento permiten abordar desafíos complejos con precisión y confiabilidad."
        },
        {
            title: "",
            text: "En resumen, en Analityx fusionamos nuestra vasta experiencia con una mentalidad innovadora para proporcionar asesoramiento estratégico de vanguardia. Nos destacamos en la convergencia entre lo analógico y lo digital, brindando a nuestros clientes las herramientas necesarias para tomar decisiones informadas y alcanzar el éxito en un entorno empresarial y estratégico en constante evolución. Confíe en nosotros para guiar a su organización hacia un futuro sólido y prometedor."
        }
    ]

    return (
        <section className="w-full flex pt-[5vh] max-sm:flex-wrap max-sm:px-3">
            <div className="w-1/3 max-sm:w-full max-sm:mb-5 max-sm:pb-5 px-1">
                <Reveal>
                    <h1 className="text-5xl font-bold text-[#474747] max-sm:text-3xl">Convergencia entre lo analógico y lo digital</h1>
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
