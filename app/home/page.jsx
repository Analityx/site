import { Confian } from "@/components/home/confian";
import { Header } from "@/components/home/header";
import { Impacto } from "@/components/home/impacto";
import { Soluciones } from "@/components/home/soluciones";

export default function HomePage() {
    return (
        <main className="container w-full mx-auto">
            <Header />
            <Soluciones />
            <Impacto />
            <Confian />
        </main>
    )
};