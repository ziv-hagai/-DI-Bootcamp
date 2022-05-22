import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Nav from './components/Nav';
import Search from './components/Search';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favs' element={<Favorites />} />
      </Routes>
    </div>

  );
}

export default App;
