function Header () {
    return (
        <div className="w-[84%] h-20 absolute grid grid-cols-7 justify-center items-center bg-[#6b6359]">
             <img src="./logo.svg" className= "w-28 h-14 object-fit"/>
             <h1 className="cursor-pointer">Descripcion</h1>
             <h1 className="cursor-pointer">Promociones</h1>
             <h1 className="cursor-pointer">Paquetes</h1>
             <h1 className="cursor-pointer">Beneficios</h1>
             <h1 className="cursor-pointer">Sobre nosotros</h1>
             <h1 className="cursor-pointer">Contactos</h1>
        </div>
    )
}

export default Header;