import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Counter />
          <CounterHooks />
          {/* <Comp /> */}

        </header>
      </div>
    );
  }
}
export default App;
