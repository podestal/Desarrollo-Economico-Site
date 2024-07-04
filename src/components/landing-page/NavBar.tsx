import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import { useState } from 'react'
import {HashLink as Link} from 'react-router-hash-link'

const NavBar = () => {

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
        // className={` w-full ${navFixed ? 'fixed bg-transparent' : 'sticky backdrop-blur-sm bg-slate-950/60'} top-0 left-0 z-50  `}
        className={` w-full fixed backdrop-blur-sm bg-slate-950/60 top-0 left-0 z-50  `}
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
                        <Link to='/#home'>
                            <p className={`text-slate-100 hover:text-slate-200 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold`}>Inicio</p>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='#services'>
                            <p className={`text-slate-100 hover:text-slate-200 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold`}>Servicios</p>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='#emergency'>
                            <p className={`text-slate-100 hover:text-slate-200 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold`}>Emergencia</p>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='#turismo'>
                            <p className={`text-slate-100 hover:text-slate-200 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold`}>Turismo</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </motion.header>

  )
}

export default NavBar