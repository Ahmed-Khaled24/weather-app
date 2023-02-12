import './sidePanel.style.css';
import { Link, useLocation } from 'react-router-dom';

interface Props {
	elements: string[];
}

const SidePanel = ({ elements }: Props) => {
	const route = useLocation();
	const currentRoute = route.pathname.replace('/', '');
	return (
		<div className='side-panel'>
			<p className='logo'> Weather </p>
			<div className='side-panel-elements'>
				{elements.map((el) => {
					let selected =
						currentRoute === el.toLowerCase() ? 'selected' : '';
					selected =
						currentRoute === '' && el === 'Main'
							? 'selected'
							: selected;
					return (
						<Link
							className={`side-panel-element ${selected}`}
							to={el.toLowerCase()}
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
