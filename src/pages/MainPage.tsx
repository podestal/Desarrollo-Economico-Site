import Lenis from "lenis"
import { useEffect } from "react"
import Hero from "../components/landing-page/Hero"
import Caleta from "../components/landing-page/Caleta"
import Bosque from "../components/landing-page/Bosque"
import Faro from "../components/landing-page/Faro"
import Services from "../components/landing-page/Services"
import Emergency from "../components/landing-page/Emergency"
import Footer from "../components/landing-page/Footer"


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
        <>
            <div id="home" />
            <div className="sticky top-0 bg-blue-500 h-[150vh] ">
                <Hero />
            </div>
        </>
        <>
            <div id="turismo"/>
            <div className="relative min-h-screen w-full">
                <Faro />
            </div>
        </>
        <div className="sticky top-0  min-h-screen w-full">
            <Caleta />
        </div>
        <div className="sticky top-0 h-[200vh] w-full">
            <Bosque />
        </div>
        <>  
            <div id="services" />
            <div className="sticky top-0 h-[200vh] w-full">
                <Services />
            </div>
        </>
        <>
            <div id="emergency" />
            <div className="relative min-h-screen w-full">
                <Emergency />
            </div>
        </>
        <div className="relative">
            <Footer />
        </div>
    </>
  )
}

export default MainPage