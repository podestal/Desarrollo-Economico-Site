import { useScroll } from "framer-motion"
import { useRef } from "react"
import {motion} from 'framer-motion'
import landingImg from '../../assets/imgs/caleta-landing.png'

const Caleta = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['0 1', '1 1']
    })

  return (
    <div  className="relative h-screen bg-white">
        <motion.div 
            style={{scale: scrollYProgress, opacity: scrollYProgress}} 
            ref={container}
            className="flex justify-center items-start h-screen mx-auto relative"
        >
            <div className="w-[1180px] flex flex-col justify-center items-center gap-6 relative z-10 mt-12">
                <h2 className="text-7xl">La Caleta de ...</h2>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae repellendus ducimus, id itaque quod provident ea quibusdam minima ipsa, cumque inventore esse rem quaerat commodi iste illum quo omnis.</p>
                <p className="text-xl font-palanquin">Conozca más</p>
            </div>
            {/* <div className="relative z-10">
               
            </div> */}
            <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[70%] translate-y-[-120%] blur-[160px] '/>
            <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[20%] translate-x-[-150%] blur-[100px] '/>
            <div style={{backgroundImage: `url(${landingImg})`}} className=" h-[380px] bg-center bg-cover rounded-xl absolute bottom-0 w-full"></div>
        </motion.div>
    </div>
  )
}

export default Caleta


