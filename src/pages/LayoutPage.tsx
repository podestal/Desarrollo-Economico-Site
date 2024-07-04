import { Outlet } from 'react-router-dom'
import NavBar from "../components/landing-page/NavBar"
import Footer from '../components/landing-page/Footer'

const LayoutPage = () => {

  return (
    <div className='w-[100%]'>
        <NavBar />
        <Outlet />
        <div className="relative">
            <Footer />
        </div>
    </div>
  )
}

export default LayoutPage