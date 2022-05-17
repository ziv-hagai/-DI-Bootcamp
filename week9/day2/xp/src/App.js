import React from 'react'
import TransactionList from './components/TransactionList';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TransactionList />
        </header>
      </div>
    );
  }
}

export default App;


// getResult = () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
//       'X-RapidAPI-Key': '9be9c4880fmshbd6010d4d3b88e8p1abf36jsnd3c4ce499b84'
//     }
//   };
//   fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.props.second}&fname=${this.props.first}`, options)
//     .then(response => response.json())
//     .then(response => {
//       let res = response;
//       this.props.resultDispatch(res);
//       // console.log(res);
//     })
//     .catch(err => console.error(err));
// }
