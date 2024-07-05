import { motion } from 'framer-motion'
import { RiArrowDownDoubleLine } from '@remixicon/react'
import { Icon } from '@tremor/react'
import { Bosque } from "../../data/data"
import { CSSProperties, useState } from 'react'

interface Props {
    bosqueData: Bosque
}

const BosqueSections = ({ bosqueData }: Props) => {

    const [info, setInfo] = useState(false)

  return (
    <section className='sticky top-0 h-[100vh] w-full'>
        <div style={{backgroundImage: `url(${bosqueData.img})`}} className=" h-screen bg-center bg-cover bg-no-repeat absolute top-0 right-0 w-full"></div>
        {!info && <div 
            onClick={() => setInfo(true)}
            className='flex justify-center items-start cursor-pointer w-[250px] mx-auto'>
            <div className='relative flex flex-col mt-20 pulse z-50'>
                <h2 className='text-3xl font-bold text-blue-500 p-4 relative z-50 font-montserrat'>Info</h2>
            </div>
        </div>}
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
                        <h3 className='text-8xl mb-10'>{bosqueData.title}</h3>
                        <p className='text-center text-2xl leading-[2.8rem]'>{bosqueData.content}</p>  
                    </motion.div>
            </motion.div>    
        </div>}
    </section>
  )
}

export default BosqueSections