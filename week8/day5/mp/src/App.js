import quotes from './Quotes.js';
import React from 'react'
import './App.css';
const quotesArr = [...quotes];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'black',
      current_quotes: quotesArr,
      position: 0
    }
  }
  componentDidMount() {
    this.setState({ position: Math.floor(Math.random() * quotesArr.length) });
  }

  componentDidUpdate() {
    quotesArr.pop(quotesArr[this.state.position]);
    if (!this.state.current_quotes.length) {
      quotesArr.push(...quotes);
    };
  }

  newQuote = () => {
    this.setState({ position: Math.floor(Math.random() * quotesArr.length) });
    console.log(quotesArr.length);
    console.log(this.state.position);

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({ color: randomColor });

    this.setState({ current_quotes: quotesArr });

  }

  render() {
    return (
      <div className="App" >
        <header className="App-header" style={{ backgroundColor: this.state.color }}>
          <div id='card'>
            <h3 style={{ color: this.state.color }}>"{this.state.current_quotes[this.state.position].quote}"</h3>
            <p style={{ color: this.state.color }}>-{this.state.current_quotes[this.state.position].author || 'Unknown'}-</p>
            <button onClick={this.newQuote} style={{ backgroundColor: this.state.color }}>New quote</button>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
