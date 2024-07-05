import { Outlet } from 'react-router-dom'
import NavBar from "../components/landing-page/NavBar"
import Footer from '../components/landing-page/Footer'

const LayoutPage = () => {

  return (
    <div className='w-[100%]'>
        <NavBar />
        <div className='min-h-[100vh] md:min-h-[100vh]'>
            <Outlet />
            <div className='w-full bg-slate-950'>
                <Footer />
            </div>
        </div>
        {/* <div className="relative">
            <Footer />
        </div> */}
    </div>
  )
}

export default LayoutPage