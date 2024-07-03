import { useMotionValueEvent, useScroll } from "framer-motion"
import Lenis from "lenis"
import { useEffect, useState } from "react"
import Hero from "../components/landing-page/Hero"
import Caleta from "../components/landing-page/Caleta"
import Bosque from "../components/landing-page/Bosque"
import Faro from "../components/landing-page/Faro"
import NavBar from "../components/landing-page/NavBar"
import Services from "../components/landing-page/Services"
import Emergency from "../components/landing-page/Emergency"
import Footer from "../components/landing-page/Footer"


const MainPage = () => {

    const {scrollY} = useScroll()
    const [navFixed, setNavFixed] = useState(true)

    useMotionValueEvent(scrollY, 'change', latest => {
        if (latest >= 15) {
            setNavFixed(false)
        }
        if (latest < 15) {
            setNavFixed(true)
        }         
    })
        
        

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
      
          requestAnimationFrame(raf)
    }, [])

  return (
    <div className="w-full">
        <NavBar 
            navFixed={navFixed}
        />
        <div className="relative h-[900vh]">
        {/* {!absNav && <NavBar />} */}
        
            <div className="sticky top-0 min-h-screen w-full bg-sky-500">
                <Hero />
            </div>
            <div className="sticky top-0  min-h-screen w-full">
                <Caleta />
            </div>
            <div className="sticky top-0 min-h-screen w-full">
                <Faro />
            </div>
            <div className="sticky top-0  min-h-screen w-full">
                <Bosque />
            </div>

            <div className="sticky top-0 min-h-screen w-full">
                <Services />
            </div>
            <div className="sticky top-0 min-h-screen w-full">
                <Emergency />
            </div>
            {/* <div className="sticky top-0  min-h-screen w-full">
                <h2>gsdasd</h2>
            </div> */}
            {/* <div className="relative h-screen w-full">
                <Hospital />
            </div> */}
            {/* <div className="relative h-screen w-full">
                <Bosque />
            </div> */}
            {/* Contacto */}
            {/* ...Sections */}
            
        </div>
        <Footer />
    </div>
  )
}

export default MainPage