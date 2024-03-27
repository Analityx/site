
import { DescriptionHome } from "@/components/home/description";
import { Header } from "@/components/home/header";
import { HeaderNuevo } from "@/components/home/header-nuevo";
import { Impacto } from "@/components/home/impacto";
import { Soluciones } from "@/components/home/soluciones";

export default function HomePage() {
    return (
        <main >
            <HeaderNuevo />
            <section className="container w-full mx-auto">
            {/* <Header /> */}
            <DescriptionHome />
            <Soluciones />
            <Impacto />
            </section>
        </main>
    )
};