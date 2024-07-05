import { motion } from 'framer-motion'
import { RiArrowDownDoubleLine } from '@remixicon/react'
import { Icon } from '@tremor/react'
import { Caleta } from "../../data/data"
import { useState } from 'react'

interface Props {
    caletaData: Caleta
}

const TouristSections = ({ caletaData }: Props) => {

    const [info, setInfo] = useState(false)
    
  return (
    <section className='sticky top-0 h-[100vh] w-full'>
        <div style={{backgroundImage: `url(${caletaData.img})`}} className=" h-screen bg-center bg-cover bg-no-repeat absolute top-0 right-0 w-full"></div>
        {!info && <motion.div 
            initial={{ "--x": "100%", positionY: 100 }}
            animate={{ "--x": "-100%", positionY: 100 }}
            whileTap={{ scale: 0.90 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.2,
                type: "spring",
                stiffness: 40,
                damping: 180,
                mass: 0.8,
                scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
                },
            }}
            onClick={() => setInfo(true)}
            className='flex justify-center items-start cursor-pointer linear-mask w-[250px] mx-auto'>
            <div className='flex flex-col mt-20'>
                <h2 className='text-4xl text-slate-50 relative z-100 font-montserrat'>Info</h2>
                <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className='mx-auto'>
                    <Icon className='relative z-100' icon={RiArrowDownDoubleLine} color='white' size='xl'/>
                </motion.div>
            </div>
        </motion.div>}
        {info && 
        <div className='relative w-full h-full'>
            <motion.div 
                initial={{opacity: 0, translateY: 200}}
                whileInView={{opacity: 0.7, translateY: 0}}
                transition={{duration: 0.8}}
                className=" bg-black opacity-70 absolute top-0 right-0 w-full z-10 text-white h-screen">
                    <motion.div 
                        initial={{opacity: 0, translateX: 200}}
                        whileInView={{opacity: 0.7, translateX: 0}}
                        transition={{duration: 2}}
                        className='relative z-50 flex flex-col m-8 justify-center items-center w-[380px] mx-auto lg:w-[1180px]'>
                        <button className='mb-10 ' onClick={() => setInfo(false)}><p className='text-4xl'>X</p></button>
                        <h3 className='text-8xl mb-10'>{caletaData.title}</h3>
                        <p className='text-center text-2xl leading-[2.8rem]'>{caletaData.content}</p>  
                    </motion.div>
            </motion.div>    
        </div>}
    </section>
  )
}

export default TouristSections