"use client"

import "../../public/assets/css/header.css"
import Slider from "./sliderHeader"

export function Header() {
    return (
        <div className="pt-[15vh] max-sm:pt-[10vh]">
            <section className="overflow-hidden relative w-full min-h-[80vh] max-sm:min-h-[70vh] rounded-[50px] max-sm:rounded-xl ">
                <video className="object-cover absolute w-full h-full top-0 left-0" loop="loop" autoPlay="" playsInline="" muted="" preload="none" src="/assets/img/recursos/fondo-home.mp4" >
                    <source type="video/mp4" src="/assets/img/recursos/fondo-home.mp4" />
                </video>
                <Slider />
            </section>
        </div>
    )
};
