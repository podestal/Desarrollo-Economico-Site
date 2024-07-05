import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import { useState } from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import { RiMenu2Fill } from '@remixicon/react'
import { Icon } from '@tremor/react'
import logo from '../../assets/imgs/logo-islay-blanco.png'

const NavBar = () => {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [show, setShow] = useState(false)

    useMotionValueEvent(scrollY, 'change', latest => {
        const previous = scrollY.getPrevious()
        if (previous && previous < latest) {
            setHidden(true)
        } else {
            setHidden(false)
        }})

  return (
    <>
        <motion.header 
            className={` w-full fixed lg:backdrop-blur-sm lg:bg-slate-950/60 top-0 left-0 z-50 flex justify-end`}
            variants={{
                visible: {y:0},
                hidden: {y:'-100%'},
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}    
        >
            <button onClick={() => {
                setHidden(true)
                setShow(true)}} className='text-slate-50 p-4 bg-white lg:hidden'><Icon color='blue' size='xl' icon={RiMenu2Fill}/></button>
            
            <nav className="max-lg:hidden h-10 flex justify-start items-center xl:max-w-[1180px] max-w-[850px] mx-auto py-12 ">
                <div>
                    <ul className=" max-lg:hidden flex text-center gap-12 items-center">
                        <li>
                            <div style={{backgroundImage: `url(${logo})`}} className="w-[320px] h-[80px] bg-center bg-cover" />
                        </li>
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
        
        {show && 
        <motion.header 
            initial={{opacity: 0, translateY: -400}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1}}
            className='lg:hidden fixed top-0 left-0 z-50 backdrop-blur-md bg-slate-950/60  w-full h-screen'>
            <nav className="h-full flex flex-col justify-start items-center xl:max-w-[1180px] max-w-[850px] mx-auto py-12 ">
                <ul className='w-full h-full text-white flex flex-col gap-12 items-center justify-center'>
                        <motion.li
                            initial={{opacity: 0, translateX: 200}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1}}
                        >
                            <div style={{backgroundImage: `url(${logo})`}} className="w-[320px] h-[80px] bg-center bg-cover" />
                        </motion.li>
                        
                        <motion.li 
                            initial={{opacity: 0, translateX: 200}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1}}
                            className="nav__item" onClick={() => setShow(false)}>
                            <Link to='/#home'>
                                <p className={`text-slate-100 hover:text-slate-200 hover:border-b-2 hover:border-b-slate-300  pb-2 text-xl font-montserrat font-bold`}>Inicio</p>
                            </Link>
                        </motion.li>
                        <motion.li 
                            initial={{opacity: 0, translateX: 200}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1}}
                            className="nav__item" onClick={() => setShow(false)}>
                            <Link to='#services'>
                                <p className={`text-slate-100 hover:text-slate-200 hover:border-b-2 hover:border-b-slate-300  pb-2 text-xl font-montserrat font-bold`}>Servicios</p>
                            </Link>
                        </motion.li>
                        <motion.li 
                            initial={{opacity: 0, translateX: 200}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1}}
                            className="nav__item" onClick={() => setShow(false)}>
                            <Link to='#emergency'>
                                <p className={`text-slate-100 hover:text-slate-200 hover:border-b-2 hover:border-b-slate-300  pb-2 text-xl font-montserrat font-bold`}>Emergencia</p>
                            </Link>
                        </motion.li>
                        <motion.li 
                            initial={{opacity: 0, translateX: 200}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1}}
                            className="nav__item" onClick={() => setShow(false)}>
                            <Link to='#turismo'>
                                <p className={`text-slate-100 hover:text-slate-200 hover:border-b-2 hover:border-b-slate-300  pb-2 text-xl font-montserrat font-bold`}>Turismo</p>
                            </Link>
                        </motion.li>
                        <button onClick={() => setShow(false)}><p className='text-5xl'>X</p></button>
                </ul>
            </nav>
        </motion.header>}
    </>

  )
}

export default NavBar