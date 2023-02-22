import './map.style.css';
import MapCard from './mapCard/mapCard.component';
import ActualMap from './actualMap/actualMap.component';
import MapSearch from './mapSearch/mapSearch.component';
import { useState } from 'react';

type Props = {
	currentTemp: number;
	currentLocation: string;
	weatherStatus: string;
	setLocation: React.Dispatch<React.SetStateAction<string | [number, number]>>;
	getCurrentLocation: () => [number, number];
};

const Map = ({ currentTemp, setLocation, currentLocation, weatherStatus, getCurrentLocation }: Props) => {
	const [coordinates, setCoordinates]: [
		{lat: number, lng: number},
		React.Dispatch<React.SetStateAction<{lat: number, lng: number}>>
	] = useState({lat: 0, lng: 0});
	return (
		<div className='map'>
			<MapCard
				currentTemp={currentTemp}
				currentLocation={currentLocation}	
				background={weatherStatus}		
			/>
			<ActualMap setCoordinates={setCoordinates} getCurrentLocation={getCurrentLocation}/>
			<MapSearch coordinates={coordinates} setLocation={setLocation} />
		</div>
	);
};

export default Map;
