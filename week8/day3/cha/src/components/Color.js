import React from 'react';

class Color extends React.Component {
    constructor(){
        super();
        this.state = {
            favoriteColor:'red',
            previous:'',
        };
    }
    
    changeColor=(e)=>{
        this.setState({favoriteColor:'pink'});
    }
    // 1
    shouldComponentUpdate(){
        return true
    }
    // 2
    componentDidUpdate(prevProps, prevState, snapshot){ 
     setTimeout(() => {
        this.setState({favoriteColor:'yellow'});
        this.setState({previous:snapshot});
     
    }, 3000);
        }
    // 3
    getSnapshotBeforeUpdate(prevProps, prevState){
        return this.state.favoriteColor    
     
}

    render() {
        return (
        <div>
            <p>my favorite color is {this.state.favoriteColor} </p>
            <p>Previous color was {this.state.previous}</p>
            <button onClick={this.changeColor}>change color </button> 
        </div>
)
}
}

export default Color;

