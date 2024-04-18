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
            const windowHeight = window.innerHeight;
            if (windowWidth >= 3840) {
                setImage("/assets/img/nuevas/Banners-01.png")
            } else if (windowWidth >= 1920) {
                setImage("/assets/img/nuevas/Banners-01.png")
            } else if (windowWidth >= 1080) {
                setImage("/assets/img/nuevas/Banners-01.png")
            } else {
                setImage("/assets/img/nuevas/Banners-04.png")
            }
            setImageWidth(windowWidth);
            setImageHeight(windowHeight);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [imageWidth]);
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
            className="min-h-[60vh] max-h-[80vh] mt-[12vh] max-sm:min-h-[80vh]  ">
            <section className="overflow-hidden relative w-full  max-sm:flex max-sm:justify-center max-h-[90vh] max-sm:max-h-[90vh]  ">
                {/* <Image src={image}
                    className="w-full h-[auto] max-sm:h-[auto] img-banner-black object-contain "
                    alt="Separador Analytics"
                    width={imageWidth}
                    height={imageHeight} /> */}
                <img src={image} alt="Header Analytics" className="w-full max-sm:w-[90%] rounded-[20px] h-[auto] max-h-[80vh] max-sm:h-[auto] img-banner-black object-cover " />
                <Slider />
            </section>
        </motion.div>
    )
};