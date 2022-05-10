import React from "react";

class Counter extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {name,username,adress,id} = this.props

    return(
        <div>
            <img src={`https://robohash.org/${id}`}></img>
            <p>{name}</p>
            <p>{username}</p>
            <p>{adress}</p>
        </div>
    )
 }
}

export default Counter;

