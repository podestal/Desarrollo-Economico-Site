import { Outlet } from 'react-router-dom'
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from 'react'
import NavBar from "../components/landing-page/NavBar"

const LayoutPage = () => {
    
    const {scrollY} = useScroll()
    const [navFixed, setNavFixed] = useState(true)

    useMotionValueEvent(scrollY, 'change', latest => {
        if (latest >= 15) {
            setNavFixed(false)
        }
        if (latest < 15) {
            setNavFixed(false)
        }         
    })

  return (
    <div className='w-[100%]'>
        <NavBar 
            navFixed={navFixed}
        />
        <Outlet />
    </div>
  )
}

export default LayoutPage