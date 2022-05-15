import React from 'react'
import MovieDetails from './components/MovieDetails'
import Movielist from './components/Movielist'
import './App.css';

class App extends React.Component {


  render() {
    return (
      <div className="App" >
        <header className="App-header" >
          <h1>Redux Movies</h1>
          <h3>Movie List</h3>
          <Movielist />
          <h3>Details</h3>
          <MovieDetails />
        </header>
      </div>
    );
  }
}

export default App