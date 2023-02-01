import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
const key = process.env.REACT_APP_GOOGLEAPI;
const center = {lat: 38.042186555277084, lng: -84.4925297515587};
export default function Location () {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: key
    })
if (!isLoaded) return <div>Loading...</div>
return <div> <Map /> </div>
}


function Map () {

    return (
    <GoogleMap zoom = {18} center = {center} mapContainerClassName = 'map-container'>
    <MarkerF position={center} />
    </GoogleMap>
    )
}