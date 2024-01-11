"use client"
import { delay, motion } from "framer-motion"


export function VideoPage({ src }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-h-[25vh] overflow-hidden blur-[2px] " >
            <video className="object-cover w-full h-[25vh] " autoPlay loop playsInline muted>
                <source type="video/mp4" src={src} />
            </video>
        </motion.div >
    )
};
