import { EquipoAbout } from "@/components/about/equipo";
import { IntroAbout } from "@/components/about/intro";
import { Impacto } from "@/components/home/impacto";
import { VideoPage } from "@/components/video";

export const metadata = {
    title: "About Us - Analityx",
    description: "Site Analityx",
};

export default function AboutUs() {
    return (
        <section className=" w-full">
            <VideoPage src="/assets/img/recursos/fondo-about-us.mp4" />
            <section className="mx-auto container">
                <IntroAbout />
                <EquipoAbout />
                <Impacto />
            </section>
        </section>
    )
};
