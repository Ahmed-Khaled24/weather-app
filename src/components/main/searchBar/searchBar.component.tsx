import './searchBar.style.css';
import searchIcon from '../../../assets/search-icon.svg';

type Props = {
	setLocation: React.Dispatch<React.SetStateAction<string | [number, number]>>;
};

const SearchBar = ({ setLocation }: Props) => {
	let searchInput = '';
	return (
		<div
			className='search-bar'
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					setLocation(searchInput);
				}
			}}
		>
			<img
				src={searchIcon}
				alt='search-icon'
				onClick={() => setLocation(searchInput)}
			/>
			<input
				type='text'
				placeholder='Type something...'
				onChange={(e) => {
					searchInput = e.target.value;
				}}
			/>
		</div>
	);
};

export default SearchBar;
