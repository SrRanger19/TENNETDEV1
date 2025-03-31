function Promotion () {
    return(
        <div className="w-full h-auto grid grid-cols-2 gap-4 col-span-12 mt-5 p-5 border-b-4 border-[#3c3934]">
            <h1 className="text-2xl text-center col-span-2 mb-4 font-semibold">Videos promocionales</h1>
            <div className="flex justify-center">
                <video className="w-full h-auto" controls>
                    <source src="/1.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
            <div className="flex justify-center">
                <video className="w-full h-auto" controls>
                    <source src="/2.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
        </div>
    )
}

export default Promotion;