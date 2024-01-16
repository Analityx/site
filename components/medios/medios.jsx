import Image from "next/image"
import Link from "next/link"
import { Reveal } from "../utils/reveal"

export function MediosCasos() {
    const medioslinks = [
        {
            link: "https://www.infobae.com/politica/2023/08/04/ausentismo-y-voto-en-blanco-el-indescifrable-electorado-que-puede-definir-las-paso/",
            imagen: "/assets/img/medios/ausentismoYvotoEnBlanco.png",
            titulo: "Ausentismo y voto en blanco: el indescifrable electorado que puede definir las PASO",
            medio: "Infobae"
        },
        {
            link: "https://www.infobae.com/politica/2023/11/06/el-desafio-de-massa-en-cordoba-como-llaman-algunos-radicales-a-milei-y-la-derrota-final-de-capitanich/",
            imagen: "/assets/img/medios/desafioDeMassaEnCordoba.png",
            titulo: "El desafío de Massa en Córdoba, cómo llaman algunos radicales a Milei y la derrota final de Capitanich",
            medio: "Infobae"
        },
        {
            link: "https://misionesonline.net/2023/11/06/elecciones-2023-faltan-menos-de-dos-semanas-para-el-balotaje/",
            imagen: "/assets/img/medios/modeloDeDatosDeLaConsultora.png",
            titulo: "Modelo de datos de la consultora Analityx otorga a Milei una mayor probabilidad de ganar el balotaje",
            medio: "Misiones Online"
        },
        {
            link: "https://www.lagaceta.com.ar/nota/1012032/politica/norte-grande-le-aporto-26porciento-votos-massa.html",
            imagen: "/assets/img/medios/elNorteGrandeLeAporto.png",
            titulo: "El Norte Grande le aportó el 26% de los votos a Massa",
            medio: "La Gaceta"
        }
    ]

    return (
        <section className="flex flex-wrap space-x-[2%] my-[5%] justify-center max-sm:px-4">
            {medioslinks.map((element) => (
                <div key={element.title} className="w-[20%] max-sm:w-full min-h-[25%] max-sm:h-full max-sm:my-5 bg-[#E7E7E7] p-5 rounded-xl hover:bg-[#cfcfcf]">
                    <Link href={element.link} target="_blank">
                        <div className="h-2/5 flex items-center text-center">
                            <Reveal>
                                <h1 className="mb-3 font-bold text-xl">{element.titulo}</h1>
                            </Reveal>
                        </div>
                        <div className="relative h-3/5">
                            <Reveal>
                                <Image
                                    src={element.imagen}
                                    alt={element.medio + " " + element.titulo}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full rounded-xl"
                                />
                            </Reveal>
                        </div>
                    </Link>
                </div >
            ))
            }
        </section >
    )
};
