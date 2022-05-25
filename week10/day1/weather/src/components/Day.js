const Day = (props) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <div className='day'>
            <h1>{days[new Date(props.name).getDay()]}</h1>
            <img src={`https://www.accuweather.com/images/weathericons/${props.icon}.svg`} />
            <p>{props.min}&#176; - {props.max}&#176;</p>
        </div>
    )
};

export default Day;