import './sidePanel.style.css';

interface Props {
	elements: string[];
}

const SidePanel = ({elements} : Props) => {
	return (
		<div className='side-panel'>
			<p className='logo'> Weather </p>
			<div className='side-panel-elements'>
				{elements.map((el) => (
					<p className={`side-panel-element ${el} selected`}> {el} </p>
				))}
			</div>
		</div>
	);
};

export default SidePanel;
