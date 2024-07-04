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
    <>
        <div className="sticky top-0 bg-blue-500 min-h-screen ">
            <Hero />
        </div>
        <div className="relative min-h-screen w-full">
            <Faro />
        </div>
        <div className="sticky top-0  min-h-screen w-full">
            <Caleta />
        </div>
        <div className="sticky top-0 h-[200vh] w-full">
            <Bosque />
        </div>
        <div className="sticky top-0 h-[200vh] w-full">
            <Services />
        </div>
        <div className="relative min-h-screen w-full">
            <Emergency />
        </div>
        <div className="relative">
            <Footer />
        </div>
    </>
  )
}

export default MainPage