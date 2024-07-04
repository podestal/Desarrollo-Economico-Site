import { RiHome2Fill, RiPhoneFill, RiFacebookBoxFill, RiInstagramFill, RiTiktokFill, RiWhatsappFill } from "@remixicon/react"
import { Icon } from "@tremor/react"

const Footer = () => {
  return (
    <div className=" w-full realtive z-100 min-h-[150px] bg-slate-950 mt-10 text-slate-200 text-md grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 py-6 px-4">
        <div className="flex justify-center">
            <div className="flex flex-col gap-4 lg:items-start items-center justify-start">
                <h2 className="text-4xl">LOGO</h2>
                <p>Lorem ipsum dolor sit, amet</p>
                <div>
                    <Icon className="cursor-pointer" icon={RiFacebookBoxFill}/>
                    <Icon className="cursor-pointer" icon={RiInstagramFill}/>
                    <Icon className="cursor-pointer" icon={RiTiktokFill}/>
                    <Icon className="cursor-pointer" icon={RiWhatsappFill}/>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col justify-start items-center text-slate-400 gap-2">
                <h3 className="text-xl text-slate-50 font-poppins font-bold ">Turísmo</h3>
                <ul className="flex lg:flex-col lg:gap-2 gap-6">
                    <li className="hover:text-slate-100 cursor-pointer">Caleta de Centeno</li>
                    <li className="hover:text-slate-100 cursor-pointer">Islas Alvisuri</li>
                    <li className="hover:text-slate-100 cursor-pointer">Bosque de Piedras</li>
                </ul>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col justify-start items-center text-slate-400 gap-2">
                <h3 className="text-xl text-slate-50 font-poppins font-bold  ">Contáctanos</h3>
                <h4 className="text-xl text-slate-100 font-montserrat">Gerencia de Desarrollo Económico</h4>
                <div className=" w-full flex max-lg:flex-col items-center justify-start lg:gap-4">
                    <Icon icon={RiHome2Fill}/>
                    <p>Calle Arequipa </p>
                </div>
                <div className=" w-full flex max-lg:flex-col items-center justify-start lg:gap-4">
                    <Icon icon={RiPhoneFill}/>
                    <p>(+51) 993558188</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer