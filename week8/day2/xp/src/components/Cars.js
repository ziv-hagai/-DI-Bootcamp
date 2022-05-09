import React from 'react';
import Garage from './Garage';

const CarsA = (props) => {
    return (
         <p>This car is {props.model}</p>
    )
};

class CarsB extends React.Component {
    constructor(props){
        super();
        this.state = {
          color:'red',
          carinfo:props.model.model
        }
    } 
    render(){

        return (
         <p>This car is {this.state.color} {this.state.carinfo} </p>
    )
}
}

// const CarsC = (props) => {
//     return (
//          <p>This car is {props.model}</p>
//     )
// };

export {CarsA, CarsB};
