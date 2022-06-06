import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/login' element={<Login title='Login' />} />
        <Route path='/register' element={<Login title='Register' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
