"use client";
import { useRef } from "react";
import { VerticalCard } from "./verticalCard";
import { useScroll } from "framer-motion"

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
            description: "No sólo generamos análisis de datos complejos, sino que también los traducimos en recomendaciones claras y accionables para nuestros clientes. Entendemos que la toma de decisiones basada en datos debe ser sencilla y efectiva, y trabajamos incansablemente para proporcionar informes y visualizaciones que sean fáciles de comprender y aplicar en el mundo real"
        },
        {
            imgSrc: "/assets/img/recursos/huella.png",
            title: "Business Intelligence",
            description: "No sólo generamos análisis de datos complejos, sino que también los traducimos en recomendaciones claras y accionables para nuestros clientes. Entendemos que la toma de decisiones basada en datos debe ser sencilla y efectiva, y trabajamos incansablemente para proporcionar informes y visualizaciones que sean fáciles de comprender y aplicar en el mundo real"
        }
    ]
    return (
        <section className="my-[5vh] " ref={ref}>
            <div className="">
                <h1 className="text-5xl">Soluciones</h1>
            </div>
            <div className="w-full flex justify-center" style={{ pathLength: scrollYProgress }}>
                <div className="w-2/3 flex justify-center">
                    {soluciones.map((element) => (
                        <VerticalCard key={element.title} imageSrc={element.imgSrc} title={element.title} description={element.description} />
                    ))}
                </div>
            </div>
        </section>
    )
};
