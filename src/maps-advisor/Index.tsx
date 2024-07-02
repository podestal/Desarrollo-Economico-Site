import List from "./components/list/List"
import Map from "./components/map/Map"
import PlaceDetails from "./components/place-details/PlaceDetails"
import { APIProvider } from "@vis.gl/react-google-maps"

const Index = () => {
  return (
    <APIProvider apiKey='AIzaSyAk-bP1cgyzJrnfT8v3MDYMRJ_0X8bFjgM'>
        <Map />
    </APIProvider>
  )
}

export default Index