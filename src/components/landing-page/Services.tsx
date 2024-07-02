import Index from "../../maps-advisor/Index"
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <div className="w-full h-screen bg-slate-50">
        <motion.div 
            initial={{opacity: 0, translateY: 300}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.4}}
            className="flex flex-col justify-center items-center">
            <h2 className="text-9xl font-palanquin relative ">Explora</h2>
            <Index />
        </motion.div>
    </div>
  )
}

export default Services