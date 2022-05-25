import Products from './components/Products';
import Product from './components/Product';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter className="App">
      <Routes className="App-header">
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
