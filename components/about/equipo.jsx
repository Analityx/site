"use client"
import Image from "next/image"
import { Reveal } from "../utils/reveal"
import { useState } from "react";
import "@/app/globals.css"

export function EquipoAbout() {
    const [hiddenDes, setHiddenDes] = useState({})
    const [showFullDescription, setShowFullDescription] = useState({});
    const equipo = [
        {
            id: "matias",
            name: "Matías Nahón",
            image: "/assets/img/equipo/matias-modif.jpg",
            description: "Managing Director de Analityx y director del área de “Risk Management”. Está a cargo de complejas investigaciones para clientes en Argentina y toda América Latina. Es experto en una gran variedad de servicios de investigación, incluyendo investigaciones internas de fraude, debida diligencia, soporte a litigios y búsqueda de activos. Llevó a cabo varios casos de vigilancia que involucran el manejo de equipos técnicos especializados y la compilación de pruebas para asuntos litigiosos. También dirigió casos relacionados con la falsificación, adulteración y robo de productos.",
            redes: [
                {
                    type: "",
                    link: ""
                }
            ]
        },
        {
            id: "nehuen",
            name: "Nehuén Fariña",
            image: "/assets/img/equipo/nehuen-modif.jpg",
            description: "Senior Consultant y director del área de ”Applied Analitycs”. Se desempeña como consultor en estrategia y comunicación para empresas y gobiernos de Argentina, Bolivia y Perú. Ha trabajado con organismos de gobierno de todos los niveles y desempeñado roles estratégicos en decenas de campañas en toda América Latina. Es profesor universitario de “Comunicación y Opinión Pública” en la Universidad Católica Argentina y coordinador de múltiples seminarios en distintas universidades de la región. Fue consultor e investigador a nivel regional para el Banco Interamericano de Desarrollo.",
            redes: [
                {
                    type: "",
                    link: ""
                }
            ]
        }
    ]

    function truncateDescription(description) {
        let truncatedDescription = description;
        const maxLength = 100;

        if (truncatedDescription.length > maxLength) {
            const lastSpaceIndex = truncatedDescription.lastIndexOf('.', maxLength);
            if (lastSpaceIndex !== -1) {
                truncatedDescription = truncatedDescription.substring(0, lastSpaceIndex);
            } else {
                truncatedDescription = truncatedDescription.substring(0, maxLength);
            }
            truncatedDescription += '.';
        }

        return truncatedDescription;
    }

    const handleDescription = (name) => {
        const selectedPerson = equipo.find(person => person.id === name);

        if (selectedPerson) {
            setHiddenDes(prevState => ({
                ...prevState,
                [name]: selectedPerson.description,
            }));
            setShowFullDescription(prevState => ({
                ...prevState,
                [name]: true,
            }));
        }
    };
    return (
        <section>
            <div className="w-full mt-[5vh] mb-[3vh]">
                <Reveal>
                    <h1 className="text-4xl font-bold text-[#474747] max-sm:ps-4 font-aspekta">Nuestro equipo</h1>
                </Reveal>
            </div>
            <div className="w-full flex mix-sm:max-h-[80vh] max-sm:h-auto max-sm:flex-wrap" >
                {equipo.map((element) => (
                    <div className="w-1/2 max-sm:w-full max-sm:mb-3 bg-[#0a0ab4] py-4 px-6 mx-6  rounded-xl max-sm:rounedd-2xl" key={element.name}>
                        <Reveal>
                            <div className="overflow-hidden max-h-[40vh] max-sm:max-h-[20vh]  rounded flex justify-center max-sm:rounded-xl">
                                <Image
                                    src={element.image}
                                    alt={element.name}
                                    className="max-sm:hidden group-hover max-w-[150%] h-full rounded object-cover object-center filter grayscale max-sm:w-[250%] max-sm:rounded-xl"
                                    width={1920}
                                    height={1080}
                                />
                                <Image
                                    src={element.image}
                                    alt={element.name}
                                    className="hidden max-sm:block group-hover max-w-[150%] h-full rounded object-cover object-center filter grayscale max-sm:w-[250%] max-sm:rounded-xl"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </Reveal>
                        <div className="mt-5 max-sm:mt-3 max-sm:h-full max-sm:pt-1 space-y-5 pt-7 max-sm:py-4 max-sm:space-y-1 text-white">
                            <Reveal>
                                <h1 className="text-3xl font-bold font-aspekta" >{element.name}</h1>
                            </Reveal>
                            {showFullDescription[element.id] ? (
                                <div className="hidden max-sm:block">
                                    <Reveal>
                                        <p className="font-normal">{hiddenDes[element.id]}</p>
                                    </Reveal>
                                    <Reveal>
                                        <button onClick={() => setShowFullDescription(prevState => ({ ...prevState, [element.id]: false }))}
                                            className="bg-white  text-[#0A0AB4] border rounded px-5 py-1 mt-4 max-sm:mt-2 "
                                        >
                                            <p className=" font-bold">Cerrar</p>
                                        </button>
                                    </Reveal>

                                </div>
                            ) : (
                                <div className="hidden max-sm:block">
                                    <Reveal>
                                        <p className="font-normal">{truncateDescription(element.description)}</p>
                                    </Reveal>
                                    <Reveal>
                                        <button onClick={() => handleDescription(element.id)}
                                            className="bg-transparent border px-2 text-white rounded font-bold py-1 mt-4 max-sm:mt-2"
                                        >
                                            Leer más
                                        </button>
                                    </Reveal>
                                </div>
                            )}
                            <Reveal>
                                <p className="text-md max-sm:hidden font-normal">{element.description}</p>
                            </Reveal>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};
