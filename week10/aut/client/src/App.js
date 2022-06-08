import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import { ToastContainer } from 'react-toastify'
import { useState, createContext } from 'react'
import { Aut } from './aut/Aut'
export const AppContext = createContext(null)

function App() {
  const [accessToken, setAccessToken] = useState('')

  return (
    <AppContext.Provider value={{ accessToken, setAccessToken }}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/login' element={<Login title='Login' />} />
          <Route path='/register' element={<Login title='Register' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Aut><Home /></Aut>} />
          <Route path='/about' element={<Aut><About /></Aut>} reloadDocument />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
