
import { DescriptionHome } from "@/components/home/description";
import { Header } from "@/components/home/header";
import { HeaderNuevo } from "@/components/home/header-nuevo";
import { Impacto } from "@/components/home/impacto";
import { Soluciones } from "@/components/home/soluciones";
import { Mapa } from "@/components/home/mapa";


export default function HomePage() {
    return (
        <main >
            <section className=" w-full container mx-auto md:mx-[50px]">
                <HeaderNuevo />
                <DescriptionHome />
                <Soluciones />
                <Impacto />
            </section>
            {/* < Mapa /> */}
        </main>
    )
};