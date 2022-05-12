
import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      txt: '',
      message2: ''
    }
  }
  async componentDidMount() {
    try {
      const response = await fetch('/api/hello');
      const data = await response.text();
      this.setState({ message: data })
    }
    catch (err) {
      console.log(err);
    }
  }

  handleChange = (e) => {
    this.setState({ txt: e.target.value })
  }

  handleSubmit = (e) => {
    const { txt } = this.state;
    e.preventDefault();
    fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: txt })
    })
      .then(res => res.text())
      .then(data => {
        console.log(data);
        this.setState({ message2: data })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.message}
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.txt} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
          {this.state.message2}
        </header>
      </div>
    );
  }
}

export default App;