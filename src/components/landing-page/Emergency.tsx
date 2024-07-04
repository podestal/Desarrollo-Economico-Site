import { RiHome3Fill, RiPhoneFill } from "@remixicon/react"
import { Icon } from "@tremor/react"
import {motion} from 'framer-motion'

const Emergency = () => {
  return (
    <section id="emergency" className="w-[100%] bg-white min-h-screen flex flex-col justify-start items-center gap-12 p-12 overflow-hidden">
        <motion.h2 
            initial={{opacity: 0, translateY: 100}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 2}}
            className="text-7xl lg:text-8xl font-montserrat text-sate-900 w-full text-center">Servicios de Emergencia</motion.h2>
        <div className={`w-[85%] grid grid-cols-1 xl:grid-cols-3 gap-20 text-slate-900`}>
            <motion.div 
                initial={{opacity: 0, translateX: 200}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 2}}
                className="card-wrapper">
                <div 
                    className="card-content py-8 px-4 flex flex-col justify-center items-center gap-6 rounded-3xl">
                    <h3 className="text-6xl font-palanquin mb-6  font-bold">Policía</h3>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiHome3Fill} size="xl"/>
                        <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                        <p>054-532558</p>
                    </div>
                </div>  
            </motion.div>
            <motion.div 
                initial={{opacity: 0, translateX: -200}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 2}}
                className=" py-8 px-4 flex flex-col justify-center items-center gap-6 rounded-3xl  shadow-slate-950 shadow-2xl">
                <h3 className="text-6xl font-palanquin mb-6  font-bold">Hospital</h3>
                <div className="w-full flex justify-start items-center gap-6">
                    <Icon icon={RiHome3Fill} size="xl"/>
                    <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                </div>
                <div className="w-full flex justify-start items-center gap-6">
                    <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                    <p>054-532558</p>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, translateX: 200}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 2.4}}
                className="card-wrapper">
                <div className="card-content py-8 px-4 flex flex-col justify-center items-center gap-6 rounded-3xl  ">
                    <h3 className="text-6xl font-palanquin mb-6  font-bold">Serenazgo</h3>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiHome3Fill} size="xl"/>
                        <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                        <p>054-532558</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Emergency