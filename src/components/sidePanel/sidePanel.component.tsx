import './sidePanel.style.css';

interface Props {
	elements: string[];
	currentRoute: string
}

const SidePanel = ({elements, currentRoute} : Props) => {
	return (
		<div className='side-panel'>
			<p className='logo'> Weather </p>
			<div className='side-panel-elements'>
				{elements.map((el) => { 
					let selected = currentRoute === el ? 'selected': '';
					return <p className={`side-panel-element ${el} ${selected}`}> {el} </p>
				})}
			</div>
		</div>
	);
};

export default SidePanel;
