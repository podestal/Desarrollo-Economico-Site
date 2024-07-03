import Map from "./components/map/Map"
import { APIProvider } from "@vis.gl/react-google-maps"

const Index = () => {
  return (
    <APIProvider apiKey='AIzaSyAk-bP1cgyzJrnfT8v3MDYMRJ_0X8bFjgM'>
        <Map />
    </APIProvider>
  )
}

export default Index