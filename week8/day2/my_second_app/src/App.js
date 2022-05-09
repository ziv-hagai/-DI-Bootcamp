// import Hello from './Hello';
import User from './components/User.js';
// import users from './users.json';
import './App.css';
import SearchBox from './components/Searchbox.js'
// import { getDefaultNormalizer } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      txt:'',
      search:''
    }
    console.log('constructor');
  }
  // componentDidMount(){
  //   console.log('componentDidMount');
  // }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => {
  this.setState({users:data})
    })
    .catch(err => {
      console.log(err);
    })
  }
  handleClick = (e) => {
    this.setState({search:this.state.txt})
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({txt:e.target.value})
  }
  render(){
  const {users,txt,search} = this.state; 

  const filterUser = users.filter(item=>{
    return item.name.toLowerCase().includes(search.toLowerCase());
  })
  return(
      <div>
      <h1>Users {this.state.txt}</h1>
      <SearchBox searchFunc={this.handleChange} clickFunc={this.handleClick}/>
      {
       filterUser.map((item, i)=>{
         return (
         <User key={i} id={item.id} name={item.name} username={item.username} email={item.email} address={item.address.city}/>
         )
       }) 
     }
     
   </div>     
    )
  }
}

// const App=()=> {
  
//   return (
//    <div>
//      <h1>Users</h1>
//      {
//        users.map(item=>{
//          return (
//          <User id={item.id} name={item.name} username={item.username} email={item.email} address={item.address.city}/>
//          )
//        }) 
//      }
//    </div>
//   );
// }

export default App;
