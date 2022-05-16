function SecondName(props) {
    return (
        <>
            Second Name: <input name='second' onChange={props.handleChange}></input>
        </>
    );
}

export default SecondName;
