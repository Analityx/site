import { EquipoAbout } from "@/components/about/equipo";
import { IntroAbout } from "@/components/about/intro";
import { Impacto } from "@/components/home/impacto";
import { VideoPage } from "@/components/video";
import { ImageNavbar } from "@/components/image"
import Image from "next/image";
import "../globals.css";

export const metadata = {
    title: "About Us - Analityx",
    description: "Site Analityx",
};

export default function AboutUs() {
    return (
        <section className=" w-full">
            <ImageNavbar />
            <section className="mx-auto container">
                <IntroAbout />
                <EquipoAbout />
                {/* <Impacto /> */}
            </section>
        </section>
    )
};
