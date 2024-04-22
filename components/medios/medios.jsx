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
        },
        {
            link: "https://www.iproup.com/economia-digital/46884-soluciones-aporta-inteligencia-artificial-para-vencer-ciberataques-fraude-corporativo",
            imagen: "/assets/img/medios/iproup.png",
            titulo: "5 soluciones que aporta la IA para vencer los ciberataques y el fraude corporativo",
            medio: "IPropUp"
        },
        {
            link: "https://www.iprofesional.com/tecnologia/399274-cuales-son-los-fraudes-informaticos-mas-comunes-en-la-argentina",
            imagen: "/assets/img/medios/forbes.png",
            titulo: "El delito corporativo, una problemática que padecen ocho de cada diez empresas en la Argentina",
            medio: "Forbes"
        },
        {
            link: "https://www.forbesargentina.com/columnistas/el-delito-corporativo-una-problematica-padecen-ocho-cada-diez-empresas-argentina-n44410",
            imagen: "/assets/img/medios/iprofesional.png",
            titulo: "Alerta por fraudes informáticos en la Argentina: ¿cómo se los puede prevenir?",
            medio: "iProfesional"
        },
        {
            link: "https://www.ambito.com/negocios/las-nuevas-mascaras-del-fraude-la-era-del-chat-gpt-n5752025",
            imagen: "/assets/img/medios/ambito.png",
            titulo: "Las nuevas máscaras del fraude en la era del chat GPT",
            medio: "Ámbito Financiero"
        },
        {
            link: "https://www.infobae.com/opinion/2023/09/21/el-delito-corporativo-una-problematica-que-padecen-ocho-de-cada-diez-empresas-en-la-argentina/",
            imagen: "/assets/img/medios/infobae-1.png",
            titulo: "El delito corporativo, una problemática que padecen ocho de cada diez empresas en la Argentina",
            medio: "Infobae"
        },
        {
            link: "https://www.infobae.com/economia/2023/11/29/clima-laboral-pistas-para-detectar-un-fraude-a-tiempo/",
            imagen: "/assets/img/medios/infobae-2.png",
            titulo: "Clima laboral: pistas para detectar un fraude a tiempo",
            medio: "Infobae"
        },
        {
            link: "https://fortuna.perfil.com/noticias/opinion/el-futuro-de-los-pronosticos-o-porque-las-encuestas-nos-fallan.phtml",
            imagen: "/assets/img/medios/fortuna-perfil.png",
            titulo: "El futuro de los pronósticos, o porqué las encuestas nos fallan",
            medio: "Revista Fortuna"
        }
    ]

    return (
        <section className="flex flex-wrap space-x-[0.5%] space-y-[0.5%] my-[5%] justify-stars max-sm:px-4">
            {medioslinks.map((element) => (
                <div key={element.title} className="w-[30%] max-sm:w-full min-h-[30%] max-sm:h-full max-sm:my-5 bg-[#E7E7E7] p-5 rounded-xl hover:bg-[#cfcfcf]">
                    <Link href={element.link} target="_blank">
                        <div className="h-2/5 flex items-center text-center">
                            <Reveal>
                                <h1 className="mb-3 font-bold text-xl p-3">{element.titulo}</h1>
                            </Reveal>
                        </div>
                        <div className="relative h-3/5 overflow-hidden">
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
