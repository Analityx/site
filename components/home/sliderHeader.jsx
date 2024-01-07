"use client"

import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

const Slider = () => {

    const slides = [
        {
            title: 'Global Solutions',
            description: 'Nuestro enfoque se basa en analizar datos para brindar servicios y soluciones de alta calidad, cuidadosamente adaptados a los objetivos de nuestros clientes.',
        },
        {
            title: 'Strategic Consulting',
            description: 'Otra descripción para el segundo título.',
        },

    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <motion.div
            key={currentSlide}
            className="absolute flex flex-wrap top-[15vh] left-[8vw]"
        >
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }} className="w-full">
                <h1 className="text-[8rem] text-white w-1/3 max-sm:text-start max-sm:text-[3.6rem] uppercase font-extrabold leading-[0.9] tracking-tighter">
                    {slides[currentSlide].title}
                </h1>
            </motion.div>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.7 }}
                className="w-full mt-[4vh]">
                <p className="text-2xl text-white w-[65%] max-sm:text-start max-sm:w-full max-sm:font-bold max-sm:text-lg ">
                    {slides[currentSlide].description}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Slider;