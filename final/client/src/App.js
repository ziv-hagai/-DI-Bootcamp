import './App.css';
import React from 'react';
import Home from './components/Home';
import Note from './components/Note';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'tachyons';
import { useState, createContext } from 'react';
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

export const Context = createContext();

// createContext.provider
function App() {
  const [notes, setNotes] = useState([]);
  const [isNew, setIsNew] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <Context.Provider value={{ notes, setNotes, isNew, setIsNew, edit, setEdit }}>

      {/* <div className="App"> */}
      <header className="App-header">
        <h1 className='title'>notesbook</h1>
        {/* <DndProvider backend={HTML5Backend}> */}
        <BrowserRouter className="App">
          <Routes className="App-header">
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Note />} />
          </Routes>
        </BrowserRouter>
        {/* </DndProvider> */}
      </header>
      {/* </div> */}
    </Context.Provider >

  );
}

export default App;
