"use client";
import { useRef } from "react";
import { VerticalCard } from "./verticalCard";
import { useScroll } from "framer-motion"
import { Reveal } from "../utils/reveal";
import "@/app/globals.css"

export function Soluciones() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const soluciones = [
        {
            imgSrc: "/assets/img/applied.jpeg",
            title: "Applied Analytics",
            description: "Esta unidad de negocios es la encargada del diseño de estrategias a partir de la inteligencia de datos. Utilizamos modelos estadísticos para predecir comportamientos e intervenir en la realidad, además de generar insumos en las decisiones de gestión de tu organización.",
            href: "/our-services/applied-analytics"
        },
        {
            imgSrc: "/assets/img/risk.jpeg",
            title: "Risk Management",
            description: "Es el área encargada de las evaluaciones de gestión, auditorías financieras e informes de riesgo. Identificamos potenciales puntos de conflicto hacia dentro y fuera de tu organización, además de estandarizar planes de gestión de crisis e investigación sobre competidores y contextos.",
            href: "/our-services/risk-management"
        }
    ]
    return (
        <section className="my-[2vh] " ref={ref}>
            <div className="md:ms-5 lg:ms-5 w-full text-center">
                <Reveal>
                    <h1 className="text-5xl text-[#474747] font-aspekta">Soluciones</h1>
                </Reveal>
            </div>
            <div className="w-full flex max-sm:flex-wrap justify-center" style={{ pathLength: scrollYProgress }}>
                <div className="w-full flex-wrap max-sm:w-full flex justify-center">
                    {soluciones.map((element, index) => (
                        <VerticalCard key={element.title} imageSrc={element.imgSrc} title={element.title} description={element.description} href={element.href} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
};
