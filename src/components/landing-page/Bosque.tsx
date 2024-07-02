import {motion} from 'framer-motion'
import bosque from '../../assets/imgs/piedras-landing.png'

const Bosque = () => {

  return (
    <div className="relative h-screen">
        <div  className="relative h-screen bg-white">
            <div 
                className="flex justify-center items-center h-screen mx-auto relative gap-12"
            >

                <motion.div 
                    initial={{opacity: 0, translateX: -100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.6}}
                    className="w-[1180px] flex flex-col justify-center items-center gap-10 relative z-20 mt-12 text-slate-200">
                    <div className='flex flex-col flex-1 gap-10 items-start justify-start mx-10'>
                        <h2 className="text-9xl font-montserrat font-bold text-center">Bosque de Piedras</h2>
                        <p className="text-xl font-poppins text-center leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae repellendus ducimus, id itaque quod provident ea quibusdam minima ipsa, cumque inventore esse rem quaerat commodi iste illum quo omnis.</p>
                    </div>
                    <p className="text-xl text-slate-200 font-palanquin bg-sky-500 px-6 py-2 rounded-3xl cursor-pointer hover:bg-sky-400 hover:text-slate-300">Conozca más</p>
                </motion.div>

            <div className='h-screen w-full bg-center bg-cover bg-black absolute z-10 top-0 opacity-45'/>
            <div style={{backgroundImage: `url(${bosque})`}} className=" h-screen bg-center bg-cover absolute bottom-0 right-0 w-full"></div>
            </div>
        </div>
    </div>
  )
}

export default Bosque