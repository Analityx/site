"use client"
import Image from "next/image";
import "../../public/assets/css/form.css"
import { useEffect, useState } from "react";
// import { useForm } from '@formspree/react';

export function FormContact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [address, setAddress] = useState("");
    const [isFormComplete, setIsFormComplete] = useState(false);

    const actionURL = ""


    // if (state.succeeded) {
    //     return (
    //         <div className="text-center">
    //             <h1 className='text-2xl font-bold'>Thank you for reaching out!</h1>
    //             <p className='text-xl mb-4'>We appreciate your contact and will get back to you as soon as possible.</p>
    //             <button onClick={() => window.location.href = '/'} className="bg-white text-black mt-4 p-2 border border-gray-300 rounded-lg hover:bg-black hover:text-white hover:border-white font-bold">
    //                 Go back to Home
    //             </button>
    //         </div>
    //     );
    // }

    useEffect(() => {
        const isComplete = name && phone && address && message;
        // email.includes("@")

        if (isComplete && !isFormComplete) {
            console.log("Complete form");
            setIsFormComplete(true);
        } else if (!isComplete && isFormComplete) {
            setIsFormComplete(false);
        }
    }, [name, phone, address, message, isFormComplete])

    return (
        <section className="w-full flex flex-wrap my-[5vh]">
            <div className="w-1/2 flex justify-center items-center flex-wrap">
                <div className="w-full space-y-2 my-2">
                    <h1 className="text-4xl">Colaboremos juntos</h1>
                    <p className="text-xl">Empecemos un camino a entender mejor los datos</p>
                </div>
                <Image src="/assets/img/recursos/contact.svg" alt="Illustration contact" className="w-[75%]" width={400} height={400} />
            </div>
            <div className="w-1/2">
                <form action="" className="my-5 space-y-[3vh] text-center">
                    <h1 className="text-4xl  " >Completá el formulario</h1>
                    <div className="input-group">
                        <input type="text" autocomplete="name" id="name" name="name" required className="input-alone" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className='label-alone' for="name">Nombre Completo</label>
                    </div>
                    <div className="input-group">
                        <input type="number" autocomplete="phone" id="phone" name="phone" required className="input-alone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label className='label-alone' for="phone">Teléfono</label>
                    </div>
                    <div className="input-group">
                        <input type="text" autocomplete="address" id="address" name="address" required className="input-alone" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <label className='label-alone' for="address">Dirección</label>
                    </div>
                    <div className="input-group">
                        <textarea id="message" name="message" required className="input-alone" rows="5" style={{ overflowWrap: 'break-word' }} value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label className='label-alone' for="message">Consulta</label>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="w-1/3">
                            <button type="submit" className="w-full bg-[#1EA131] rounded-xl py-3 px-5 text-white text-xl font-bold hover:bg-[#1a7528]">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section >
    )
};