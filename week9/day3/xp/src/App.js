import React from 'react'
import Counter from './components/Counter';
import { createStore } from 'redux';
import { reducer } from './redux/reducers';

import './App.css';
const store = createStore(reducer);

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
        </header>
      </div>
    );
  }
}

export default App;

