import {motion} from 'framer-motion'
import muelle from '../../assets/imgs/muelle-landing.png'

const Faro = () => {

  return (
    <div className="relative bg-white">
        {/* <div className="pt-[50vh]"/> */}
        <div  className="relative">
            <div 

                className="flex justify-center items-start mx-auto relative gap-12 h-[200vh]"
            >

                <div className="w-[1180px] flex flex-col justify-center items-center gap-10 relative z-10 mt-12">
                    <div className='flex flex-col gap-10 items-start justify-start mx-10'>
                        <motion.h2 
                            initial={{opacity: 0, translateX: -100}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1.6}}
                            className="text-9xl font-montserrat font-semibold">Islas Albizuri</motion.h2>
                        <motion.p 
                            initial={{opacity: 0, translateX: -100}}
                            whileInView={{opacity: 1, translateX: 0}}
                            transition={{duration: 1.7}}
                            className="text-xl font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae repellendus ducimus, id itaque quod provident ea quibusdam minima ipsa, cumque inventore esse rem quaerat commodi iste illum quo omnis.</motion.p>
                    </div>
                    <motion.p 
                        initial={{opacity: 0, translateX: -100}}
                        whileInView={{opacity: 1, translateX: 0}}
                        transition={{duration: 1.7}}
                        className="text-xl text-slate-100 font-palanquin bg-sky-500 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conozca más
                    </motion.p>
                </div>
                <motion.div 
                    initial={{opacity: 0, translateX: 100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.6}}
                    className='relative w-full h-screen flex justify-center items-center m-10'>
                    <div style={{backgroundImage: `url(${muelle})`}} className=" h-[580px] bg-center bg-cover rounded-xl w-full muelle-animate"></div>
                </motion.div>
                {/* <div className="relative z-10">
                
                </div> */}
                {/* <div className='w-[420px] h-[400px] bg-sky-500 rounded-[100%] absolute z-1 top-[-10%] translate-x-[150%] blur-[120px] '/>
                <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[70%] translate-y-[-120%] blur-[160px] '/>
                <div className='w-[420px] h-[300px] bg-sky-400 rounded-[100%] absolute z-1 top-[20%] translate-x-[-150%] blur-[100px] '/> */}
            </div>
        </div>
    </div>
  )
}

export default Faro