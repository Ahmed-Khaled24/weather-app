import { WeatherStatusData } from '../../../types/weather.types';
import WeatherSegment from '../weatherSegment/weatherSegment.component';
import locationIcon from '../../../assets/location-icon.svg';
import windIcon from '../../../assets/wind-icon.svg';
import rainIcon from '../../../assets/water-drop-icon.svg';
import pressureIcon from '../../../assets/pressure-icon.svg'
import './mainCard.style.css';

interface Props {
	weatherStatus: WeatherStatusData;
	background: string;
}

const MainCard = ({ weatherStatus, background }: Props) => {
	const { temperature, windSpeed, pressure, location, rainChance } =
		weatherStatus;
	return (
		<div className={`main-card ${background}`}>
			<WeatherSegment alt='loc-icon' text={location} iconPath={locationIcon}/>
			<p className='temperature'> {`${temperature}°`} </p>
			<div className='bottom-section'>
				<WeatherSegment alt='wind-icon' text={`${windSpeed} Km/h`} iconPath={windIcon}/>
				<WeatherSegment alt='rain-icon' text={`${rainChance}%`} iconPath={rainIcon}/>
				<WeatherSegment alt='pressure-icon' text={`${pressure} hpa`} iconPath={pressureIcon}/>
			</div>
		</div>
	);
};

export default MainCard;
