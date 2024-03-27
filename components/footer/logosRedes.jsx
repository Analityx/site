import Image from "next/image"
import Link from "next/link"

export function LogosRedes(params) {
    const logosRedes = [
        {
            link: "https://www.instagram.com/",
            className: "fa-brands fa-linkedin icon",
            id: "linkedin"
        }
        // {
        //     link: "https://twitter.com/?lang=es",
        //     className: "fa-brands fa-x-twitter icon ",
        //     id: "x-twitter"
        // },
        // {
        //     link: "https://www.youtube.com/?hl=es",
        //     className: "fa-brands fa-youtube icon",
        //     id: "youtube"
        // },
        // {
        //     link: "https://www.tiktok.com/es/",
        //     className: "fa-brands fa-tiktok icon",
        //     id: "tiktok"
        // }
    ]

    return (
        <div className="flex justify-center space-x-2 items-center mt-3">
            <ul className="py-3 space-x-5">
                {logosRedes.map((element) => (
                    <li className="item" id={element.id} key={element.link}>
                        <Link href={element.link} target="_blank">
                            <i className={`${element.className}`}></i>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
};
