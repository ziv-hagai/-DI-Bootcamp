import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions/index';
// import {  } from './actions/index';

const Counter = (props) => {
    return (
        <>
            <button onClick={props.increase}>+</button>
            {props.count}
            <button onClick={props.decrease}>-</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increaseCount()),
        decrease: () => dispatch(decreaseCount()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
