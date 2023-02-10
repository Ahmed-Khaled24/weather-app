import './main.style.css';
import { WeatherStatusData } from '../../types/weather.types';
import MainCard from './mainCard/mainCard.component';
import SmallCard from './smallCard/smallCard.component';
import rainIcon from '../../assets/water-drop-icon.svg';
import humidityIcon from '../../assets/humidity-icon.svg';
import pressureIcon from '../../assets/pressure-icon.svg';
import windIcon from '../../assets/wind-icon.svg';
import SearchBar from './searchBar/searchBar.component';




interface Props {
	weatherStatus: WeatherStatusData;
	setLocation: React.Dispatch<React.SetStateAction<string>>
}

const Main = ({ weatherStatus, setLocation }: Props) => {
	const { windSpeed, pressure, rainChance, humidity } = weatherStatus;
	return (
		<div className='main'>
			<SearchBar setLocation={setLocation}/>
			<MainCard weatherStatus={weatherStatus} background='' />
			<div className='small-cards'>
				<SmallCard
					title={'Wind'}
					subtitle={'Today wind speed'}
					data={`${windSpeed}Km/h`}
					imagePath={windIcon}
				/>
				<SmallCard
					title={'Rain Chance'}
					subtitle={'Today rain chance'}
					data={`${rainChance}%`}
					imagePath={rainIcon}
				/>
				<SmallCard
					title={'Pressure'}
					subtitle={'Today pressure'}
					data={`${pressure}hpa`}
					imagePath={pressureIcon}
				/>
				<SmallCard
					title={'Humidity'}
					subtitle={'Today humidity index'}
					data={`${humidity}`}
					imagePath={humidityIcon}
				/>
			</div>
		</div>
	);
};

export default Main;
