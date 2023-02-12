import './mapSearch.style.css';

type Props = {
	coordinates: { lat: number; lng: number };
	setLocation: React.Dispatch<
		React.SetStateAction<string | [number, number]>
	>;
};

const MapSearch = ({ coordinates, setLocation }: Props) => {
	return (
		<div className='map-search'>
			<label> Selected Coordinates: </label>
			<input
				type='text'
				readOnly
				placeholder='Coordinates...'
				value={`${coordinates.lat}, ${coordinates.lng}`}
			/>
			<button
				onClick={() => {
					setLocation(
						[coordinates.lat, coordinates.lng]
					);
				}}
			>
				Go
			</button>
		</div>
	);
};

export default MapSearch;
