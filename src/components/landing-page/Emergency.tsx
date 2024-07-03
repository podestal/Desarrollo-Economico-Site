import { RiHome3Fill, RiPhoneFill } from "@remixicon/react"
import { Icon } from "@tremor/react"

const Emergency = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-start items-center gap-12 p-12">
        <h2 className="text-8xl font-montserrat">Servicios de Emergencia</h2>
        <div className="w-[85%] grid grid-cols-3 gap-20 text-slate-900">
            <div className="card-wrapper">
                <div className="card-content py-8 px-4 flex flex-col justify-center items-center gap-6 rounded-3xl  ">
                    <h3 className="text-6xl font-palanquin mb-6  font-bold">Policía</h3>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiHome3Fill} size="xl"/>
                        <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                        <p>532558</p>
                    </div>
                </div>  
            </div>
            <div className=" py-8 px-4 flex flex-col justify-center items-center gap-6 rounded-3xl  shadow-slate-950 shadow-2xl">
                <h3 className="text-6xl font-palanquin mb-6  font-bold">Hospital</h3>
                <div className="w-full flex justify-start items-center gap-6">
                    <Icon icon={RiHome3Fill} size="xl"/>
                    <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                </div>
                <div className="w-full flex justify-start items-center gap-6">
                    <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                    <p>532558</p>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card-content py-8 px-4 flex flex-col justify-center items-center gap-6 rounded-3xl  ">
                    <h3 className="text-6xl font-palanquin mb-6  font-bold">Serenazgo</h3>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiHome3Fill} size="xl"/>
                        <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                        <p>532558</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Emergency