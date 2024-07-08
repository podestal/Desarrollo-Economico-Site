import { useScroll, motion } from "framer-motion"
import { useRef, useState } from "react"
import landingImg from '../../assets/imgs/caleta-landing.png'
import landingImgs from '../../assets/imgs/caleta-landing-s.png'
import { HashLink as Link } from "react-router-hash-link"

const Caleta = () => {

    const container = useRef(null)
    const [loading, setLoading] = useState(true)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['0.5 1.5', '1 1']
    })

  return (
    <section className="w-full relative bg-white ">
        <motion.div 
            style={{scale: scrollYProgress, opacity: scrollYProgress}} 
            ref={container}
            className="flex justify-center items-start h-screen mx-auto relative"
        >
            <div id="turismo" className="2xl:mt-20 xl:max-w-[1920px] lg:max-w-[1180px] max-lg:pt-20 flex flex-col justify-center items-center gap-8 max-lg:gap-10 relative z-10 mt-12 px-6">
                <h2 className="2xl:text-[150px] lg:text-9xl text-6xl md:text-8xl font-montserrat font-semibold">Caletas</h2>
                {/* <p className="2xl:text-2xl xl:leading-[3rem] text-md md:text-lg lg:text-xl text-center font-poppins">Encanto Costero</p> */}
                <Link to='caleta/#caleta-page'><p className="2xl:text-2xl text-lg text-slate-100 font-palanquin bg-sky-500 2xl:px-12 2xl:py-4 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conozca más</p></Link>
            </div>
            {loading && <img src={landingImgs} loading='lazy' role='presentation' className='h-screen object-cover  absolute top-0 right-0 w-full z-20' /> }
            <img src={landingImg} onLoad={() => setLoading(false)} loading='lazy' role='presentation'  className="2xl:h-[560px] max-lg:h-[220px] h-380 object-cover rounded-xl absolute bottom-0 w-full" />
        </motion.div>
    </section>
  )
}

export default Caleta


