import './mapSearch.style.css';

type Props = {
	coordinates: [number, number];
    setLocation: React.Dispatch<React.SetStateAction<string | [number, number]>>
};
const MapSearch = ({ coordinates }: Props) => {
	return (
		<div className='map-search'>
			<label> Selected Coordinates: </label>
			<input
				type='text'
				readOnly
				placeholder='Coordinates...'
				value={`${coordinates[0]} ${coordinates[1]}`}
			/>
			<button> Get </button>
		</div>
	);
};

export default MapSearch;
