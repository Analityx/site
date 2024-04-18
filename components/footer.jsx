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
        <footer className="mx-auto container mt-4 mb-2 max-sm:px-4   ">
            <Reveal>
                <div className="bg-[#1EA131] w-full max-sm:flex-wrap rounded-xl min-h-[20vh] flex py-5 px-3 max-sm:mb-3 ">
                    <div className="w-1/4 max-sm:w-full flex flex-wrap ">
                        <Link href="/" className="w-full flex justify-center">
                            <Image src="/assets/img/logo/SVG/analityx-logo-blanco-color.svg"
                                className="w-[317px] h-[10vh]" width={1920} height={600} alt="Analityx color" />
                        </Link>
                        <div className="flex items-end justify-center w-full">
                            <LogosRedes />
                        </div>
                    </div>
                    <div className="w-1/4 max-sm:hidden">
                        <LinksFooter />
                    </div>
                    <div className="w-1/4 max-sm:w-full">
                        <InformacionFooter />
                    </div>
                    <div className="w-1/4 max-sm:hidden">
                        <MapaFooter />
                    </div>
                </div>
            </Reveal>
        </footer>
    )
};
