import Index from "../../maps-advisor/Index"
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <section className="w-full h-screen md:h-[100vh] bg-white ">
        <motion.div 
            initial={{opacity: 0, translateY: 300}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.4}}
            className="flex flex-col justify-center items-center h-full">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-palanquin relative mx-10">Explora</h2>
            <div className=" w-full mx-10">
                <Index />
            </div>
        </motion.div>
    </section>
  )
}

export default Services