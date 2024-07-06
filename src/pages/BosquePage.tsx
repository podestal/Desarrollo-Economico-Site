import { bosqueData } from '../data/data'
import BosqueSections from '../components/tourism/BosqueSections'
import { motion } from 'framer-motion'

const BosquePage = () => {
  return (
    <>
    <div id='bosques-page'></div>
    <motion.div 
        initial={{opacity: 0, translateY: -200}}
        whileInView={{opacity: 1, translateY: 0}}
        transition={{duration: 1.5}}
        className="relative h-[500vh] w-full">
        <>
            {bosqueData.map( singleBosque => (
                <>
                    <BosqueSections 
                        bosqueData={singleBosque}
                    />
                </>
            ))}
        </>
    </motion.div>
    </>
  )
}

export default BosquePage