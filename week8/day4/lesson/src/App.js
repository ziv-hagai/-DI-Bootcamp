import Parent from './components/Parent';
import Child from './components/Child';
import Counter from './components/Counter';
import Myform from './components/Myform';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Myform/>
      {/* <ErrorBoundary>
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
