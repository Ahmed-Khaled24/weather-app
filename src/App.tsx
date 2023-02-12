import './App.css';
import { Fragment, useEffect, useState } from 'react';
import React from 'react';
import SidePanel from './components/sidePanel/sidePanel.component';
import Main from './components/main/main.component';
import ThisWeek from './components/thisWeek/thisWeek.component';
import Map from './components/map/map.component';
import { WeatherStatusData } from './types/weather.types';
import { ThisWeekElementData } from './types/thisWeek.types';
import { OpenWeatherResponse_5daysAPI } from './types/opeWeatherResponse';
import {
	constructThisWeekElementsData,
	constructWeatherStatusData,
} from './helpers/constructData.helper';
import { Routes, Route } from 'react-router-dom';

const initialWeather: WeatherStatusData = {
	status: '',
	temperature: 0,
	feelsLike: 0,
	humidity: 0,
	windSpeed: 0,
	rainChance: 0,
	pressure: 0,
	clouds: 0,
	location: '',
	iconCode: '',
	weatherDescription: '',
};

function App() {
	const [location, setLocation]: [
		string | [number, number],
		React.Dispatch<React.SetStateAction<string | [number, number]>>
	] = useState<string | [number, number]>('Cairo');

	const [currentWeatherStatus, setCurrentWeatherStatus]: [
		WeatherStatusData,
		React.Dispatch<React.SetStateAction<WeatherStatusData>>
	] = useState(initialWeather);

	const [thisWeekElements, setThisWeekElements]: [
		ThisWeekElementData[],
		React.Dispatch<React.SetStateAction<ThisWeekElementData[]>>
	] = useState([{ day: '', date: '', temperature: 0, iconCode: '' }]);

	useEffect(() => {
		let URL: string;
		if(typeof location === 'string'){
			URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=6ff61611d6920623bd29ebca2408b108&units=metric`
		}else {
			URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&appid=6ff61611d6920623bd29ebca2408b108&units=metric`
		}
		fetch(URL)
			.then((res) => res.json())
			.then((res: OpenWeatherResponse_5daysAPI) => {
				const _5Days = [
					res.list[0],
					res.list[8],
					res.list[16],
					res.list[24],
					res.list[32],
				];
				setCurrentWeatherStatus({
					...constructWeatherStatusData(_5Days[0]),
					location: `${res?.city?.name}, ${res?.city?.country}`,
				});
				setThisWeekElements(constructThisWeekElementsData(_5Days));
			}).catch((err) => console.log);
	}, [location]);

	return (
		<Fragment>
			<SidePanel
				elements={['Main', 'Map']}
			/>
			<Routes>
				{['/weather-app', '/weather-app/main'].map((path) => (
					<Route
						path={path}
						element={
							<Main
								weatherStatus={currentWeatherStatus}
								setLocation={setLocation}
							/>
						}
					/>
				))}
				<Route
					path='/weather-app/map'
					element={
						<Map
							currentLocation={currentWeatherStatus.location}
							currentTemp={currentWeatherStatus.temperature}
							setLocation={setLocation}
							weatherStatus={currentWeatherStatus.status.toLowerCase()}
						/>
					}
				/>
			</Routes>
			<ThisWeek elementsData={thisWeekElements} />
		</Fragment>
	);
}

export default App;
