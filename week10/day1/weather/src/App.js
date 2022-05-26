import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Nav from './components/Nav';
import Search from './components/Search';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { connect } from 'react-redux';
import { getLocal } from './redux/actions';
// let favs = [];
// let favs = [],
//     keys = Object.keys(localStorage),
//     i = keys.length;
// while (i--) {
//     favs.push(JSON.parse(localStorage.getItem(keys[i])));
// }


class App extends React.Component {
  componentDidMount() {
    this.props.getLocal()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<> <Search /> <Home /> </>} />
          <Route path='/favs' element={<Favorites />} />
        </Routes>
      </div>

    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//       local: state.local,
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getLocal: () => dispatch(getLocal()),

  }
}

export default connect(null, mapDispatchToProps)(App)


