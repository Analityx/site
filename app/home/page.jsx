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

    const handlePageLoad = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        const cargarPagina = () => {
            if (document.readyState === 'complete') {
                setCargando(false);
            } else {
                setCargando(true);
            }
        };
        document.addEventListener('readystatechange', cargarPagina);
        return () => {
            document.removeEventListener('readystatechange', cargarPagina);
        };
    }, [cargando]);


    useEffect(() => {
        const handleDOMContentLoaded = () => {
            setIsLoading(false);
        };
        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
        return () => {
            document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
        };
    }, []);

    const cargandoMemo = useMemo(() => cargando, [cargando]);

    return (
        <main >
            {cargandoMemo && <Loading />}
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