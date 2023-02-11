import './sidePanel.style.css';
import { Link } from 'react-router-dom';

interface Props {
	elements: string[];
	currentRoute: string;
	setCurrentRoute: React.Dispatch<React.SetStateAction<string>>,
}

const SidePanel = ({ elements, currentRoute, setCurrentRoute }: Props) => {
	return (
		<div className='side-panel'>
			<p className='logo'> Weather </p>
			<div className='side-panel-elements'>
				{elements.map((el) => {
					let selected = currentRoute.toLowerCase() === el.toLowerCase() ? 'selected' : '';
					return (
						<Link
							className={`side-panel-element ${selected}`}
							to={el.toLowerCase()}
							onClick={() => setCurrentRoute(el.toLowerCase())}
						>	
							{el}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default SidePanel;
