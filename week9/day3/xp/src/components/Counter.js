import React, { Component } from "react";
import { onDecrement, onIncrement } from '../redux/actions';
import { connect } from 'react-redux';

class Counter extends Component {

    incrementIfOdd = () => {
        if (this.props.count % 2 !== 0) {
            this.props.onIncrement();
        }
    };

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000);
    };

    render() {

        return (
            <p>
                Clicked: {this.props.count} times
                {" "}
                <button onClick={this.props.onIncrement}>
                    +
                </button>
                {" "}
                <button onClick={this.props.onDecrement}>
                    -
                </button>
                {" "}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {" "}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(onIncrement()),
        onDecrement: () => dispatch(onDecrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);



