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
		[number, number],
		React.Dispatch<React.SetStateAction<[number, number]>>
	] = useState([0, 0]);
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
