import './mapCard.style.css';
import locationIcon from '../../../assets/location-icon.svg';

type Props = {
	currentTemp: number;
	currentLocation: string;
	background: string;
};

const MapCard = ({ currentTemp, currentLocation, background }: Props) => {
	return (
		<div className={`map-card ${background}`}>
			<p>
				<img src={locationIcon} alt='location-icon' />
				{currentLocation}
			</p>
			<p className='map-card-temp'>{currentTemp}°</p>
		</div>
	);
};

export default MapCard;
