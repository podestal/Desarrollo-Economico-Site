import {motion} from 'framer-motion'
import muelle from '../../assets/imgs/muelle-landing.png'
import { HashLink as Link } from "react-router-hash-link"

const Faro = () => {
// className="w-full h-screen md:h-[150vh] bg-white"
  return (
    <div className="bg-white ">
            <div 
                className="xl:max-w-[1920px] lg:max-w-[1180px] flex max-md:flex-col justify-center items-center mx-auto gap-12 h-screen overflow-hidden"
            >
                <div className="w-[100%] flex flex-col justify-center 2xl:items-start items-center gap-10 relative z-10 mt-12">
                    <div className='flex flex-col  gap-10 items-center justify-start px-12'>
                        <motion.h2 
                            initial={{opacity: 0, translateY: -100}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{duration: 1.6}}
                            className="text-5xl md:text-8xl lg:text-9xl 2xl:text-[150px] max-lg:text-center font-montserrat font-semibold">Islas Albizuri
                        </motion.h2>
                        <motion.p 
                            initial={{opacity: 0, translateY: -100}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{duration: 1.7}}
                            className="text-md lg:text-xl 2xl:text-2xl 2xl:leading-[2.6rem] font-poppins max-lg:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{opacity: 0, translateY: -100}}
                        whileInView={{opacity: 1, translateY: 0}}
                        transition={{duration: 1.7}}
                    >
                        <Link to='/islas/#islas-page'>
                            <p className="2xl:text-2xl 2xl:mx-12 text-lg text-slate-100 font-palanquin bg-sky-500 2xl:px-12 2xl:py-4 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conoce más</p>
                        </Link>
                    </motion.div>
                </div>
                <div 
                    className='relative w-full flex justify-center items-center lg:m-10'>
                    <img className='object-cover xl:h-[620px] lg:w-full md:w-[320px] w-[300px] h-[220px] lg:h-[580px] bg-center bg-cover rounded-xl muelle-animate' src={muelle} alt="" />
                    {/* <div style={{backgroundImage: `url(${muelle})`}} className="xl:h-[620px] lg:w-full md:w-[500px] w-[300px] h-[220px] lg:h-[580px] bg-center bg-cover rounded-xl muelle-animate"></div> */}
                </div>
            </div>
    </div>
  )
}

export default Faro