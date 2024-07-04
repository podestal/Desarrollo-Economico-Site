import { RiHome3Fill, RiPhoneFill } from "@remixicon/react"
import { Icon } from "@tremor/react"

const Emergency = () => {
  return (
    <section id="emergency" className="w-[100%] bg-white min-h-screen flex flex-col justify-start items-center gap-12 p-12 overflow-hidden">
        <h2 className="max-lg:text-center text-7xl lg:text-8xl font-montserrat text-sate-900 w-full">Servicios de Emergencia</h2>
        <div className={`w-[85%] grid grid-cols-1 xl:grid-cols-3 gap-20 text-slate-900`}>
            <div className="card-wrapper">
                <div className="card-content py-8 px-4 flex flex-col justify-center items-center gap-6 rounded-3xl">
                    <h3 className="text-6xl font-palanquin mb-6  font-bold">Policía</h3>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiHome3Fill} size="xl"/>
                        <p className="font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-6">
                        <Icon icon={RiPhoneFill} size="xl" color="blue"/>
                        <p>054-532558</p>
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
                    <p>054-532558</p>
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
                        <p>054-532558</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Emergency