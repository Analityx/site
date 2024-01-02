"use client"

import Image from "next/image";
import logoColor from "../public/assets/img/analityx-logo-color.png"
import Link from "next/link";
import "../public/assets/css/navbar.css"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);
    const links = [
        { name: "About Us", href: "/about-us" },
        { name: "Applied Analitycs", href: "/our-services" },
        { name: "Risk Management", href: "/risk-management" },
        { name: "Medios", href: "/medios" },
        { name: "Contact", href: "/contact" }
    ]
    return (
        <nav className={`${isMobileMenuOpen ? "h-auto mb-2" : "min-h-[15vh]"}`}>
            <div className={`min-h-[15vh] w-full flex container mx-auto`}>
                <div className="w-1/2 flex items-center">
                    <Link href="/">
                        <Image
                            src={logoColor}
                            alt="Logo color Analityx"
                            className="h-[13vh] max-sm:h-auto w-auto"
                        />
                    </Link>
                </div>
                <div className="w-1/2 flex items-center max-sm:justify-end max-sm:pe-4">
                    <div className="lg:hidden cursor-pointer text-3xl	" onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); }}>
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-8 h-8 transition-transform duration-300 transform rotate-180 ease-in-out">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-12 transition-transform duration-300 transform rotate-0 ease-in">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                            </svg>
                        )}
                    </div>
                    <ul className={`lg:flex hidden w-full h-full items-center justify-center space-x-10 navbarFont navbarStyle`} >
                        {links.map((element) => {
                            const isActive = pathname === (element.href)
                            return (
                                <li key={element.name} className={`${isActive ? 'active' : ''}`}><Link href={element.href}>{element.name}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div >
            {isMobileMenuOpen ? (
                <div className="w-full">
                    <ul className={`flex flex-wrap items-center justify-center text-center space-y-3`} >
                        {links.map((element) => {
                            const isActive = pathname === (element.href)
                            return (
                                <li key={element.name} className={`${isActive ? 'text-white' : 'text-[#707070]'} w-full `}><Link href={element.href}>{element.name}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            ) : (null)}
        </nav>
    )
};
