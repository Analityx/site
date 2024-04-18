"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export function Mapa() {
    const [imageWidth, setImageWidth] = useState(1920);
    const [imageHeight, setImageHeight] = useState(1080);
    const [image, setImage] = useState("")

    useEffect(() => {
        function handleResize() {
            const windowWidth = window.innerWidth;
            if (windowWidth >= 1900) {
                setImageWidth(window.innerWidth);
                setImageHeight(2160);
                setImage("/assets/img/nuevas/Banners-005.png")
            } else if (windowWidth <= 1899 && windowWidth >= 1081) {
                setImageWidth(3840);
                setImageHeight(1080);
                setImage("/assets/img/nuevas/Banners-006.png")
            } else if (windowWidth >= 1080) {
                setImageWidth(window.innerWidth);
                setImageHeight(1920);
                setImage("/assets/img/nuevas/Banners-006.png")
            } else {
                setImageWidth(window.innerWidth);
                setImageHeight(1280);
                setImage("/assets/img/nuevas/Banners-008.png")
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="overflow-hidden w-full flex justify-center items-center flex-wrap">
            {/* <Image src={image}
                className="w-full h-auto object-cover"
                alt="Separador Analytics"
                width={imageWidth}
                height={imageHeight}
            /> */}
            <img src="/assets/img/nuevas/Mapa con logo Analityx-01.png" alt="" className="w-full" />
            <img src="/assets/img/nuevas/Mapas con adornos-01.png" alt="" className="w-full" />
            <img src="/assets/img/nuevas/Mapas sin nada-01.png" alt="" className="w-full" />

        </div>
    )
}