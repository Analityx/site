import { ImageNavbar } from "@/components/image";
import { IntroMedios } from "@/components/medios/intro";
import { MediosCasos } from "@/components/medios/medios";


export const metadata = {
    title: "Medios - Analityx",
    description: "Site Analityx",
};

export default function Medios() {

    return (
        <section className=" w-full">
            {/* <ImageNavbar /> */}
            <section className="mx-auto container min-h-[45vh] mt-[8vh]">
                <IntroMedios />
                <MediosCasos />
            </section>
        </section>
    )
};
