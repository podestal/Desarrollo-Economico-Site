import { useScroll, motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useRef } from "react"
import landingImg from '../../assets/imgs/caleta-landing.png'

const Caleta = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['0.5 1.5', '1 1']
    })

  return (
    <section className="w-full relative bg-white">
        <motion.div 
            style={{scale: scrollYProgress, opacity: scrollYProgress}} 
            // style={{y}}
            ref={container}
            className="flex justify-center items-start h-screen mx-auto relative"
        >
            <div id="turismo" className="lg:max-w-[1180px] max-md:pt-20 flex flex-col justify-center items-center gap-8 max-lg:gap-10 relative z-10 mt-12 px-6">
                <h2 className="lg:text-9xl text-5xl md:text-6xl font-montserrat font-semibold">Centeno</h2>
                <p className="text-md md:text-lg lg:text-xl text-center font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae repellendus ducimus, id itaque quod provident ea quibusdam minima ipsa, cumque inventore esse rem quaerat commodi iste illum quo omnis.</p>
                <Link to='caleta'><p className="text-lg text-slate-100 font-palanquin bg-sky-500 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conozca más</p></Link>
            </div>
            <div style={{backgroundImage: `url(${landingImg})`}} className=" h-[380px] bg-center bg-cover rounded-xl absolute bottom-0 w-full"></div>
        </motion.div>
    </section>
  )
}

export default Caleta


