"use client"

import { DescriptionHome } from "@/components/home/description";
import { Header } from "@/components/home/header";
import { HeaderNuevo } from "@/components/home/header-nuevo";
import { Impacto } from "@/components/home/impacto";
import { Soluciones } from "@/components/home/soluciones";
import { Mapa } from "@/components/home/mapa";
import { useState, useEffect } from "react";
import Loading from '@/app/loading';

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const handlePageLoad = () => {
        setIsLoading(false); // Indica que la página ha cargado completamente
    };

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
    return (
        <main >
            {isLoading && <Loading />}
            {!isLoading && (
                <section className=" w-full container mx-auto md:px-[50px]" onLoad={handlePageLoad}>
                    <HeaderNuevo />
                    <DescriptionHome />
                    <Soluciones />
                    <Impacto />
                </section>
            )}
            {/* < Mapa /> */}
        </main>
    )
};