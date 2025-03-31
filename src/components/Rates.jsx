function Rates () {
    return(
        <div className="w-full h-auto grid grid-cols-1 col-span-12 mt-5 p-5 border-b-4 border-[#3c3934]">
            <h1 className="text-2xl text-center">Venta FunghySoft (TRTS)</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-6">
                    <div>
                        <h2 class="text-xl font-semibold">Precio:</h2>
                        <ul class="list-disc pl-6">
                            <li>FunghySoft se ofrece en tres modelos: Pago del licenciamiento del software (Unico). Pago por volumen de hardware (No hay limite de compra). Pago combo de software y hardware.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="text-xl font-semibold">Punto de venta: </h2>
                        <ul class="list-disc pl-6">
                            <li>Disponible en línea a través de la web de TennetDev.
                            Distribución mediante alianzas con empresas ecológicas, gobiernos u organizaciones ambientales.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="text-xl font-semibold">Promoción:</h2>
                        <ul class="list-disc pl-6">
                            <li>Demostraciones en ferias de tecnología. Colaboraciones o conferencias con expertos en sustentabilidad. Publicidad dirigida en redes sociales, foros de innovación ecológica y página web.</li>
                        </ul>
                    </div>
                </div>

                <div class="flex justify-center items-center">
                    <img src="./3.jpeg" alt="Imagen descriptiva" class="w-80 h-80" />
                </div>
            </div>
        </div>
    )
}

export default Rates;