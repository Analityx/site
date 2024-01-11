import Image from "next/image"
import { Reveal } from "../utils/reveal"

export function EquipoAbout() {
    const equipo = [
        {
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
    return (
        <section>
            <div className="w-full mt-[5vh] mb-[3vh]">
                <Reveal>
                    <h1 className="text-4xl font-bold text-[#474747]">Nuestro equipo</h1>
                </Reveal>
            </div>
            <div className="w-full flex max-h-[80vh]">
                {equipo.map((element) => (
                    <div className="w-1/2 bg-[#0A0AAB] py-4 px-6 mx-6  rounded-xl" key={element.name}>
                        <Reveal>
                            <div className="overflow-hidden max-h-[40vh] rounded flex justify-center">
                                <Image
                                    src={element.image}
                                    alt={element.name}
                                    className="group-hover max-w-[150%] h-full rounded object-cover object-center filter grayscale"
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                        </Reveal>
                        <div className="mt-5 space-y-5 py-7 text-white">
                            <Reveal>
                                <h1 className="text-3xl font-bold" >{element.name}</h1>
                            </Reveal>
                            <Reveal>
                                <p className="text-md">{element.description}</p>
                            </Reveal>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};
