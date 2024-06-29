const NavBar = () => {
  return (
    <nav className="h-10 flex justify-start items-center xl:max-w-[1180px] max-w-[850px] mx-auto py-12 ">
        <div>
            <ul className=" max-lg:hidden flex text-center gap-12">
                <li className="nav__item">
                    <a href="#home" className="text-slate-700 hover:text-slate-500 hover:border-b-2 hover:border-b-slate-600  hover:pb-2 text-xl font-montserrat font-bold">Inicio</a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="text-slate-700 hover:text-slate-500 hover:border-b-2 hover:border-b-slate-600  hover:pb-2 text-xl font-montserrat font-bold">Servicios</a>
                </li>
                <li className="nav__item">
                    <a href="#popular" className="text-slate-700 hover:text-slate-500 hover:border-b-2 hover:border-b-slate-600  hover:pb-2 text-xl font-montserrat font-bold">Emergencia</a>
                </li>
                <li className="nav__item">
                    <a href="#eventos" className="text-slate-700 hover:text-slate-500 hover:border-b-2 hover:border-b-slate-600  hover:pb-2 text-xl font-montserrat font-bold">Eventos</a>
                </li>
                <li className="nav__item">
                    <a href="#turismo" className="text-slate-700 hover:text-slate-500 hover:border-b-2 hover:border-b-slate-600  hover:pb-2 text-xl font-montserrat font-bold">Turismo</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar