import React from 'react';
// setTimeout(changeColorLate, 5000);

class Color extends React.Component {
    constructor(){
        super();
        this.state = {
            favoriteColor:'red'
        };
    }
    

    changeColor=(e)=>{
        this.setState({favoriteColor:'blue'});

    }
    componentDidMount(){ 
     setTimeout(() => this.setState({favoriteColor:'yellow'}), 3000);
        }
    
    render() {
        return (
        <>
        <h1>my favorite color is {this.state.favoriteColor} </h1>
        <button onClick={this.changeColor }>change color </button> 
</>
)
}
}

export default Color;

