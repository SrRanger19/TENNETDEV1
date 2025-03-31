function Description () {
    return(
        <div className="w-full h-auto grid grid-cols-1 col-span-12 mt-24 p-5 border-b-4 border-[#3c3934]">
            <h1 className="text-2xl text-center">Descripcion</h1>
            <div className="w-full h-auto grid grid-cols-2 grid-rows-2 gap-4">
                <div className="col-start-1 row-start-1 col-span-1">
                    <h1>
                        <span className="font-bold">Misión:</span> TennetDev busca desarrollar soluciones tecnológicas innovadoras mediante la integración de software y hardware para proyectos sustentables. Su objetivo es impulsar la eficiencia energética, reducir el impacto ambiental y ofrecer productos amigables con el medio ambiente.
                    </h1>
                </div>
                <div className="col-start-2 row-start-1 col-span-1 flex justify-center items-center">
                    <img src="./1.jpeg" className="w-80 h-24 object-contain"/>
                </div>
                <div className="col-start-1 row-start-2 col-span-1">
                    <img src="./2.jpeg" className="w-80 h-24 object-contain"/>
                </div>
                <div className="col-start-2 row-start-2 col-span-1">
                    <h1>
                        <span className="font-bold">Visión:</span> Convertirse en una empresa reconocida en el desarrollo de soluciones, productos y herramientas tecnológicas sustentables, para llegar a ser pionera en innovación en software y hardware para la preservación del medio ambiente.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Description;