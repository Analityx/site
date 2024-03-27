"use client";
import { useRef } from "react";
import { VerticalCard } from "./verticalCard";
import { useScroll } from "framer-motion"
import { Reveal } from "../utils/reveal";

export function Soluciones() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const soluciones = [
        {
            imgSrc: "/assets/img/recursos/mapa.png",
            title: "Applied Analytics",
            description: "No sólo generamos análisis de datos complejos, sino que también los traducimos en recomendaciones claras y accionables para nuestros clientes. Entendemos que la toma de decisiones basada en datos debe ser sencilla y efectiva, y trabajamos incansablemente para proporcionar informes y visualizaciones que sean fáciles de comprender y aplicar en el mundo real",
            href: "/our-services/applied-analytics"
        },
        {
            imgSrc: "/assets/img/recursos/huella.png",
            title: "Business Intelligence",
            description: "No sólo generamos análisis de datos complejos, sino que también los traducimos en recomendaciones claras y accionables para nuestros clientes. Entendemos que la toma de decisiones basada en datos debe ser sencilla y efectiva, y trabajamos incansablemente para proporcionar informes y visualizaciones que sean fáciles de comprender y aplicar en el mundo real",
            href: "/our-services/risk-management"
        }
    ]
    return (
        <section className="my-[2vh] " ref={ref}>
            <div className="ms-5 w-full text-center">
                <Reveal>
                    <h1 className="text-5xl max-sm:ps-4 text-[#474747]">Soluciones</h1>
                </Reveal>
            </div>
            <div className="w-full flex max-sm:flex-wrap justify-center" style={{ pathLength: scrollYProgress }}>
                <div className="w-2/3 max-sm:flex-wrap max-sm:w-full flex justify-center">
                    {soluciones.map((element) => (
                        <VerticalCard key={element.title} imageSrc={element.imgSrc} title={element.title} description={element.description} href={element.href} />
                    ))}
                </div>
            </div>
        </section>
    )
};
