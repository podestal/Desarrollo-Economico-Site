import Lenis from "lenis"
import { useEffect } from "react"
import Hero from "../components/landing-page/Hero"
import Caleta from "../components/landing-page/Caleta"
import Bosque from "../components/landing-page/Bosque"
import Faro from "../components/landing-page/Faro"
import Services from "../components/landing-page/Services"
import Emergency from "../components/landing-page/Emergency"


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
        <div className="relative h-screen">
            <>
                <div id="home" />
                <div className="sticky top-0 bg-blue-500  max-h-screen">
                    <Hero />
                </div>
            </>
        </div>
        <div className="relative min-h-screen">
            <div id="turismo"/>
            <>
                <div id="caleta"/>
                <div className="sticky top-0 h-[100vh] w-full">
                    <Caleta />
                </div>
            </>
            <>
                <div id="bosque"/>
                <div className="h-[100vh] sticky top-0 w-full">
                    <Bosque />
                </div>
            </>
            <>
                <div id="islas"/>
                <div className="relative h-[100vh]">
                    <Faro />
                </div>
            </>
        </div>

        <div className="relative h-screen">
            <>  
                <div id="services" />
                <div className="sticky top-0 w-full h-[100vh] ">
                    <Services />
                </div>
                
            </>
        </div>
        <>
            
            <div className=" relative max-xl:min-h-[100vh] w-full bg-red-500 ">
            <div id="emergency" />
                <Emergency />
            </div>
            
        </>
    </>
  )
}

export default MainPage