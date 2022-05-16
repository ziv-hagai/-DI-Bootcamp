function FirstName(props) {
    return (
        <>
            First Name: <input name='first' onChange={props.handleChange}></input>
        </>
    );
}

export default FirstName;
