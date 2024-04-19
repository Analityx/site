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
            if (windowWidth >= 1900) {
                setImageWidth(window.innerWidth);
                setImageHeight(2160);
                setImage("/assets/img/nuevas/Banners-051.png")
            } else if (windowWidth <= 1900 && windowWidth >= 1081) {
                setImageWidth(3840);
                setImageHeight(1080);
                setImage("/assets/img/nuevas/Banners-061.png")
            } else if (windowWidth >= 1080) {
                setImageWidth(window.innerWidth);
                setImageHeight(1920);
                setImage("/assets/img/nuevas/Banners-071.png")
            } else {
                setImageWidth(window.innerWidth);
                setImageHeight(1280);
                setImage("/assets/img/nuevas/Banners-081.png")
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="overflow-hidden w-full mt-[10vh] min-h-[25vh] max-h-[35vh] flex justify-center items-start">
            {/* <Image src={image}
                className="w-full h-auto object-cover"
                alt="Separador Analytics"
                width={imageWidth}
                height={imageHeight}
            /> */}
            <img src={image} alt="Banner Analytics" className="w-full h-auto object-cover" />
        </div>
    )
};
