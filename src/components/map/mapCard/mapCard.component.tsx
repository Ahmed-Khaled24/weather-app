import './mapCard.style.css';
import locationIcon from '../../../assets/location-icon.svg';

type Props = {
	currentTemp: number;
	currentLocation: string;
};

const MapCard = ({ currentTemp, currentLocation }: Props) => {
	return (
		<div className='map-card'>
			<p>
				<img src={locationIcon} alt='location-icon' />
				{currentLocation}
			</p>
			<p className='map-card-temp'>{currentTemp}°</p>
		</div>
	);
};

export default MapCard;
