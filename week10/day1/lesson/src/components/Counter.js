import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    add = (e) => {
        this.setState({ count: this.state.count + e })
    }
    render() {

        return (
            <>
                count: {this.state.count}
                <button onClick={() => this.add(1)} >+</button>
                <button onClick={() => this.add(-1)} >-</button>
            </>
        )
    }
}

export default Counter