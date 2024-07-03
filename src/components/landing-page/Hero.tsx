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
      let finalPosition = -height / 2 - 8
      controls = animate(xtranslation, [0, finalPosition], {
        ease: 'linear',
        duration: 25,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }, [xtranslation, height])

  return (
    <div className="w-full h-screen bg-blue-500">
        <div className="w-[1180px] flex justify-center mx-auto gap-12">
          <div className='w-full h-[100vh] flex flex-col justify-center items-start relative z-10'>
                <p className='text-[130px] font-palanquin w-full leading-[7.5rem] text-slate-200 font-bold'><span className='drop-shadow-lg bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent'>Islay</span> te dá la bienvenida </p>
                <p className='w-[70%] text-slate-300 text-2xl leading-10 my-12 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum officia praesentium</p>
            </div>
            <motion.div ref={ref} className='flex flex-col gap-12 px-20 items-end relative z-10' style={{y: xtranslation}}>
                {[...imgs ].map(img => <motion.div key={img} style={{backgroundImage: `url(${img})`}} className='w-[180px] h-[180px] bg-center bg-cover rounded-xl'></motion.div>)}
            </motion.div>
            {/*  */}
            {/*  */}
            {/* <div className='circlePosition w-[520px] h-[400px] bg-sky-300 rounded-[100%] absolute z-1 translate-x-[-80%] translate-y-[-50%] blur-[190px] '/> */}
            {/* <div className='circlePosition w-[720px] h-[400px] bg-sky-400 rounded-[100%] absolute z-1 translate-x-[50%] translate-y-[70%] blur-[210px] '/> */}
        </div>
        {/* <div className='w-[150px] h-[150px] absolute top-0 cube'>

        </div>
        {/*   */}
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave1'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave2'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave3'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave4'></div>
    </div>

  )
}

export default Hero

