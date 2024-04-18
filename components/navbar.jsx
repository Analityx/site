"use client"

import Image from "next/image";
import logoColor from "../public/assets/img/analityx-logo-color.png"
import logoColor2 from "../public/assets/img/logo/PNG/a-color.png"
import logoBlanco from "../public/assets/img/logo/PNG/analityx-logo-blanco-color.png"
import Link from "next/link";
import "../public/assets/css/navbar.css"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import throttle from 'lodash/throttle';

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarFixed, setNavbarFixed] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isHome, setIsHome] = useState()

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleScroll = throttle(() => {
        const scrollY = window.scrollY;
        if (scrollY > 0.1) {
            setNavbarFixed(true);
        } else {
            setNavbarFixed(true);
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);


    useEffect(() => {
        setIsMobileMenuOpen(false);
        setMenuOpen(false);
        if (pathname === "/") {
            setIsHome(true)
        } else {
            setIsHome(false)
        }

    }, [pathname]);

    const logoClass = isNavbarFixed
        ? 'logo-ax opacity-0 transition-opacity duration-300 ease-in-out'
        : 'logo-full opacity-100 transition-opacity duration-300 ease-in-out';


    const links = [
        { name: "Home", group: false, href: "/" },
        { name: "Sobre Nosotros", group: false, href: "/about-us" },
        {
            name: "Our Services", group: true, href: ' ', items: [
                { name: "Applied Analitycs", href: "/our-services/applied-analytics" },
                { name: "Risk Management", href: "/our-services/risk-management" },
            ]
        },
        { name: "Medios", group: false, href: "/medios" },
        { name: "Contacto", group: false, href: "/contact" }
    ]

    return (
        <nav className={`w-[100vw] top-0 ${isMobileMenuOpen ? " mb-2 bg-white " : "navbar-nav"}  ${isNavbarFixed ? "min-h-[10vh] fixed bg-white " : "min-h-[11vh] absolute "}  z-50 transition-all duration-300 ease-in-out `}>
            <div className={`h-full w-full  flex items-center md:container lg:container mx-auto max-sm:px-1  `}>
                <div className="w-[50%] max-sm:w-[100%] flex items-center justify-start">
                    {isNavbarFixed ? (
                        <Link href="/" >
                            <Image
                                src={isNavbarFixed ? logoColor : (isHome ? logoColor : logoBlanco)}
                                alt="Logo color Analityx"
                                className={`${isNavbarFixed ? "h-[10vh] " : "h-[12vh] max-sm:h-auto"}  w-auto transition-all duration-500 ease-in-out `}
                            />
                        </Link>
                    ) : (
                        <div></div>
                    )}

                </div>
                <div className={` min-sm:h-full ${isNavbarFixed ? "" : "pe-2"}  lg:bg-white lg:px-7 lg:py-5  md:px-7 md:w-full justify-end  flex   ${isNavbarFixed ? "items-center w-2/3  max-sm:justify-end max-sm:pe-2" : (` min-w-[20vw]  max-sm:py-0  `)} rounded-xl transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "" : " "} `}>
                    <div className="lg:hidden cursor-pointer text-3xl  rounded-xl justify-end bg-white py-2 px-6	" onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); }}>
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
                    <ul className={` lg:flex hidden w-full  h-full items-center justify-center lg:justify-end ${isNavbarFixed ? "" : "lg:justify-center"} transition-all duration-1000 ease-in-out space-x-[20px] navbarFont navbarStyle`} >
                        {links.map((element) => {
                            if (element.group) {
                                const isActiveGroup = pathname.startsWith(element.group);
                                return (
                                    <div className="relative  " key={element.name}>
                                        <button onClick={toggleMenu} className={` justify-center flex space-x-3 items-center font-[900] button-navbar-font ${isNavbarFixed ? "text-xl" : "text-lg "}`}>
                                            {element.name}
                                            <div className="rotate-90 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#707070" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                                </svg>
                                            </div>

                                        </button>
                                        {isMenuOpen && (
                                            <ul className="absolute flex flex-wrap whitespace-nowrap top-full left-0 bg-white text-white mt-2 p-2 rounded">
                                                {element.items.map((item) => (
                                                    <li key={item.name} className={`${pathname === item.href ? 'active' : ''} my-2 flex  justify-center text-center`}>
                                                        <Link className={`${isNavbarFixed ? "text-xl" : " text-lg"} py-2 px-3 max-sm:text-md`} href={item.href}>
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            } else {
                                const isActive = pathname === (element.href)
                                return (
                                    <li key={element.name} className={`${isActive ? 'active' : ''} flex  justify-center text-center`}>
                                        <Link
                                            className={`${isNavbarFixed ? "text-xl" : "text-lg"} `}
                                            href={element.href}>
                                            {element.name}
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div >
            {isMobileMenuOpen ? (
                <div className={`w-full px-3 ${isMobileMenuOpen ? "absolute  bg-white" : ""} `}>
                    <ul className={`max-sm:bg-white rounded-b-xl pb-2 max-sm:px-3 flex flex-wrap items-center justify-center text-center divide-y `} >
                        {links.map((element) => {
                            if (element.group) {
                                const isActiveGroup = pathname.startsWith(element.group);
                                return (
                                    <div className={`relative ${isActiveGroup ? 'text-white' : 'text-[#707070]'} w-full text-center py-1 items-center flex justify-center`} key={element.name}>
                                        <button onClick={toggleMenu} className={`flex button-navbar-font space-x-4 items-center text-center text-lg max-sm:text-md font-bold`}>
                                            {element.name}
                                            <div className="rotate-90 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#707070" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                                </svg>
                                            </div>

                                        </button>
                                        {isMenuOpen && (
                                            <ul className="absolute flex flex-wrap whitespace-nowrap top-full w-full divide-y left-0 bg-white  p-2 rounded-xl border ">
                                                {element.items.map((item) => (
                                                    <li key={item.name} className={`${pathname === item.href ? 'text-[#1eaa32]' : 'text-[#707070]'} w-full py-1`}>
                                                        <Link className={`text-lg max-sm:text-md w-full `} href={item.href}>
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            } else {
                                const isActive = pathname === (element.href)
                                return (
                                    <li key={element.name} className={`${isActive ? 'text-[#1eaa32]' : 'text-[#707070]'} w-full py-1 `}><Link href={element.href} className="text-lg max-sm:text-md">{element.name}</Link></li>
                                )
                            }
                        })}
                    </ul>
                </div>
            ) : (null)}
        </nav>
    )
};
