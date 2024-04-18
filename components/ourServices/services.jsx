"use client"

import Image from "next/image"
import Link from "next/link"
import { Reveal } from "../utils/reveal"
import { useState } from "react"
import "@/app/globals.css"

export default function Services({ type }) {
    const [hiddenDes, setHiddenDes] = useState({})
    const [showFullDescription, setShowFullDescription] = useState({});
    const typesServices = [
        {
            type: "appliedAnalytics",
            types: [
                {
                    title: "Estrategias de Posicionamiento",
                    logo: "/assets/img/recursos/cajas-flecha.png",
                    description: "No sólo generamos análisis de datos complejos, sino que también los traducimos en recomendaciones claras y accionables para nuestros clientes. Entendemos que la toma de decisiones basada en datos debe ser sencilla y efectiva, y trabajamos incansablemente para proporcionar informes y visualizaciones que sean fáciles de comprender y aplicar en el mundo real."
                },
                {
                    id: 21,
                    title: "Estrategias de Comunicación Digital",
                    logo: "/assets/img/recursos/x-o.png",
                    description: "Nuestro equipo de expertos en comunicación digital desarrolla estrategias efectivas para su presencia en línea. Esto incluye la selección de plataformas adecuadas, la creación de contenido relevante y atractivo, la gestión de la reputación en línea y la optimización de la participación del público en medios digitales."
                },
                {
                    id: 22,
                    title: "Gestíon de Campañas Electorales",
                    logo: "/assets/img/recursos/cuadrado-linea.png",
                    description: "Contamos con experiencia probada en la gestión de campañas electorales en diferentes niveles, desde elecciones locales hasta elecciones nacionales. Nuestros servicios incluyen la identificación de públicos clave, la estrategia de mensajería, el análisis de oponentes y la planificación de campañas publicitarias efectivas para candidatos y partidos políticos."
                },
                {
                    id: 23,
                    title: "Targeting y Segmentación",
                    logo: "/assets/img/recursos/precision.png",
                    description: "Nos especializamos en la identificación y creación de segmentos de audiencia específicos. Utilizamos análisis de datos para identificar grupos demográficos, comportamientos y preferencias particulares. Esto le permite dirigir sus mensajes y campañas de manera efectiva, maximizando su impacto con un alto grado de precisión."
                },
                {
                    id: 24,
                    title: "Desarrollo de Modelos Predictivos",
                    logo: "/assets/img/recursos/ojo.png",
                    description: "En nuestro equipo, creamos modelos predictivos mediante el uso de algoritmos y datos históricos para predecir eventos futuros. Esto le permite a su organización tomar decisiones más fundamentadas y anticiparse a los cambios en su industria o mercado."
                },
                {
                    id: 25,
                    title: "Opinión Pública",
                    logo: "/assets/img/recursos/dialogo-blanco.png",
                    description: "Monitorizamos y analizamos constantemente la opinión pública hacia su marca, producto o tema en particular. Utilizamos herramientas de encuestas y análisis de sentimientos para proporcionar información valiosa que puede ayudar a mejorar su reputación y tomar decisiones basadas en la retroalimentación de sus stakeholders."
                },
                {
                    id: 26,
                    title: "Social Listening",
                    logo: "/assets/img/recursos/signal.png",
                    description: "En Analityx, escuchamos y analizamos las conversaciones en redes sociales y plataformas en Línea. Utilizamos técnicas de análisis de texto y minería de datos para comprender lo que se dice sobre su marca o industria en las redes sociales. Esto le ayuda a responder a comentarios y tendencias, así como a ajustar sus estrategias de marketing y comunicación."
                },
                {
                    id: 27,
                    title: "Forecasting",
                    logo: "/assets/img/recursos/signal2.png",
                    description: "Nuestro equipo se dedica a predecir eventos futuros basados en datos históricos y tendencias actuales. Utilizamos análisis de series temporales y modelos de predicción para ayudar a su organización a planificar con anticipación, ya sea en la gestión de inventarios, la demanda del mercado o el crecimiento de su negocio."
                },
                {
                    id: 28,
                    title: "Análisis de Datos",
                    logo: "/assets/img/recursos/cube.png",
                    description: "En el corazón de nuestra unidad de negocios está el análisis de datos. Exploramos y procesamos datos para identificar patrones, tendencias y relaciones significativas. Utilizamos una variedad de técnicas, desde estadísticas descriptivas hasta análisis avanzados, para obtener información valiosa a partir de conjuntos de datos complejos."
                },
                {
                    id: 29,
                    title: "Scraping",
                    logo: "/assets/img/recursos/up-line.png",
                    description: "Ofrecemos servicios de extracción de datos de fuentes en línea, como sitios web o redes sociales, para su posterior análisis. Esto enriquece sus conjuntos de datos existentes y facilita un análisis más completo y detallado."
                },
                {
                    id: 20,
                    title: "Consultoría en Gestión de Crisis y Riesgo",
                    logo: "/assets/img/recursos/precision.png",
                    description: "También proporcionamos servicios de consultoría especializados en gestión de crisis y riesgo. Ayudamos a su organización a anticipar, planificar y responder eficazmente a situaciones de crisis, protegiendo su reputación y minimizando impactos negativos."
                }
            ]
        },
        {
            type: "riskManagement",
            types: [
                {
                    id: 11,
                    title: "Cyber security",
                    logo: "/assets/img/recursos/cajas-flecha.png",
                    description: "Garantizamos la seguridad de la información con técnicas de protección de dispositivos, redes, programas y datos del acceso no autorizado y todo tipo de ataques. Realizamos evaluaciones preliminares y asesorías para abordar necesidades claves del cliente, además de contar con la capacidad de recolectar datos in situ y desplegar servicios tecnológicos relacionados, como análisis detallados, informes y eDiscovery. Nuestros métodos y prácticas, así como nuestras herramientas tecnológicas, cuentan con evaluación rigurosa y son defendibles ante tribunales y reguladores."
                },
                {
                    id: 12,
                    title: "Business intelligence & investigations (BII)",
                    logo: "/assets/img/recursos/x-o.png",
                    description: "Analityx tiene la experiencia y los profesionales para llevar adelante cada uno de los pasos requeridos en una investigación de negocios. Contamos con los medios técnicos y las herramientas específicas requeridas para rastrear personas y activos, detectar actividades fraudulentas, descubrir información sensible e incluso recuperar información digital para ser presentada como prueba en juicio. De esta manera podemos proveer evidencia válida en procedimientos judiciales tanto civiles como penales."
                },
                {
                    id: 13,
                    title: "Reputational self due dilligence (RSDD)",
                    logo: "/assets/img/recursos/cuadrado-linea.png",
                    description: "Identificamos información estratégica en asuntos como lazos de familia, antecedentes de litigación y localización de activos. Identificamos asuntos potencialmente peligrosos como alegaciones de fraude y corrupción, asociaciones desfavorables, figuras expuestas políticamente, y lazos con el terrorismo y el lavado de dinero. Ayudamos a que las empresas hagan juicios informados acerca de transacciones y relaciones potenciales. Además buscamos datos relevantes de contexto e información de negocios sobre potenciales partners, intermediarios y otros proyectos. También identificamos datos de integridad como violaciones pasadas, sanciones, condenas por fraude y corrupción, investigaciones y problemas crediticios. En los últimos años incorporamos servicios de auditoría en redes sociales e imagen digital, una tendencia creciente en el mundo corporativo."
                },
                {
                    id: 14,
                    title: "Security Consulting",
                    logo: "/assets/img/recursos/precision.png",
                    description: "Nuestros profesionales asisten a clientes de todo el mundo con consultas que incluyen la seguridad integral, planes de contingencia, planes de mitigación de riesgos, evaluación de amenazas existentes y latentes. Nuestros expertos multidisciplinarios manejan una variedad de asuntos de seguridad, incluyendo análisis del entorno y desarrollo de políticas y procedimiento en base a las mejores prácticas del mercado. Respondemos de forma rápida y confidencial para salvaguardar activos y reputación, resolver asuntos con la mínima intervención en los negocios y mitigar posteriores problemas recomendando controles efectivos. Nuestros enfoques nos permiten recolectar los hechos de forma eficiente, analizar tensiones y preparar reportes y presentaciones que puedan resistir escrutinios regulatorios."
                },
                {
                    id: 15,
                    title: "Computer forensic",
                    logo: "/assets/img/recursos/ojo.png",
                    description: "Con técnicas especializadas e infraestructura tecnológica podemos identificar, preservar, analizar y presentar datos en soportes digitales. Estas técnicas incluyen reconstruir el bien informático, examinar datos residuales, autenticarlos, explicar las características técnicas de su uso aplicado a bienes informáticos y coordinar los esfuerzos legales para el efectivo uso de estas herramientas en presentaciones legales. Dentro de nuestro expertise entra no solamente el software sino también hardware, redes, seguridad, hacking, cracking y recuperación de información. Con estos conocimientos podemos detectar pistas sobre ataques informáticos, robo de información, conversaciones o pistas de emails y chats."
                },
                {
                    id: 16,
                    title: "Compliance y Prevención de Riesgos Legales",
                    logo: "/assets/img/recursos/dialogo-blanco.png",
                    description: "Un programa fuerte de Ethics and Compliance corporativo se ha vuelto una necesidad para toda organización regulada. Para garantizar conformidad a diversos tipos de regulación, nuestros profesionales ofrecen ayuda para identificar riesgos, mejorar el comportamiento ético dentro de la organización y estar preparados para una auditoría en cualquier momento. Nuestro enfoque implica identificar las áreas de alto riesgo en una organización, y luego priorizar, gestionar y monitorear esos riesgos. Sabemos que ninguna organización puede actuar de conformidad a las reglas y regulaciones de un día para el otro. Por eso tomamos este servicio como un proceso continuo que requiere que los negocios se pongan continuamente nuevas metas, avancen en tecnología que fomenten el cumplimiento de dichas metas, contemplar resultados para poder mejorarlos con nuevos objetivos."
                },
                {
                    id: 17,
                    title: "Transaction advisory",
                    logo: "/assets/img/recursos/signal.png",
                    description: "Nuestros servicios ayudan a identificar cuáles son los riesgos que representan potenciales nuevos partners, qué vendedores o proveedores pueden poner en riesgo negocios o empresas y quiénes son los potenciales competidores en el mercado. También colaboramos en detectar potenciales alianzas positivas para cada negocio o empresa y cuáles son los eventos o cuestiones políticas que representan un riesgo presente o futuro para la transacción."
                }
            ]
        }
    ]

    function truncateDescription(description) {
        let truncatedDescription = description;
        const maxLength = 200;

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
    const findType = (typeToFind) => {
        return typesServices.find(element => element.type === typeToFind);
    };


    const handleDescription = (id) => {
        const arrayTypes = findType(type)
        const selectedPerson = arrayTypes.types.find(typeUnique => typeUnique.id === id);
        if (selectedPerson) {
            setHiddenDes(prevState => ({
                ...prevState,
                [id]: selectedPerson.description,
            }));
            setShowFullDescription(prevState => ({
                ...prevState,
                [id]: true,
            }));
        }
    };

    const handleToggleDescription = (id) => {
        setShowFullDescription((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <section className="relative flex flex-wrap w-full mt-[5vh]">
            {typesServices.map((element) => (
                element.type === type && (
                    element.types.map((e) => (
                        <div key={e.title} className="max-sm:flex max-sm:flex-wrap bg-[#0A0AAB] rounded-xl w-[29%] max-sm:w-full max-sm:mx-4 mx-[2%] my-3 px-6 py-4">
                            <div className="w-full flex justify-center py-5 max-sm:w-1/3">
                                <Reveal>
                                    <Image src={e.logo} alt={e.title} width={200} height={200} />
                                </Reveal>
                            </div>
                            <div className="min-sm:h-1/2 max-sm:w-2/3 flex flex-wrap item-center">
                                <div className=" w-full max-sm:px-2 max-sm:flex max-sm:items-center max-sm:justify-center  text-white space-y-3  pb-4 max-sm:pb-1 max-sm:space-y-1 ">
                                    <Reveal>
                                        <h1 className="font-aspekta font-[900] text-3xl text-center max-sm:text-2xl youngFont" >{e.title}</h1>
                                    </Reveal>
                                </div>
                            </div>

                            <div className="max-sm:w-full text-white space-y-3  pb-4 max-sm:pb-1 max-sm:space-y-1 ">
                                {showFullDescription[e.id] ? (
                                    <Reveal>
                                        <p className="youngFont text-sm font-normal font-arial  top-0 ">{hiddenDes[e.id]} </p>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => setShowFullDescription(prevState => ({ ...prevState, [e.id]: false }))}
                                                className="  text-white border-b border-gray-500  rounded px-5 py-1 mt-4 max-sm:mt-2"
                                            >
                                                <div className="flex items-center">
                                                    <p className="font-normal me-2 font-arial ">Cerrar</p>
                                                    <i className="fa-solid fa-xmark "></i>
                                                </div>
                                            </button>
                                        </div>
                                    </Reveal>
                                ) : (
                                    <Reveal>
                                        <div className="flex justify-center flex-wrap">
                                            <Reveal>
                                                <div className="flex w-full">
                                                    <p className="font-arial text-sm font-normal max-sm:hidden top-0">{truncateDescription(e.description)}</p>
                                                </div>
                                            </Reveal>
                                            <button
                                                onClick={() => handleDescription(e.id)}
                                                className="bg-transparent  border-b px-2 text-white rounded font-bold py-1 mt-4 max-sm:mt-2"
                                            >
                                                <div className="flex items-center">
                                                    <p className="font-normal font-arial me-2">Leer más</p>
                                                    <i className="fa-solid fa-arrow-down"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </Reveal>
                                )}
                            </div>
                        </div>
                    ))
                )
            ))
            }
            <div className="absolute max-sm:relative max-sm:w-full max-sm:bottom-0 max-sm:mt-[5vh] max-sm:mb-[10vh] bottom-[200px] right-0 w-[29%] mx-[2%] px-6 ">
                <div className="flex">
                    <Link href={type === "appliedAnalytics" ? "/our-services/risk-management" : "/our-services/applied-analytics"} className="relative text-4xl text-[#1EA131] group text-left hover:text-[#1a7528]">
                        <Reveal>
                            <h1 className="font-aspekta">
                                Conoce nuestras soluciones en {type === "appliedAnalytics" ? "Risk Management" : "Applied Analytics"}
                            </h1>
                        </Reveal>
                        <Image
                            src="/assets/img/recursos/flecha-plena-new.png"
                            alt="Flecha plena"
                            className="w-[4vw] max-sm:w-[16vw] absolute right-0 transition duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                            width={100}
                            height={100}
                        />
                        <Image
                            src="/assets/img/recursos/flecha-plena-hover.png"
                            alt="Nueva flecha"
                            className="w-[4vw] max-sm:w-[10vw] absolute right-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
            </div>
        </section >
    )
};
