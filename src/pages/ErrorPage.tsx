import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const errorResponse = useRouteError()
    const routeError = isRouteErrorResponse(errorResponse)

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-blue-900 to-blue-500 text-slate-50 flex items-center justify-center px-8">
        <div className="flex flex-col gap-12">
            <h2 className="text-9xl font-poppins font-semibold">{routeError && errorResponse.status} Error</h2>
            <p className="text-5xl font-palanquin">{routeError ? 'Esta página no existe' : 'Un error ocurrió'}</p>
            <div className="w-[200px] text-center   ">
                <Link to={'/'}><p className="text-xl font-bold bg-slate-50 text-blue-500 py-2 px-6 rounded-3xl ">Regresar</p></Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage