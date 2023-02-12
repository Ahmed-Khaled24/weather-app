import './map.style.css';
import MapCard from './mapCard/mapCard.component';
import ActualMap from './actualMap/actualMap.component';
import MapSearch from './mapSearch/mapSearch.component';
import { useState } from 'react';

type Props = {
	currentTemp: number;
	currentLocation: string;
	setLocation: React.Dispatch<React.SetStateAction<string | [number, number]>>;
};

const Map = ({ currentTemp, setLocation, currentLocation }: Props) => {
	const [coordinates, setCoordinates]: [
		{lat: number, lng: number},
		React.Dispatch<React.SetStateAction<{lat: number, lng: number}>>
	] = useState({lat: 0, lng: 0});
	return (
		<div className='map'>
			<MapCard
				currentTemp={currentTemp}
				currentLocation={currentLocation}			
			/>
			<ActualMap setCoordinates={setCoordinates} />
			<MapSearch coordinates={coordinates} setLocation={setLocation} />
		</div>
	);
};

export default Map;
