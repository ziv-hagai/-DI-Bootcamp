import React from 'react'
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import Button from './components/Button';
import Result from './components/Result';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      first: '',
      second: '',
      answer: {}
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

  }

  getResult = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '9be9c4880fmshbd6010d4d3b88e8p1abf36jsnd3c4ce499b84'
      }
    };
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.state.second}&fname=${this.state.first}`, options)
      .then(response => response.json())
      .then(response => {
        this.setState({ answer: response });
        console.log(response);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FirstName handleChange={this.handleChange} />
          <SecondName handleChange={this.handleChange} />
          <Button getResult={this.getResult} />
          <Result result={this.state.answer.result} perc={this.state.answer.percentage} />
        </header>
      </div>
    );
  }
}

export default App;

