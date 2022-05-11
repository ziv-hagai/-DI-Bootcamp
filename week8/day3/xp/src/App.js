import BuggyCounter from './components/BuggyCounter';
import Color from './components/Color';
import ErrorBoundary from './/ErrorBoundary';
import './App.css';
import React from 'react';
import Child from './components/Child';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            show:true
        };
    }
 
    delete=()=> {
      this.setState({show:false})
    }
    render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>XP1</h1>
      Simulation 1
        <ErrorBoundary>
          <BuggyCounter/>
          <BuggyCounter/>
        </ErrorBoundary>
        Simulation 2
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        Simulation 3
          <BuggyCounter/>
          <h1>XP2</h1>
        <Color/>
        <h1>XP3</h1>
        <div>{this.state.show ? <Child/> : ''}</div>
        <button onClick={this.delete}>delete</button>
           </header>
    </div>
  );
}
}

export default App;
