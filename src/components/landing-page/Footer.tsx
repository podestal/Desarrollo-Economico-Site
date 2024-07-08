import { RiHome2Fill, RiPhoneFill, RiFacebookBoxFill, RiInstagramFill, RiTiktokFill, RiWhatsappFill } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { HashLink as Link } from "react-router-hash-link"
import logo from '../../assets/imgs/logo-islay-blanco.png'

const Footer = () => {
  return (
    <div className="xl:h-[100%] xl:max-w-[1920px] w-full h-[100%] lg:h-[300px] md:h-[800px] text-slate-200 text-md grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 py-6 px-4 mx-auto z-100">
        <div className="flex justify-center">
            <div className="flex flex-col gap-4 lg:items-center items-center justify-start">
                <Link to='/#home'><div style={{backgroundImage: `url(${logo})`}} className="w-[320px] h-[80px] bg-center bg-cover" /></Link>
                <p className="font-montserrat">Islay, por un mejor distrito</p>
                <div className="flex justify-center gap-6 ">
                    <a href="https://www.facebook.com/municipalidaddistritaldeislay.matarani" target='_blank'><Icon size="lg" className="cursor-pointer" icon={RiFacebookBoxFill}/></a>
                    <a href="https://www.instagram.com/muni_islay?igsh=MzNlNGNkZWQ4Mg==" target='_blank'><Icon size="lg" className="cursor-pointer" icon={RiInstagramFill}/></a>
                    <a href="https://www.tiktok.com/@muni_islay" target='_blank'><Icon size="lg" className="cursor-pointer" icon={RiTiktokFill}/></a>
                    <a href="https://whatsapp.com/channel/0029VabTZbAL2ATsNapyLI0j" target='_blank'><Icon size="lg" className="cursor-pointer" icon={RiWhatsappFill}/></a>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col justify-start items-center text-slate-400 gap-2">
                <h3 className="text-xl text-slate-50 font-poppins font-bold ">Turísmo</h3>
                <ul className="lg:h-full flex flex-col justify-evenly items-center lg:gap-2 gap-6 max-lg:mt-6">
                    <Link to='/#caleta'><li className="hover:text-slate-100 cursor-pointer">Caleta de Centeno</li></Link>
                    <Link to='/#islas'><li className="hover:text-slate-100 cursor-pointer">Islas Alvisuri</li></Link>
                    <Link to='/#bosque'><li className="hover:text-slate-100 cursor-pointer">Bosque de Piedras</li></Link>
                </ul>
            </div>
        </div>
        <div className="flex justify-center max-lg:mb-12">
            <div className="flex flex-col justify-start items-center text-slate-400 gap-2">
                <h3 className="text-xl text-slate-50 font-poppins font-bold  ">Contáctanos</h3>
                <h4 className="text-xl text-slate-100 font-montserrat max-lg:text-center">Gerencia de Desarrollo Económico</h4>
                <div className=" w-full flex max-lg:flex-col items-center justify-start lg:gap-4">
                    <Icon size="lg" icon={RiHome2Fill}/>
                    <p>Palacio Municipal  AV. Arequipa N°225</p>
                </div>
                <div className=" w-full flex max-lg:flex-col items-center justify-start lg:gap-4">
                    <Icon size='lg' icon={RiPhoneFill}></Icon>
                    <p>(+51) 993558188</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer