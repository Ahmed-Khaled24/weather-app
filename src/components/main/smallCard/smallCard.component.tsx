import './smallCard.style.css';

interface Props {
	title: string;
	subtitle: string;
	data: string;
	imagePath: string;
}

const SmallCard = ({ title, subtitle, data, imagePath }: Props) => {
	return (
    <div className='small-card'>
        <div className='text'>
            <p className='title'> {title} </p>
            <p className='subtitle'> {subtitle} </p>
            <p className='data'> {data} </p>   
        </div>
        <img src={imagePath} alt="figure"/>
    </div>
    )
};

export default SmallCard;