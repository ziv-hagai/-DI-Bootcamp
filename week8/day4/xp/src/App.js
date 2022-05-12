
import ErrorBoundary from './ErrorBoundary';
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';

import './App.css';

async function grtUrl() {
  try {
    const result = await fetch('https://webhook.site/6681c51a-814c-44be-9cf7-78a5fe598d9d', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
    })
    console.log(result)
  }
  catch (err) {
    console.log(err);
  }
}

function App() {

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Shop' element={<ErrorBoundary><Shop /></ErrorBoundary>} />
        </Routes>
        <PostList />
        <Example1 />
        <Example2 />
        <Example3 />
        <button onClick={grtUrl}>post</button>
      </header>
    </div>
  );
}

export default App;
