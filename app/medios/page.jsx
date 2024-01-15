import { ImageAbout } from "@/components/image";
import { IntroMedios } from "@/components/medios/intro";
import { MediosCasos } from "@/components/medios/medios";


export const metadata = {
    title: "Medios - Analityx",
    description: "Site Analityx",
};

export default function Medios() {

    return (
        <section className=" w-full">
            <ImageAbout src="/assets/img/recursos/huella.png" />
            <section className="mx-auto container min-h-[45vh]">
                <IntroMedios />
                <MediosCasos />
            </section>
        </section>
    )
};
