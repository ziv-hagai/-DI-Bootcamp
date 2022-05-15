import { connect } from 'react-redux';
import { handleChangeFromReduxThree } from '../redux/actions';

const Hello = (props) => {
    return (
        <>
            <p>from app: {props.from_app}</p>
            <p>from store: {props.from_store}</p>
            <h2>{props.my_text}</h2>
            <button onClick={props.handleButton}>Change</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        from_store: state.property_one,
        from_store_two: state.property_two,
        my_text: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleButton: () => dispatch(handleChangeFromReduxThree()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
