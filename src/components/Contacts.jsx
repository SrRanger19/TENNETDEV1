import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

function Contacts () {
    return(
        <div className="w-full p-5 h-auto grid grid-cols-1 md:grid-cols-2 gap-4 col-span-12 mt-5">
            <h1 className="text-2xl text-center col-span-2 mb-4 font-semibold">Contáctanos</h1>

            <div className="col-span-2 text-center mt-4 flex justify-evenly items-center">
                {/* TikTok */}
                <a href="https://www.tiktok.com/@tennet04?_t=ZM-8uxqP0uKiLW&_r=1" target="_blank" rel="noopener noreferrer" className="text-3xl text-black hover:text-gray-800">
                    <FaTiktok />
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/share/15Yu1ZzjWy/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-800">
                    <FaFacebook />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/tennet.dev?igsh=M2NzYjltZWVpaTk3" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-600 hover:text-pink-800">
                    <FaInstagram />
                </a>

                {/* Email */}
                <a href="mailto:tennet.dev.2000@gmail.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 hover:text-gray-800">
                    <FaEnvelope />
                </a>
            </div>
        </div>
    )
}

export default Contacts;