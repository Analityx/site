"use client"

import { DescriptionHome } from "@/components/home/description";
import { Header } from "@/components/home/header";
import { HeaderNuevo } from "@/components/home/header-nuevo";
import { Impacto } from "@/components/home/impacto";
import { Soluciones } from "@/components/home/soluciones";
import { Mapa } from "@/components/home/mapa";
import { useState, useEffect, useMemo } from "react";
import Loading from '@/app/loading';

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [cargando, setCargando] = useState(true);
    const [loadedOnce, setLoadedOnce] = useState(false);


    const handlePageLoad = () => {
        setIsLoading(false);
        setLoadedOnce(true);
    };

    useEffect(() => {
        const cargarPagina = () => {
            if (document.readyState === "complete") {
                if (!loadedOnce) {
                    setCargando(false);
                    setLoadedOnce(true);
                }
            } else {
                setCargando(true);
            }
        };
        document.addEventListener('readystatechange', cargarPagina);
        return () => {
            document.removeEventListener('readystatechange', cargarPagina);
        };
    }, [loadedOnce]);
    const cargandoMemo = useMemo(() => cargando, [cargando]);

    return (
        <main >
            {cargandoMemo && !loadedOnce && <Loading />}
            <section className=" w-full container mx-auto md:px-[50px]" onLoad={handlePageLoad}>
                <HeaderNuevo />
                <DescriptionHome />
                <Soluciones />
                <Impacto />
            </section>
            {/* < Mapa /> */}
        </main>
    )
};