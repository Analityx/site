"use client"

import Image from "next/image"
import "../../public/assets/css/header.css"
import Slider from "./sliderHeader"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeaderNuevo() {
    const [imageWidth, setImageWidth] = useState(1920);
    const [imageHeight, setImageHeight] = useState(1080);
    const [image, setImage] = useState("")

    useEffect(() => {
        function handleResize() {
            const windowWidth = window.innerWidth;
            if (windowWidth >= 3840) {
                setImageWidth(3840);
                setImageHeight(2160);
                setImage("/assets/img/nuevas/EditablesAnalityxWEB-01.png")
            } else if (windowWidth >= 1920) {
                setImageWidth(1920);
                setImageHeight(1080);
                setImage("/assets/img/nuevas/EditablesAnalityxWEB-02.png")
            } else if (windowWidth >= 1080) {
                setImageWidth(3240);
                setImageHeight(5760);
                setImage("/assets/img/nuevas/EditablesAnalityxWEB-04.png")
            } else {
                setImageWidth(3240); // Puedes ajustar el tamaño base para pantallas más pequeñas
                setImageHeight(5760);
                setImage("/assets/img/nuevas/EditablesAnalityxWEB-04.png")
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .2
                }
            }
        }}
            className="min-h-[100vh] max-sm:min-h-[70vh] max-sm:px-5 m-2">
            <section className="overflow-hidden relative w-full min-h-[70vh] max-sm:min-h-[70vh] rounded-[50px] max-sm:rounded-xl">
                <Image src={image}
                    className="w-full h-[95vh] max-sm:h-[auto] img-banner-black "
                    alt="Separador Analytics"
                    width={imageWidth}
                    height={imageHeight} />
            </section>
        </motion.div>
    )
};