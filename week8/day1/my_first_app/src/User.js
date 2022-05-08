const User = (props) => {
    return (
        <div>
            <h2>User info:</h2>
            <h4>{props.name}</h4>
            <p>{props.username}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default User;