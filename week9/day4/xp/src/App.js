import React from 'react';
import Theme from './components/Theme';
import SearchBox from './components/SearchBox'
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import { getImages } from './redux/actions'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>SnapShot</h1>
        <SearchBox getImages={this.props.getImages} />
        <Nav getImages={this.props.getImages} />
        <Routes>
          <Route path='/' element={<Theme img={'Mountain'} />} />
          <Route path='/mountain' element={<Theme img={'Mountain'} />} />
          <Route path='/beach' element={<Theme img={'Beach'} />} />
          <Route path='/birds' element={<Theme img={'Birds'} />} />
          <Route path='/food' element={<Theme img={'Food'} />} />
        </Routes>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     images: state.images,
//     searchTxt: state.searchTxt
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: (text) => dispatch(getImages(text))
  }
}

export default connect(null, mapDispatchToProps)(App);
