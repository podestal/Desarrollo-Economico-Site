import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import { useState } from 'react'

interface Props {
    navFixed: boolean
}

const NavBar = ({navFixed}: Props) => {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, 'change', latest => {
        const previous = scrollY.getPrevious()
        if (previous && previous < latest) {
            setHidden(true)
        } else {
            setHidden(false)
        }})

  return (
    <motion.header 
        className={` w-[100%] ${navFixed ? 'fixed bg-transparent' : 'sticky backdrop-blur-sm bg-white/30'} top-0 left-0 z-50  `}
        variants={{
            visible: {y:0},
            hidden: {y:'-100%'},
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}    
    >
        <nav className="h-10 flex justify-start items-center xl:max-w-[1180px] max-w-[850px] mx-auto py-12 ">
            <div>
                <ul className=" max-lg:hidden flex text-center gap-12">
                    <li className="nav__item">
                        <a href="#home" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Inicio</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Servicios</a>
                    </li>
                    <li className="nav__item">
                        <a href="#popular" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Emergencia</a>
                    </li>
                    <li className="nav__item">
                        <a href="#eventos" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Eventos</a>
                    </li>
                    <li className="nav__item">
                        <a href="#turismo" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Turismo</a>
                    </li>
                </ul>
            </div>
        </nav>
    </motion.header>

  )
}

export default NavBar