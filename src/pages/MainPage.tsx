import { useScroll } from "framer-motion"
import Lenis from "lenis"
import { useRef, useEffect } from "react"
import Hero from "../components/landing-page/Hero"
import Caleta from "../components/landing-page/Caleta"
import Bosque from "../components/landing-page/Bosque"
import Faro from "../components/landing-page/Faro"
import NavBar from "../components/landing-page/NavBar"

const MainPage = () => {

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
        {/* <header className="w-[100%] fixed bg-transparent top-0 left-0 z-10">
            <NavBar />
        </header> */}
        <div className="relative h-[400vh]">
            <div className="sticky top-0 max-h-screen w-full">
                <Hero />
            </div>
            <div className="relative min-h-screen w-full">
                <Caleta />
            </div>
            <div className="relative h-screen w-full">
                <Bosque />
            </div>
            <div className="sticky top-0 h-screen w-full">
                <Faro />
            </div>
            <div className="sticky top-0 h-screen w-full">
                <Caleta />
                {/* Servicios */}
            </div>
            <div className="relative h-screen w-full">
                <Bosque />
                {/* Contacto */}
            </div>
            {/* ...Sections */}
        </div>
    </>
  )
}

export default MainPage