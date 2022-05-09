const User = (props) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib shadow-5'>
            <img src={`https://robohash.org/${props.id}`}/>
            <h4>{props.name}</h4>
            <p>{props.username}</p>
            <p>{props.email}</p>
            <p>{props.address}</p>
        </div>
    )
}

export default User;