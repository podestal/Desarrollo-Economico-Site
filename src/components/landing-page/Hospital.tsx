import {motion} from 'framer-motion'
import { useRef } from 'react'

const Hospital = () => {

    const container = useRef(null)

  return (
    <div  className="relative h-screen bg-red-700">
        <motion.div 
            // style={{scale: scrollYProgress, opacity: scrollYProgress}} 
            // style={{y}}
            ref={container}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{rotate: "180deg"}}
            transition={{duration: 1}}
            className="flex justify-center items-start h-screen mx-auto relative"
        >
            <div className="w-[1180px] flex flex-col justify-center items-center gap-6 relative z-10 mt-12">
                <h2 className="text-9xl font-montserrat">Centeno</h2>
                <p className="text-xl text-center font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae repellendus ducimus, id itaque quod provident ea quibusdam minima ipsa, cumque inventore esse rem quaerat commodi iste illum quo omnis.</p>
                <p className="text-xl text-slate-200 font-palanquin bg-sky-500 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conozca más</p>
            </div>
            {/* <div className="relative z-10">
               
            </div> */}
            {/* <div className='w-[420px] h-[400px] bg-sky-500 rounded-[100%] absolute z-1 top-[-10%] translate-x-[150%] blur-[120px] '/> */}
            {/* <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[70%] translate-y-[-120%] blur-[160px] '/> */}
            {/* <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[20%] translate-x-[-150%] blur-[100px] '/> */}
            {/* <div style={{backgroundImage: `url(${landingImg})`}} className=" h-[380px] bg-center bg-cover rounded-xl absolute bottom-0 w-full"></div> */}
        </motion.div>
    </div>
  )
}

export default Hospital