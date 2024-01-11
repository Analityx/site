import Link from "next/link"

export function LinksFooter() {
    const linksUtils = [
        {
            link: "/about-us",
            title: "About Us"
        },
        {
            link: "our-services",
            title: "Applied Analytics"
        },
        {
            link: "/risk-management",
            title: "Bussiness Intelligence"
        },
        {
            link: "/medios",
            title: "Medios"
        },
        {
            link: "/contact",
            title: "Contacto"
        }
    ]

    return (
        <div className="flex flex-wrap items-center justify-center min-h-[19vh]  py-5">
            {linksUtils.map((element) => (
                <Link key={element.title} href={element.link} className="w-full text-xl ps-3 mb-2 text-white hover:text-[#4ee965]">
                    {element.title}
                </Link>
            ))}
        </div>
    )
};
