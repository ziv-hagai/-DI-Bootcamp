
import ErrorBoundary from './ErrorBoundary';
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';

import './App.css';

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

      </header>
    </div>
  );
}

export default App;
