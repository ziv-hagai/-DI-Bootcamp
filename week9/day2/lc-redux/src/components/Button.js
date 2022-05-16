// import { connect } from 'react-redux';
function Button(props) {

    return (
        <>
            <button onClick={props.getResult}>Calculate</button>
        </>
    );
}

export default Button;
