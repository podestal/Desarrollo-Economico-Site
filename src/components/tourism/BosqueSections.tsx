import { motion, AnimatePresence } from 'framer-motion'
import { Bosque } from "../../data/data"
import { useState } from 'react'

interface Props {
    bosqueData: Bosque
}

const BosqueSections = ({ bosqueData }: Props) => {

    const [info, setInfo] = useState(false)
    const [loading, setLoading] = useState(true)

  return (
    <section className='sticky top-0 h-[100vh] w-full'>
        {loading && <img src={bosqueData.preImg} loading='lazy' role='presentation' className='h-screen object-cover  absolute top-0 right-0 w-full z-20' /> }
        <img src={bosqueData.img} onLoad={() => setLoading(false) }  loading='lazy' role='presentation' className='h-screen object-cover  absolute top-0 right-0 w-full' />
        {!info && <div 
            onClick={() => setInfo(true)}
            className='flex justify-center items-start cursor-pointer w-[250px] mx-auto'>
            <div className='relative flex flex-col mt-20 pulse z-50'>
                <h2 className='text-2xl font-semibold text-blue-500 p-4 relative z-50 font-montserrat'>Info</h2>
            </div>
        </div>}
        <AnimatePresence>
        {info && 
        <div className='relative w-full h-full'>
            <motion.div 
                initial={{opacity: 0, translateY: 200}}
                whileInView={{opacity: 0.7, translateY: 0}}
                transition={{duration: 1}}
                exit={{ opacity: 0, translateY: 200 }}
                className=" bg-black opacity-70 absolute top-0 right-0 w-full z-10 text-white h-screen">
                    <motion.div 
                        initial={{opacity: 0, translateX: 200}}
                        whileInView={{opacity: 0.7, translateX: 0}}
                        transition={{duration: 2}}
                        className='relative z-50 flex flex-col m-8 justify-center items-center w-[380px] mx-auto md:w-[560px] lg:w-[880px] xl:w-[1180px]'>
                        <button className='mb-10 ' onClick={() => setInfo(false)}><p className='text-4xl'>X</p></button>
                        <h3 className='max-lg:text-6xl text-8xl mb-10 text-center mx-2'>{bosqueData.title}</h3>
                        <p className='max-lg:text-lg max-lg:leading-[2rem] text-center text-2xl leading-[2.8rem] mx-2'>{bosqueData.content}</p>  
                    </motion.div>
            </motion.div>    
        </div>}
        </AnimatePresence>
        
    </section>
  )
}

export default BosqueSections