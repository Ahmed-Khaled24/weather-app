import { WeatherStatusData } from '../../../types/weather.types';
import WeatherSegment from '../weatherSegment/weatherSegment.component';
import locationIcon from '../../../assets/location-icon.svg';
import windIcon from '../../../assets/wind-icon.svg';
import pressureIcon from '../../../assets/pressure-icon.svg';
import './mainCard.style.css';

interface Props {
	weatherStatus: WeatherStatusData;
	background: string;
}

const MainCard = ({ weatherStatus, background }: Props) => {
	const { temperature, windSpeed, pressure, location, weatherDescription } =
		weatherStatus;
	return (
		<div className={`main-card ${background}`}>
			<section>
				<WeatherSegment
					alt='loc-icon'
					text={location}
					iconPath={locationIcon}
				/>
				<p className='weather-description'>{weatherDescription}</p>
			</section>
			<p className='temperature'> {`${temperature}°`} </p>
			<section>
				<WeatherSegment
					alt='wind-icon'
					text={`${windSpeed} Km/h`}
					iconPath={windIcon}
				/>
				<WeatherSegment
					alt='pressure-icon'
					text={`${pressure} hpa`}
					iconPath={pressureIcon}
				/>
			</section>
		</div>
	);
};

export default MainCard;
