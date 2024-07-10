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
import c1s from '../../assets/imgs/c1-s.png'
import c2s from '../../assets/imgs/c2-s.png'
import c3s from '../../assets/imgs/c3-s.png'
import c4s from '../../assets/imgs/c4-s.png'
import c5s from '../../assets/imgs/c5-s.png'
import c6s from '../../assets/imgs/c6-s.png'
import c7s from '../../assets/imgs/c7-s.png'
import c8s from '../../assets/imgs/c8-s.png'
import c9s from '../../assets/imgs/c9-s.png'
import c10s from '../../assets/imgs/c10-s.png'
import c11s from '../../assets/imgs/c11-s.png'
import c12s from '../../assets/imgs/c12-s.png'
import c13s from '../../assets/imgs/c13-s.png'
import c14s from '../../assets/imgs/c14-s.png'
import c15s from '../../assets/imgs/c15-s.png'
import c16s from '../../assets/imgs/c16-s.png'
import wave from '../../assets/imgs/wave.png'
import heroMobile from '../../assets/imgs/hero-mobile.png'
import heroMobiles from '../../assets/imgs/hero-mobile-s.png'
import { animate, motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

const imgs = [
  {
    img: c1,
    imgLoading: c1s
  },
  {
    img: c2,
    imgLoading: c2s
  },
  {
    img: c3,
    imgLoading: c3s
  },
  {
    img: c4,
    imgLoading: c4s
  },
  {
    img: c5,
    imgLoading: c5s
  },
  {
    img: c6,
    imgLoading: c6s
  },
  {
    img: c7,
    imgLoading: c7s
  },
  {
    img: c8,
    imgLoading: c8s
  },
  {
    img: c9,
    imgLoading: c9s
  },
  {
    img: c10,
    imgLoading: c10s
  },
  {
    img: c11,
    imgLoading: c11s
  },
  {
    img: c12,
    imgLoading: c12s
  },
  {
    img: c13,
    imgLoading: c13s
  },
  {
    img: c14,
    imgLoading: c14s
  },
  {
    img: c15,
    imgLoading: c15s
  },
  {
    img: c16,
    imgLoading: c16s
  },

]

const Hero = () => {

    let [ref, {height}] = useMeasure()

    const xtranslation = useMotionValue(0)
    const [loading, setLoading] = useState(true)
    const [carouselLoading, setCarouselLoading] = useState(true)
  
    useEffect(() => {
  
      let finalPosition = -height / 2 - 16
      animate(xtranslation, [0, finalPosition], {
        ease: 'linear',
        duration: 25,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }, [xtranslation, height])

  return (
    <div className="w-[100%] h-screen relative">
      <div className="lg:max-w-[660px] xl:max-w-[1180px] 2xl:max-w-[1920px] flex justify-center mx-auto gap-12"> 
        <motion.div 
          initial={{opacity: 0, translateX: -100}}
          whileInView={{opacity: 1, translateX: 0}}
          transition={{duration: 1.4}}
          className='h-screen w-full flex flex-col justify-center max-lg:items-center items-start relative z-30 px-4 mx-10'>
          <div className='flex flex-col justify-start max-lg:items-center items-start max-md:gap-2'>
            <h2 className='text-7xl md:text-8xl 2xl:text-[180px] lg:text-[130px] mb-6 drop-shadow-lg bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-bold max-lg:font-montserrat'>ISLAY</h2> 
            <h2 className='max-lg:font-bold text-5xl md:text-6xl lg:text-[110px] 2xl:text-[160px] xl:leading-[7.5rem] 2xl:leading-[11rem]  max-lg:text-center font-palanquin w-full max-lg:font-palanquin max-lg:leading-[3.5rem] text-slate-200 '><span className=' drop-shadow-lg max-lg:hidden hidden bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-bold '>ISLAY</span> TE DA LA BIENVENIDA </h2>
          </div>
          <p className='w-[70%] max-lg:text-center text-slate-300 md:text-2xl 2xl:text-4xl leading-10 my-12 xl:my-20 rounded-xl font-poppins'>El puerto de Arequipa, una puerta para conectarnos con el mundo</p>
        </motion.div>
        <motion.div ref={ref} className='flex flex-col gap-12 mx-10 items-end max-lg:hidden relative z-10' style={{y: xtranslation}}>
            {/* {[...imgs ].map(img => <motion.div key={img.img} style={{backgroundImage: `url(${img.img})`}} className='w-[180px] h-[180px] 2xl:w-[300px] 2xl:h-[300px] bg-center bg-cover rounded-xl'></motion.div>)} */}
            {[...imgs ].map(img => 
              <>
                {carouselLoading && <motion.img key={img.imgLoading} src={img.imgLoading} className='w-[180px] h-[140px] 2xl:w-[300px] 2xl:h-[260px] object-cover rounded-xl' />}
                <motion.img loading='lazy' onLoad={() => setCarouselLoading(false)} key={img.img} src={img.img} className='w-[180px] h-[140px] 2xl:w-[300px] 2xl:h-[260px] object-cover rounded-xl' />
              </>
              )}
        </motion.div>
      </div>
        <div className='absolute top-0 w-full h-full bg-black z-20 opacity-60 lg:hidden'/>
        {loading && <img src={heroMobiles} loading='lazy' role='presentation' className='lg:hidden h-screen object-cover  absolute top-0 right-0 w-full z-20' /> }
        <img src={heroMobile} className='h-full w-full absolute top-0 z-10 lg:hidden object-cover' loading='lazy' onLoad={() => setLoading(false)} />
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave1'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave2'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='absolute bottom-0 left-0 w-[100%] h-[100px] wave3'></div>
        <div style={{backgroundImage: `url(${wave})`, backgroundSize: '1000px 100px'}} className='max-md:hidden absolute bottom-0 left-0 w-[100%] h-[100px] wave4'></div>
    </div>

  )
}

export default Hero

