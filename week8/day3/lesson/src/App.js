// import logo from './logo.svg';
// import DemoFunction from './components/DemoFunction';
// import DemoClass from './components/DemoClass';
import './App.css';
import User from './components/User';
import Counter from './components/Counter';
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // arr:[],
      number:0
    }
}

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=> {
//       this.setState({arr:data})
//     })
//     .catch(err=>console.log(err))
//     }
    
  // getUsers = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res=>res.json())
  //   .then(data=> {
  //     this.setState({arr:data})
  //   })
  //   .catch(err=>console.log(err))
  //   }

  plus=()=>{
    // this.state.number++;
    this.setState({number: this.state.number+1});
  }
  
  minus=()=>{
    this.setState({number: this.state.number-1});

  }

  // componentDidUpdate(){
  //   this.setState({number: this.state.number});
  //   console.log(this.state.number);

  // }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        {/* {
        this.state.arr.map(item=>{
          return(
            <User key={item.id} name={item.name} username={item.username} adress={item.address.city} id={item.id}/>
          )
        })
      } */}
        {/* <button onClick={this.getUsers}>get users</button> */}
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <p>{this.state.number}</p>
      </header>
    </div>
  )
}
}

export default App;
