import ThisWeekElement from './thisWeekElement/thisWeekElement.component';
import './thisWeek.style.css';
import { ThisWeekElementData } from '../../types/thisWeek.types';

interface Props {
	elementsData: ThisWeekElementData[];
}

const ThisWeek = ({ elementsData }: Props) => {
	return (
		<div className='this-week'>
			<p className='this-week-title'> This Week </p>
			<div className='elements-container'>
				{elementsData.map((elementData) => (
					<ThisWeekElement elementData={elementData} />
				))}
			</div>
		</div>
	);
};

export default ThisWeek;
