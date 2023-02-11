import './main.style.css';
import { WeatherStatusData } from '../../types/weather.types';
import MainCard from './mainCard/mainCard.component';
import SmallCard from './smallCard/smallCard.component';
import thermostatIcon from '../../assets/thermostat-icon.svg'
import humidityIcon from '../../assets/humidity-icon.svg';
import pressureIcon from '../../assets/pressure-icon.svg';
import cloudIcon from '../../assets/cloud-icon.svg'
import SearchBar from './searchBar/searchBar.component';


type Props = {
	weatherStatus: WeatherStatusData;
	setLocation: React.Dispatch<React.SetStateAction<string | [number, number]>>
}

const Main = ({ weatherStatus, setLocation }: Props) => {
	const {pressure, humidity, feelsLike, clouds } = weatherStatus;
	return (
		<div className='main'>
			<SearchBar setLocation={setLocation}/>
			<MainCard weatherStatus={weatherStatus} background='' />
			<div className='small-cards'>
				<SmallCard
					title={'Feels Like'}
					subtitle={'Today it feels like'}
					data={`${feelsLike}°`}
					imagePath={thermostatIcon}
				/>
				<SmallCard
					title={'Clouds'}
					subtitle={'Today clouds'}
					data={`${clouds}%`}
					imagePath={cloudIcon}
				/>
				<SmallCard
					title={'Pressure'}
					subtitle={'Today pressure'}
					data={`${pressure} hpa`}
					imagePath={pressureIcon}
				/>
				<SmallCard
					title={'Humidity'}
					subtitle={'Today humidity'}
					data={`${humidity}%`}
					imagePath={humidityIcon}
				/>
			</div>
		</div>
	);
};

export default Main;
