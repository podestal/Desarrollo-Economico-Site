import { Outlet } from 'react-router-dom'
import NavBar from "../components/landing-page/NavBar"
import Footer from '../components/landing-page/Footer'
// md:h-[775vh]
const LayoutPage = () => {

  return (
    <div className='w-[100%]'>
        {/* <NavBar /> */}
        <div className='min-h-[100vh] md:h-[700vh]'>
            <Outlet />
            <Footer />
        </div>
        {/* <div className="relative">
            <Footer />
        </div> */}
    </div>
  )
}

export default LayoutPage