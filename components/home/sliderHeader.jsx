"use client"

import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

const Slider = () => {

    const slides = [
        {
            title: 'Strategic Consulting',
            description: 'Analizamos datos para brindar soluciones digitales a los problemas de siempre',
        },
        {
            title: 'Smart Solutions',
            description: 'Metodología centrada en la preservación de los intereses de nuestros clientes',
        },
        {
            title: "Fostering innovation",
            description: "Implementamos herramientas novedosas en el mercado latinoamericano con un enfoque regional"
        }

    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <motion.div
            key={currentSlide}
            className="absolute flex flex-wrap top-[18vh] left-[8vw]"
        >
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0, }}
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.25 }} className="w-full">
                <h1 className="title-header max-2xl:text-[7em] xl:text-[6em] md:text-[5em] text-left text-white w-1/2  max-sm:text-[2.5em] uppercase leading-[0.9] max-sm:leading-8 tracking-tighter">
                    {slides[currentSlide].title}
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0, }}
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.25 }}
                className="w-full mt-[4vh]">
                <p className="2xl:text-[2em] md:text-[1.7em]  parrafo-header text-left tracking-normal text-white w-[35%] 2xl:w-[50%] max-sm:leading-4 max-sm:text-[1em] max-sm:w-[80%] max-sm:font-bold  ">
                    {slides[currentSlide].description}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Slider;
