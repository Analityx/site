import "../../public/assets/css/header.css"

export function Header() {
    return (
        <div className="pt-[15vh]">
            <section className="img-header relative min-h-[80vh] rounded-[50px] ">
                <div className="absolute top-[17vh] left-[10vh] w-1/3">
                    <h1 className="text-[8rem] uppercase font-extrabold leading-[0.9] tracking-tighter">Global Solutions</h1>
                    <p className="text-header w-[85%] mt-[4vh]">Nuestro enfoque se basa en analizar datos para brindar servicios y soluciones de alta calidad, cuidadosamente adaptados a los objetivos de nuestros clientes.</p>

                </div>
            </section>
        </div>
    )
};
