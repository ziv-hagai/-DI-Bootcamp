import Parent from './components/Parent';
import Child from './components/Child';
import Counter from './components/Counter';
import Myform from './components/Myform';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Nav from './components/Nav';
import ErrorBoundary from './ErrorBoundary';
import {Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Shop' element={<Shop/>}/>
      </Routes>
      {/* <Myform/>
       <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      <Counter/>
        <Parent username='admin'>
          <Child/>
        </Parent> */}
      </header>
    </div>
  );
}

export default App;
