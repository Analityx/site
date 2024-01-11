import Image from "next/image";
import { ImagenFooter } from "../public/assets/img/logo/PNG/analityx-logo-blanco-color.png"
import Link from "next/link";
import { LogosRedes } from "./footer/logosRedes";
import "../public/assets/css/footer.css"
import { LinksFooter } from "./footer/links";
import { InformacionFooter } from "./footer/informacion";
import { MapaFooter } from "./footer/mapa";
import { Reveal } from "./utils/reveal";

export function Footer() {
    return (
        <footer className="mx-auto container mt-4 mb-2  ">
            <Reveal>
                <div className="bg-[#1EA131] w-full rounded-xl min-h-[20vh] flex py-5 px-3">
                    <div className="w-1/4 flex flex-wrap ">
                        <Link href="/" className="w-full">
                            <Image src="/assets/img/logo/SVG/analityx-logo-blanco-color.svg" className="w-full" width={350} height={100} alt="Analityx color" />
                        </Link>
                        <div className="flex items-end justify-center w-full">
                            <LogosRedes />
                        </div>
                    </div>
                    <div className="w-1/4">
                        <LinksFooter />
                    </div>
                    <div className="w-1/4">
                        <InformacionFooter />
                    </div>
                    <div className="w-1/4">
                        <MapaFooter />
                    </div>
                </div>
            </Reveal>
        </footer>
    )
};
