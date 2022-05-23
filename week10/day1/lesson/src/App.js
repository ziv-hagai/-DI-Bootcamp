import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import Calculator from './components/Calculator';
import React from 'react';
import './App.css';
import { connect, useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const mytext = useSelector((state) => state.txt);
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <div>
        <Link to='/' > Home </Link>
        <Link to='/test' > Test </Link>
      </div>
      {/* <div className="App">
        <header className="App-header">
          <h1 >{mytext}</h1>
          <input onChange={(e) => dispatch({ type: 'CHANGE', payload: e.target.value })} />
        </header>
      </div> */}
      <Routes>
        <Route path='/' element={<Calculator />} />
        <Route path='/test' element={<CounterHooks />} />
      </Routes>
    </BrowserRouter>

  );
}

export default connect()(App);
