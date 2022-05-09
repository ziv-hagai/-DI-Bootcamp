import React from 'react';

class Phone extends React.Component {
    constructor(){
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }
    changeColor=(e)=>{
        this.setState({color:'blue'});

    }

    render(){
        return (
        <>
        <p>my phone is a {this.state.color} {this.state.brand} {this.state.model} from {this.state.year}</p>
        <button onClick={this.changeColor }>change color </button> 

</>
)
}
}

export default Phone;

