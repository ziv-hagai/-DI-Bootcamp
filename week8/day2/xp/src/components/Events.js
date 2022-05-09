import React from 'react';

class Events extends React.Component {
    constructor(){
        super();
        this.state = {
            isToggleOn:'true',
            txt:'off'
                 }
    }
        clickMe=()=>{
       alert('i was clicked') 
    }

    handleKeyPress=(e)=>{
        if (e.which === 13) { 
            alert(`the enter key was pressed, your input is: ${e.target.value}`) 
        }
    }

    onOff=(e)=>{
        this.setState({isToggleOn:!this.state.isToggleOn})
        if (this.state.isToggleOn) { 
            this.setState({txt:'on'});
        } else {
            this.setState({txt:'off'});
        }
    }
    render(){
        return (
        <>
        <button onClick={this.clickMe}>click me</button> 
        <input type='text' onKeyPress={this.handleKeyPress} placeholder='press the enter key!'/>   
        <button onClick={this.onOff}>{this.state.txt}</button> 
</>
)
}
}

export default Events;

