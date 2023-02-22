import { MapContainer, useMapEvent } from 'react-leaflet';
import './actualMap.style.css'
import { TileLayer } from 'react-leaflet';

type Props = {
    setCoordinates: React.Dispatch<React.SetStateAction<{lat: number, lng: number}>>,
    getCurrentLocation: () => [number, number],
}

const MapEventHandler = ({setCoordinates}: {setCoordinates: React.Dispatch<React.SetStateAction<{lat: number, lng: number}>>}) => {
    useMapEvent('click', (e) => {
        const {lat, lng} = e.latlng;
        setCoordinates({
            lat: Number(lat.toPrecision(5)), 
            lng: Number(lng.toPrecision(5))
        });
    })
    return null;
}

const ActualMap = ({setCoordinates, getCurrentLocation}: Props) => {
    return(  
        <MapContainer center={getCurrentLocation()} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=a1b10435-899d-4f36-899a-5444aa3388bb"
            />
            <MapEventHandler setCoordinates={setCoordinates}/>
        </MapContainer>  
    );
}

export default ActualMap;