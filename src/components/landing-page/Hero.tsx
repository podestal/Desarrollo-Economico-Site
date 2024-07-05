import c1 from '../../assets/imgs/c1.png'
import c2 from '../../assets/imgs/c2.png'
import c3 from '../../assets/imgs/c3.png'
import c4 from '../../assets/imgs/c4.png'
import c5 from '../../assets/imgs/c5.png'
import c6 from '../../assets/imgs/c6.png'
import c7 from '../../assets/imgs/c7.png'
import c8 from '../../assets/imgs/c8.png'
import c9 from '../../assets/imgs/c9.png'
import c10 from '../../assets/imgs/c10.png'
import c11 from '../../assets/imgs/c11.png'
import c12 from '../../assets/imgs/c12.png'
import c13 from '../../assets/imgs/c13.png'
import c14 from '../../assets/imgs/c14.png'
import c15 from '../../assets/imgs/c15.png'
import c16 from '../../assets/imgs/c16.png'
import wave from '../../assets/imgs/wave.png'
import { animate, motion, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'
import useMeasure from 'react-use-measure'

const imgs = [
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16
]

const Hero = () => {

    let [ref, {height}] = useMeasure()

    const xtranslation = useMotionValue(0)
  
    useEffect(() => {
  
      let controls
      let finalPosition = -height / 2 - 16
      controls = animate(xtranslation, [0, finalPosition], {
        ease: 'linear',
        duration: 25,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }, [xtranslation, height])

  return (
    <div className="w-[100%] h-screen relative">
      <div className="max-w-[1180px] xl:max-w-[1920px] flex justify-center mx-auto gap-12"> 
        <div className='h-screen w-full flex flex-col justify-center max-lg:items-center items-start relative z-10 px-4 mx-10'>
          <div className='flex flex-col justify-start max-lg:items-center items-start max-md:gap-12'>
            <h2 className='text-7xl lg:text-[130px] drop-shadow-lg lg:hidden bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-bold'>Islay</h2> 
            <h2 className='text-6xl md:text-7xl lg:text-[130px] 2xl:text-[180px] 2xl:leading-[11rem]  max-lg:text-center font-palanquin w-full md:leading-[7.5rem] text-slate-200 font-bold'><span className=' drop-shadow-lg max-lg:hidden bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-bold '>Islay </span>te dá la bienvenida </h2>
          </div>
          <p className='w-[70%] max-lg:text-center text-slate-300 md:text-2xl 2xl:text-4xl leading-10 my-12 xl:my-20 rounded-xl'>El puerto Arequipa, una puerta para conectarnos con el mundo</p>
        </div>
        <motion.div ref={ref} className='flex flex-col gap-12 px-20 items-end max-lg:hidden relative z-10' style={{y: xtranslation}}>
            {[...imgs ].map(img => <motion.div key={img} style={{backgroundImage: `url(${img})`}} className='w-[180px] h-[180px] 2xl:w-[300px] 2xl:h-[300px] bg-center bg-cover rounded-xl'></motion.div>)}
        </motion.div>
      </div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave1'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave2'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave3'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave4'></div>
    </div>

  )
}

export default Hero

