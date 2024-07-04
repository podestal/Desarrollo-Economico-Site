import {motion} from 'framer-motion'
import muelle from '../../assets/imgs/muelle-landing.png'
import { Link } from 'react-router-dom'

const Faro = () => {

  return (
    <div className=" bg-white">
        <div  className="">
            <div 
                className="flex max-lg:flex-col justify-center items-start mx-auto relative gap-12 lg:h-[100vh] h-[150vh]"
            >
                <div className="w-[100%] flex flex-col justify-center items-center gap-10 relative z-10 mt-12">
                    <div className='w-full flex flex-col gap-10 items-center justify-start px-12'>
                        <motion.h2 
                            initial={{opacity: 0, translateX: -100}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1.6}}
                            className="text-8xl lg:text-9xl max-lg:text-center font-montserrat font-semibold">Islas Albizuri
                        </motion.h2>
                        <motion.p 
                            initial={{opacity: 0, translateX: -100}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1.7}}
                            className="text-xl font-poppins max-lg:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae repellendus ducimus, id itaque quod provident ea quibusdam minima ipsa, cumque inventore esse rem quaerat commodi iste illum quo omnis.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{opacity: 0, translateX: -100}}
                        whileInView={{opacity: 1, translateX: 0}}
                        transition={{duration: 1.7}}
                    >
                        <Link to='/islas'>
                            <p className='className="text-xl text-slate-100 font-palanquin bg-sky-500 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300"'>Conoce más</p>
                        </Link>
                    </motion.div>
                </div>
                <div 
                    className='relative w-full flex justify-center items-center lg:m-10'>
                    <div style={{backgroundImage: `url(${muelle})`}} className="lg:w-full md:w-[500px] w-[300px] h-[400px] lg:h-[580px] bg-center bg-cover rounded-xl muelle-animate"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faro