import { useMotionValueEvent, useScroll } from "framer-motion"
import Lenis from "lenis"
import { useEffect, useState } from "react"
import Hero from "../components/landing-page/Hero"
import Caleta from "../components/landing-page/Caleta"
import Bosque from "../components/landing-page/Bosque"
import Faro from "../components/landing-page/Faro"
import NavBar from "../components/landing-page/NavBar"
// import Hospital from "../components/landing-page/Hospital"
import Services from "../components/landing-page/Services"

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
        <NavBar 
            navFixed={navFixed}
        />
        <div className="relative h-[800vh]">
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
            {/* <div className="sticky top-0 h-screen w-full">
                <Hospital />
            </div>
            <div className="sticky top-0 h-screen w-full">
                <Hospital />
            </div> */}
            <div className="sticky top-0 h-screen w-full">
                <Services />
            </div>
            {/* <div className="relative h-screen w-full">
                <Hospital />
            </div> */}
            {/* <div className="relative h-screen w-full">
                <Bosque />
            </div> */}
            {/* Contacto */}
            {/* ...Sections */}
        </div>
    </>
  )
}

export default MainPage