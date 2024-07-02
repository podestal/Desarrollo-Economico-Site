import { Map as GoogleMap, AdvancedMarker } from "@vis.gl/react-google-maps"

const Map = () => {

    const position = { lat: -17.000, lng: -72.096 }

    
  return (
    <div className="h-screen w-full p-12">
        <GoogleMap 
            defaultZoom={18} 
            defaultCenter={position}
            mapId={'5b0544206c64700'}
            
        >
            <AdvancedMarker position={position}>

            </AdvancedMarker>
        </GoogleMap>
    </div>
  )
}

export default Map