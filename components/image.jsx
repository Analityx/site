"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ImageNavbar() {
    const [imageWidth, setImageWidth] = useState(1920);
    const [imageHeight, setImageHeight] = useState(1080);
    const [image, setImage] = useState("")

    useEffect(() => {
        function handleResize() {
            const windowWidth = window.innerWidth;
            if (windowWidth >= 3840) {
                setImageWidth(3840);
                setImageHeight(2160);
                setImage("/assets/img/nuevas/Banners2-06.png")
            } else if (windowWidth >= 1920) {
                setImageWidth(1920);
                setImageHeight(1080);
                setImage("/assets/img/nuevas/Banners2-05.png")
            } else if (windowWidth >= 1080) {
                setImageWidth(1080);
                setImageHeight(1920);
                setImage("/assets/img/nuevas/Banners2-07.png")
            } else {
                setImageWidth(720); // Puedes ajustar el tamaño base para pantallas más pequeñas
                setImageHeight(1280);
                setImage("/assets/img/nuevas/Banners2-08.png")
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <Image src={image}
            className="w-full h-[25vh] img-banner "
            alt="Separador Analytics"
            width={imageWidth}
            height={imageHeight} />
    )
};
