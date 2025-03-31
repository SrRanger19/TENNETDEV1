function Benefits () {
    return(
        <div className="w-full p-5 border-b-4 border-[#3c3934] h-auto grid grid-cols-1 md:grid-cols-2 gap-4 col-span-12 mt-5">
            <h1 className="text-2xl text-center col-span-2 mb-4 font-semibold">Ventajas y Beneficios de FunghySoft (TRTS)</h1>
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center text-blue-500 mb-4">Ventajas</h3>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Modelo de precios flexible:</strong> Tres opciones de pago para ajustarse a las necesidades del cliente.</li>
                    <li><strong>Licenciamiento único:</strong> Pago único para el software o pago por volumen en hardware, lo que permite personalizar la compra.</li>
                    <li><strong>Sin límite de compra de hardware:</strong> Los clientes pueden adquirir tantas unidades como deseen, sin restricciones.</li>
                    <li><strong>Distribución global:</strong> Disponible en línea y mediante alianzas con empresas ecológicas, gobiernos y organizaciones ambientales.</li>
                    <li><strong>Compromiso con la sostenibilidad:</strong> Fomenta el uso de tecnologías que impactan positivamente en el medio ambiente.</li>
                </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h3 className="text-2xl text-center font-bold text-green-500 mb-4">Beneficios</h3>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Demostraciones interactivas:</strong> Participación en ferias de tecnología para mostrar la efectividad del producto.</li>
                    <li><strong>Colaboraciones con expertos:</strong> Oportunidades de aprender y mejorar en conferencias y eventos con líderes en sustentabilidad.</li>
                    <li><strong>Promoción digital efectiva:</strong> Publicidad dirigida en redes sociales y foros de innovación ecológica para maximizar la visibilidad del producto.</li>
                    <li><strong>Fácil acceso:</strong> La disponibilidad en línea permite la adquisición rápida y sencilla desde cualquier lugar.</li>
                    <li><strong>Generación de impacto positivo:</strong> Ayuda a las organizaciones a tomar decisiones más verdes y sostenibles con su tecnología ecológica.</li>
                </ul>
            </div>
        </div>
    )
}

export default Benefits;