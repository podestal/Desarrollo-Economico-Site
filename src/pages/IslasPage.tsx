import IslasSections from "../components/tourism/IslasSections"
import {motion} from 'framer-motion'
import { islasData } from "../data/data"

const IslasPage = () => {
  return (
    <>
    <div id='islas-page'></div>
    <motion.div 
        initial={{opacity: 0, translateY: -200}}
        whileInView={{opacity: 1, translateY: 0}}
        transition={{duration: 1.5}}
        className="relative h-[500vh] w-full">
        <>
            {islasData.map( islaData => (
                <>
                    <IslasSections 
                        islaData={islaData}
                    />
                </>
            ))}
        </>
    </motion.div>
    </>
  )
}

export default IslasPage