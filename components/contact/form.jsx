"use client"
import Image from "next/image";
import "../../public/assets/css/form.css"
import { useEffect, useState } from "react";
import { Reveal } from "../utils/reveal";
import { useForm, ValidationError } from "@formspree/react";
import "@/app/globals.css"
// import { useForm } from '@formspree/react';

export function FormContact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [organization, setOrganization] = useState("");
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [state, handleSubmit] = useForm("mzbnzajo");

    useEffect(() => {
        const isComplete = name && phone && email && organization && message && email.includes("@")
        // 

        if (isComplete && !isFormComplete) {
            console.log("Complete form");
            setIsFormComplete(true);
        } else if (!isComplete && isFormComplete) {
            setIsFormComplete(false);
        }
    }, [name, phone, organization, email, message, isFormComplete])

    if (state.succeeded) {
        return (
            <section className="w-full flex flex-wrap my-[5vh max-sm:px-4">
                <div className="w-1/2 max-sm:w-full flex justify-center items-center flex-wrap max-sm:mb-[5vh]">
                    <div className="w-full space-y-2 my-2">
                        <Reveal>
                            <h1 className="2xl:text-5xl lg:text-4xl max-sm:text-center font-aspekta">Trabajemos juntos</h1>
                        </Reveal>
                        <Reveal>
                            <p className="text-xl max-sm:text-center">Empecemos un camino a entender mejor los datos</p>
                        </Reveal>
                    </div>
                    <Reveal>
                        <Image src="/assets/img/nuevas/Ilustraciones-02.png" alt="Illustration contact" className="w-[75%]" width={400} height={400} />
                    </Reveal>
                </div>
                <div className="w-1/2 max-sm:w-full flex justify-center flex-wrap items-center ">
                    <div className="text-center min-h-[20%] ">
                        <h1 className='text-2xl font-bold w-full'>Mensaje enviado con éxito!</h1>
                        <p className='text-xl mb-4 w-full'>¡Nos pondremos en contacto lo antes posible!</p>
                        <button onClick={() => window.location.href = '/'} className="bg-white text-black mt-4 p-2 border border-gray-300 rounded-lg hover:bg-black hover:text-white hover:border-white font-bold">
                            Volver a la pagina de inicio
                        </button>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section className="w-full flex flex-wrap mt-[5vh] max-sm:px-4">
            <div className="w-1/2 max-sm:w-full flex justify-center  flex-wrap">
                <div className="mt-[5vh] w-full space-y-2 my-2">
                    <Reveal>
                        <h1 className="2xl:text-5xl text-4xl font-aspekta max-sm:text-center">Trabajemos juntos</h1>
                    </Reveal>
                    <Reveal>
                        <p className="2xl:text-xl pt-3 text-lg font-arial max-sm:text-center">Empecemos un camino a entender mejor los datos</p>
                    </Reveal>
                    <Reveal>
                        <div className="w-full flex justify-center pt-5">
                            <Image src="/assets/img/nuevas/Ilustraciones-02.png" alt="Illustration contact" className="w-[60%] max-sm:w-full max-sm:my-3" width={400} height={400} />
                        </div>
                    </Reveal>
                </div>

            </div>
            <div className="w-1/2 max-sm:w-full">
                <form onSubmit={handleSubmit} className="mt-[5vh] mb-5 space-y-[3vh] text-center">
                    <Reveal>
                        <h1 className="2xl:text-4xl text-3xl font-bold text-[#707070] max-sm:text-3xl max-sm:pb-5 font-aspekta" >Completá el formulario</h1>
                    </Reveal>
                    <div className="input-group">
                        <input type="text" autoComplete="name" id="name" name="name" required className="input-alone" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className='label-alone' htmlFor="name">Nombre</label>
                    </div>
                    <div className="input-group">
                        <input type="email" autoComplete="email" id="email" name="email" required className="input-alone" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label className='label-alone' htmlFor="name">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="number" autoComplete="phone" id="phone" name="phone" required className="input-alone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label className='label-alone' htmlFor="phone">Teléfono</label>
                    </div>
                    <div className="input-group">
                        <input type="text" autoComplete="organization" id="organization" name="organization" required className="input-alone" value={organization} onChange={(e) => setOrganization(e.target.value)} />
                        <label className='label-alone' htmlFor="address">Organización</label>
                    </div>
                    <div className="input-group">
                        <textarea id="message" name="message" required className="input-alone" rows="5" style={{ overflowWrap: 'break-word' }} value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label className='label-alone' htmlFor="message">Consulta</label>
                    </div>

                    <div className="w-full flex justify-end">
                        <div className="w-1/3 max-sm:w-full">
                            <Reveal>
                                <button type="submit" disabled={!isFormComplete} className={`w-full ${isFormComplete ? "bg-[#1EA131] hover:bg-[#1a7528]" : "cursor-not-allowed bg-[#cfcfcf]"} rounded-xl py-3 px-5 text-white text-xl font-bold `}>Enviar</button>
                            </Reveal>
                        </div>
                    </div>
                </form>
            </div>
        </section >
    )
};
