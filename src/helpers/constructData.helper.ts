import { DayForecastData } from "../types/opeWeatherResponse";
import { ThisWeekElementData } from "../types/thisWeek.types";
import { WeatherStatusData } from "../types/weather.types";

function getDayOfWeek(date: string, index: number): string{
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	if(index === 0){
		return 'Today'
	} else if (index === 1){
		return 'Tomorrow'
	} else {
		let _date = new Date(date);
		return days[_date.getDay()]
	}
}

function getDate(date: string){
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', "June", 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let _date = new Date(date);
	return `${_date.getDate()} ${months[_date.getMonth()]}`;
}

function constructWeatherStatusData(res: DayForecastData): WeatherStatusData {
	return {
		status: res?.weather[0]?.main,
		iconCode: res?.weather[0]?.icon,
		temperature: Math.trunc(res?.main?.temp),
		feelsLike: Math.trunc(res?.main?.feels_like),
		pressure: Math.trunc(res?.main?.pressure),
		humidity: Math.trunc(res?.main?.humidity),
		windSpeed: res?.wind?.speed,
		rainChance: 50,
		location: '',
		clouds: res?.clouds?.all,
		weatherDescription: res?.weather[0]?.description,
	};
}

function constructThisWeekElementsData(_5Days: DayForecastData[]): ThisWeekElementData[]{
	let elementsData: ThisWeekElementData[] = [];
	_5Days.forEach((day, index) => {
		console.log(day.weather);
		
		elementsData.push({
			day: getDayOfWeek(day.dt_txt, index),
			date: getDate(day.dt_txt),
			temperature: Math.trunc(day?.main?.temp),
			iconCode: day?.weather[0]?.icon,
		})
	});
	
	
	return elementsData;
}

export {
    constructThisWeekElementsData,
    constructWeatherStatusData
}