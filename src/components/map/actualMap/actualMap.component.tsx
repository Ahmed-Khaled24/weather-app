import './actualMap.style.css'

type Props = {
    setCoordinates: React.Dispatch<React.SetStateAction<[number, number]>>,
}

const ActualMap = ({setCoordinates}: Props) => {
    return(
        <div className='actual-map'>
            
        </div>
    );
}

export default ActualMap;