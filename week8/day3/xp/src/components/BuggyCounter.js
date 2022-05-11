import React from 'react';

class BuggyCounter extends React.Component {
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
    handleClick = () => {
        this.setState({counter:this.state.counter+1})
    }
    render(){
        if(this.state.counter >= 5){
            throw Error('Crashed... :( ')
        }
        return (
        <>
        <span>{this.state.counter}</span>
        <button onClick={this.handleClick}>+</button>
        </>
        )
    }
}

export default BuggyCounter