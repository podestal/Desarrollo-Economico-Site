import { caletasData } from '../data/data'
import TouristSections from '../components/tourism/TouristSections'
import { motion } from 'framer-motion'

const CaletaPage = () => {

  return (
    <>
    <div id='caleta-page'></div>
    <motion.div 
        initial={{opacity: 0, translateY: -200}}
        whileInView={{opacity: 1, translateY: 0}}
        transition={{duration: 1.5}}
        className="relative h-[500vh] w-full">
        <>
            {caletasData.map( caletaData => (
                <>
                    <TouristSections 
                        caletaData={caletaData}
                    />
                </>
            ))}
        </>
    </motion.div>
    </>
  )
}

export default CaletaPage
