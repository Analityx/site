"use client"
import Image from "next/image";
import "../../public/assets/css/form.css"
import { useEffect, useState } from "react";
import { Reveal } from "../utils/reveal";
import { useForm, ValidationError } from "@formspree/react";
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
                            <h1 className="text-4xl">Colaboremos juntos</h1>
                        </Reveal>
                        <Reveal>
                            <p className="text-xl">Empecemos un camino a entender mejor los datos</p>
                        </Reveal>
                    </div>
                    <Reveal>
                        <Image src="/assets/img/recursos/contact.svg" alt="Illustration contact" className="w-[75%]" width={400} height={400} />
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
        <section className="w-full flex flex-wrap my-[5vh] max-sm:px-4">
            <div className="w-1/2 max-sm:w-full flex justify-center items-center flex-wrap">
                <div className="w-full space-y-2 my-2">
                    <Reveal>
                        <h1 className="text-4xl">Colaboremos juntos</h1>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl">Empecemos un camino a entender mejor los datos</p>
                    </Reveal>
                </div>
                <Reveal>
                    <Image src="/assets/img/recursos/contact.svg" alt="Illustration contact" className="w-[75%] max-sm:w-full max-sm:my-3" width={400} height={400} />
                </Reveal>
            </div>
            <div className="w-1/2 max-sm:w-full">
                <form onSubmit={handleSubmit} className="mt-[5vh] mb-5 space-y-[3vh] text-center">
                    <Reveal>
                        <h1 className="text-4xl font-bold text-[#707070] max-sm:text-3xl max-sm:pb-5 " >Completá el formulario</h1>
                    </Reveal>
                    <div className="input-group">
                        <input type="text" autocomplete="name" id="name" name="name" required className="input-alone" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className='label-alone' for="name">Nombre</label>
                    </div>
                    <div className="input-group">
                        <input type="email" autocomplete="email" id="email" name="email" required className="input-alone" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label className='label-alone' for="name">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="number" autocomplete="phone" id="phone" name="phone" required className="input-alone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label className='label-alone' for="phone">Teléfono</label>
                    </div>
                    <div className="input-group">
                        <input type="text" autocomplete="organization" id="organization" name="organization" required className="input-alone" value={organization} onChange={(e) => setOrganization(e.target.value)} />
                        <label className='label-alone' for="address">Organización</label>
                    </div>
                    <div className="input-group">
                        <textarea id="message" name="message" required className="input-alone" rows="5" style={{ overflowWrap: 'break-word' }} value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label className='label-alone' for="message">Consulta</label>
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
