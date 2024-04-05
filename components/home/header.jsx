"use client"

import "../../public/assets/css/header.css"
import Slider from "./sliderHeader"
import { motion } from "framer-motion"
import { Reveal } from "@/components/utils/reveal";
import Image from "next/image"

export function Header() {
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
            className="pt-[15vh] max-sm:pt-[15vh] min-h-[100vh] max-sm:px-5">
            <section className="overflow-hidden relative w-full min-h-[70vh] max-sm:min-h-[70vh] rounded-[50px] max-sm:rounded-xl">
                <Image className="object-cover absolute w-full h-full top-0 left-0" src="/assets/img/nuevas/Banners-01.png" width={3280} height={1920} alt="Banner Analityx" />
                <Slider />
            </section>
        </motion.div>
    )
};
