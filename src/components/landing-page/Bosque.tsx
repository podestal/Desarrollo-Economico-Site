import {motion} from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link'
import bosque from '../../assets/imgs/piedras-landing.png'

const Bosque = () => {

  return (

        <div  className="relative bg-white">
            <div 
                className="flex justify-center items-center h-screen mx-auto relative gap-12"
            >

                <motion.div 
                    initial={{opacity: 0, translateY: 100}}
                    whileInView={{opacity: 1, translateY: 0}}
                    transition={{duration: 2}}
                    className="w-[1180px] flex flex-col justify-center items-center gap-10 relative z-20 mt-12 text-slate-100">
                    <div className='flex flex-col flex-1 gap-10 items-start justify-start mx-10 '>
                        <h2 className="text-6xl 2xl:text-[150px] md:text-8xl lg:text-9xl font-montserrat font-semibold text-center">Bosque de Piedras</h2>
                        <p className="2xl:text-2xl lg:text-lg 2xl:leading-[2.5rem] text-md text-slate-300 font-poppins text-center leading-8 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    {/* to='/islas/#islas-page' */}
                    <Link to='/bosque/#bosques-page'>
                        <p className="2xl:text-2xl text-lg text-slate-100 font-palanquin bg-sky-500 2xl:px-12 2xl:py-4 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conozca más</p>
                    </Link>
                </motion.div>

            <div className='h-screen w-full bg-center bg-cover bg-black absolute z-10 top-0 opacity-45'/>
            <img src={bosque} loading='lazy' role='presentation' className=" h-screen bg-center object-cover  bg-cover absolute bottom-0 right-0 w-full" />
            </div>
        </div>

  )
}

export default Bosque