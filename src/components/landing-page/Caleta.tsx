import { useScroll } from "framer-motion"
import { useRef } from "react"
import {motion} from 'framer-motion'
import landingImg from '../../assets/imgs/caleta-landing.png'

const Caleta = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['0.5 1.5', '1 1']
    })

    // const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <div  className="w-full relative h-[150vh] bg-white">
        <motion.div 
            style={{scale: scrollYProgress, opacity: scrollYProgress}} 
            // style={{y}}
            ref={container}
            className="flex justify-center items-start h-screen mx-auto relative"
        >
            <div className="w-[1180px] flex flex-col justify-center items-center gap-6 relative z-10 mt-12">
                <h2 className="text-9xl font-montserrat font-semibold">Centeno</h2>
                <p className="text-xl text-center font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae repellendus ducimus, id itaque quod provident ea quibusdam minima ipsa, cumque inventore esse rem quaerat commodi iste illum quo omnis.</p>
                <p className="text-xl text-slate-100 font-palanquin bg-sky-500 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conozca más</p>
            </div>
            {/* <div className="relative z-10">
               
            </div> */}
            {/* <div className='w-[420px] h-[400px] bg-sky-500 rounded-[100%] absolute z-1 top-[-10%] translate-x-[150%] blur-[120px] '/> */}
            {/* <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[70%] translate-y-[-120%] blur-[160px] '/> */}
            {/* <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[20%] translate-x-[-150%] blur-[100px] '/> */}
            <div style={{backgroundImage: `url(${landingImg})`}} className=" h-[380px] bg-center bg-cover rounded-xl absolute bottom-0 w-full"></div>
        </motion.div>
    </div>
  )
}

export default Caleta


