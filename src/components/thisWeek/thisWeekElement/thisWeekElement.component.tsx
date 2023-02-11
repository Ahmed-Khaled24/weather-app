import './thisWeekElement.style.css';
import { ThisWeekElementData } from '../../../types/thisWeek.types';

interface Props {
	elementData: ThisWeekElementData;
}

const ThisWeekElement = ({ elementData }: Props) => {
	const { day, date, temperature, iconCode } = elementData;
	return (
		<div className='this-week-element'>
			<div className='day-and-date'>
				<span className='day'> {day} </span>
				<span className='date'> {date} </span>
			</div>
			<div className='temp'>{`${temperature}°`}</div>
			<div className='icon-container'>
				<img src={`https://openweathermap.org/img/wn/${iconCode}.png`} alt='weather-icon' />
			</div>
		</div>
	);
};

export default ThisWeekElement;
