import {motion, useScroll} from 'framer-motion'
import { useRef } from 'react'
import bosque from '../../assets/imgs/piedras-landing.png'

const Bosque = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['0 1', '1 1']
    })

  return (
    <div className="relative h-screen bg-sky-400">
        <div  className="relative h-screen bg-slate-300">
            <motion.div 
                style={{scale: scrollYProgress, opacity: scrollYProgress}} 
                ref={container}
                className="flex justify-center items-center h-screen mx-auto relative gap-12"
            >

                <div className="w-[1180px] flex flex-col justify-center items-center gap-10 relative z-10 mt-12">
                    <div className='flex flex-col flex-1 gap-10 items-start justify-start mx-10'>
                        <h2 className="text-9xl font-montserrat">Bosque de Piedras</h2>
                        <p className="text-xl font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae repellendus ducimus, id itaque quod provident ea quibusdam minima ipsa, cumque inventore esse rem quaerat commodi iste illum quo omnis.</p>
                    </div>
                    <p className="text-xl text-slate-200 font-palanquin bg-sky-500 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conozca más</p>
                </div>
                <div className='relative w-full h-screen flex justify-center'>
                    <div style={{backgroundImage: `url(${bosque})`}} className=" h-screen bg-center bg-cover absolute bottom-0 right-0 w-full"></div>
                </div>
                {/* <div className="relative z-10">
                
                </div> */}
                {/* <div className='w-[420px] h-[400px] bg-sky-500 rounded-[100%] absolute z-1 top-[-10%] translate-x-[150%] blur-[120px] '/>
                <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[70%] translate-y-[-120%] blur-[160px] '/>
                <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[20%] translate-x-[-150%] blur-[100px] '/> */}
            </motion.div>
        </div>
    </div>
  )
}

export default Bosque