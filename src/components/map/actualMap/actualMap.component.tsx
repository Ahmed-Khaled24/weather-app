import { MapContainer, useMapEvent } from 'react-leaflet';
import './actualMap.style.css'
import { TileLayer } from 'react-leaflet';

type Props = {
    setCoordinates: React.Dispatch<React.SetStateAction<{lat: number, lng: number}>>
}

const MapEventHandler = ({setCoordinates}: Props) => {
    useMapEvent('click', (e) => {
        const {lat, lng} = e.latlng;
        setCoordinates({
            lat, 
            lng
        });
    })
    return null;
}

const ActualMap = ({setCoordinates}: Props) => {
    return(  
        <MapContainer center={[30.0444, 31.2357]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            />
            <MapEventHandler setCoordinates={setCoordinates}/>
        </MapContainer>  
    );
}

export default ActualMap;