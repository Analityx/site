import Image from "next/image";

export function DescriptionHome() {
    const descriptions = [
        {
            id: "1",
            title: "Transformamos datos en información",
            descriptions: "En Analityx, creemos firmemente que la información es el recurso más valioso que puede tener cualquier organización. En un mundo cada vez más competitivo, ofrecemos herramientas orientadas a la acción y a obtener una clara ventaja para nuestros clientes. Somos el puente entre el caos de los datos y las decisiones, superando barreras y proporcionando insights valiosos para organizaciones e instituciones en toda la región.",
            image: "/assets/img/recursos/analytics.svg"
        },
        {
            id: "2",
            title: "Inteligencia Estratégica",
            descriptions: "Nos especializamos en el análisis y la recopilación sistemática de información para que nuestros clientes puedan tomar decisiones informadas.  Las industrias líderes reconocen que estar un paso adelante, conocer las estrategias de la competencia y anticipar movimientos del mercado son factores cruciales para mantenerse en la cima.",
            image: "/assets/img/recursos/data.svg"

        }
    ]


    return (
        <section className="w-full mt-[5vh] ">
            {descriptions.map((element) => (
                <div className={`w-full flex min-h-[35vh] mb-6 ${element.id === "1" ? "flex-row" : "  flex-row-reverse"} `} key={element.id}>
                    <div className="w-1/3">
                        <Image
                            src={element.image}
                            alt="Analitycs illustration"
                            width={150}
                            height={150}
                            className="w-full max-h-[30vh] p-5"
                        />
                    </div>
                    <div className="w-2/3 mx-[5vw]">
                        <div className="p-3  text-start border-b-[#1EA131] border-b">
                            <h1 className="text-4xl font-bold">{element.title}</h1>
                        </div>
                        <div className="pt-6">
                            <p>{element.descriptions}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
};
