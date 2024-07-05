import { RiHome3Fill, RiPhoneFill } from "@remixicon/react"
import { Icon } from "@tremor/react"
import {motion} from 'framer-motion'
// grid grid-cols-1 lg:grid-cols-3
const Emergency = () => {
  return (
    <section className="mx-auto w-full  bg-white min-h-screen flex flex-col justify-start items-center gap-12 p-12 my-20">
        <motion.h2 
            initial={{opacity: 0, translateY: 100}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 2}}
            className="text-5xl md:text-7xl lg:text-7xl xl:text-9xl xl:my-12 font-montserrat text-sate-900 w-full text-center py-12">Servicios de Emergencia</motion.h2>
        <div className={` lg:max-w-[1180px] 2xl:max-w-[1920px]  w-full flex max-lg:flex-col gap-10 lg:gap-20 text-slate-900`}>
            <div className="w-full xl:w-[400px] lg:w-[300px] min-h-[300px] mx-auto ">
                <div 
                    className="card-wrapper py-8 px-16">
                    <div className="card-content flex flex-col justify-center items-center gap-6 rounded-3xl">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-palanquin mb-6  font-bold">Policía</h3>
                        <div className="w-full flex max-md:flex-col justify-start items-center gap-6">
                            <Icon icon={RiHome3Fill} size="xl"/>
                            <p className="xl:text-2xl font-montserrat max-md:text-sm max-md:text-center">Comisaria de Matarani Av Arequipa sin número</p>
                        </div>
                        <div className="w-full flex max-md:flex-col justify-start items-center gap-6">
                            <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                            <p className="xl:text-2xl font-montserrat max-md:text-sm max-md:text-center">054-557059</p>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div 
                initial={{opacity: 0, translateX: -100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 2}}
                className="py-8 px-4 flex flex-col justify-center items-center gap-6 rounded-3xl w-full lg:w-[350px] shadow-slate-950 shadow-2xl">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-palanquin mb-6 text-center font-bold">Centros de Salud</h3>
                <div className="w-full flex max-md:flex-col justify-start items-center gap-6">
                    <Icon icon={RiHome3Fill} size="xl"/>
                    <p className="font-poppins max-md:text-center">Centro de Salud Matarani Calle Tupac Amaru S/N</p>
                </div>
                <div className="w-full flex max-md:flex-col justify-start items-center gap-6">
                    <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                    <p>054-557004</p>
                </div>
                <div className="w-full flex max-md:flex-col justify-start items-center gap-6">
                    <Icon icon={RiHome3Fill} size="xl"/>
                    <p className="font-poppins max-md:text-center">ESSALUD Matarani Calle Simón Bolívar 620</p>
                </div>
                <div className="w-full flex max-md:flex-col justify-start items-center gap-6">
                    <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                    <p>054-557118</p>
                </div>
            </motion.div>
            <div 
                
                className="w-full xl:w-[400px] lg:w-[300px] min-h-[300px] mx-auto ">
                <div 
                    className="card-wrapper py-8 px-16">
                    <div className="card-content flex flex-col justify-center items-center gap-6 rounded-3xl">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-palanquin mb-6  font-bold">Serenazgo</h3>
                        <div className="w-full flex max-md:flex-col justify-start items-center gap-6">
                            <Icon icon={RiHome3Fill} size="xl"/>
                            <p className="xl:text-2xl font-montserrat max-md:text-sm max-md:text-center">Coliseo Cerrado de Indoamérica</p>
                        </div>
                        <div className="w-full flex max-md:flex-col justify-start items-center gap-6">
                            <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                            <p className="xl:text-2xl font-montserrat max-md:text-sm max-md:text-center">914-989450</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Emergency