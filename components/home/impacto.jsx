export function Impacto() {
    const numeros = [
        {
            number: "545.386",
            title: "Análisis realizados"
        },
        {
            number: "2.373.412",
            title: "Personas alcanzadas"
        },
        {
            number: "64",
            title: "Organizaciones confían en nosotros"
        }
    ]
    return (
        <section className="my-[10vh] flex min-h-[50vh] bg-[#E7E7E7] rounded-[20px] py-[5vh] px-[3vh]">
            <div className="w-2/3 relative" >
                <h1 className="text-5xl">Nuestro impacto</h1>
                <div className="w-[55%] mt-6">
                    <p>En Analityx, valoramos la innovación como un pilar fundamental de nuestro trabajo. Implementamos herramientas tecnológicas de vanguardia que nos permiten comprender en profundidad los fenómenos políticos, económicos y sociales</p>
                </div>
                <div className="absolute bottom-2 ">
                    <button className="bg-transparent border-2 hover:bg-[#1EA131] hover:text-white border-[#1EA131] rounded-[20px] font-bold text-[#1EA131] px-4 py-2 ">
                        <span className="text-xl">conocenos</span>
                    </button>
                </div>
            </div>
            <div className="w-1/3 flex justify-end">
                <div className="w-2/3 flex flex-wrap justify-start">
                    {numeros.map((element) => (
                        <div className="text-start space-y-2 pe-3" key={element.title}>
                            <h1 className="text-[#1EA131] text-6xl">{element.number}</h1>
                            <p className="text-lg">{element.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
