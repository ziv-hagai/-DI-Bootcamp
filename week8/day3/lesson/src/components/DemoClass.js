import React, {Component} from 'react';

class DemoClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            txt: this.props.text,
            name: 'ziv'
        }
    }
    componentDidUpdate(){
        console.log(this.state.name);
    }
    HandleClick = (value) =>{
        this.setState({name:'lucas'})
    }
    
    render(){
        return(
            <>
                <h1>{this.state.name} is the name</h1>
                <h2>{this.state.txt} from class</h2>
                <button onClick={this.HandleClick}>click</button>
            </>
        )
    }
}

export default DemoClass;