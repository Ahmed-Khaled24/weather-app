import './sidePanel.style.css';
import { Link, useLocation } from 'react-router-dom';

interface Props {
	elements: string[];
	state: string,
	closeMobileNav: () => void,
}

const SidePanel = ({ elements, state, closeMobileNav }: Props) => {
	const route = useLocation();
	const currentRoute = route.pathname.replace('/', '');
	
	return (
		<div className={`side-panel ${state}`}>
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
							onClick={closeMobileNav}
						>
							{el}
						</Link>
					);
				})}
			</div>
			<a href='https://www.linkedin.com/in/ahmedkhaled24/' className='copy-rights' target='_blank' rel='noreferrer'>&copy; Ahmed Khaled </a>
		</div>
	);
};

export default SidePanel;
