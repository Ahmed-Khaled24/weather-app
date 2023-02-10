import './weatherSegment.style.css'

type Props = {
    iconPath: string,
    text: string,
    alt: string,
}


const WeatherSegment = ({iconPath, text, alt} : Props) => {
    return(
        <div className='segment'>
            <img src={iconPath} alt={alt} />
            <p> {text} </p>
        </div>
    )
}

export default WeatherSegment;