"use client"

import { useEffect, useState } from 'react';


const Slider = () => {

    const slides = [
        {
            title: 'Global Solutions 1',
            description: 'Nuestro enfoque se basa en analizar datos para brindar servicios y soluciones de alta calidad, cuidadosamente adaptados a los objetivos de nuestros clientes.',
        },
        {
            title: 'Global Solutions 2',
            description: 'Otra descripción para el segundo título.',
        },

    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div animate={{ x: 100 }} transition={{ type: "spring", stiffness: 100 }} className="absolute flex flex-wrap top-[15vh] left-[8vw]">
            <div className="w-full">
                <h1 className="text-[8rem] text-white w-1/3 max-sm:text-start max-sm:text-[3.6rem] uppercase font-extrabold leading-[0.9] tracking-tighter">
                    {slides[currentSlide].title}
                </h1>
            </div>
            <div className="w-full mt-[4vh]">
                <p className="text-2xl text-white w-[65%] max-sm:text-start max-sm:w-full max-sm:font-bold max-sm:text-lg ">
                    {slides[currentSlide].description}
                </p>
            </div>
        </div>
    );
};

export default Slider;