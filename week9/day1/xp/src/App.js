import React from 'react'
// import { connect } from 'react-redux';
import Counter from './components/Counter'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  // handeChangeAppState = (e) => {
  //   this.setState({ property_one: e.target.value })
  // }

  render() {

    return (
      <div className="App" >
        <header className="App-header" style={{ backgroundColor: this.state.color }}>
          <Counter />
        </header>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     prop_one: state.property_one,
//     prop_two: state.property_two
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     myHandleChange: () => dispatch(increaseCount(e.target.value)),
//     myHandleChangeTwo: () => dispatch(increaseCount(e.target.value))
//   }
// }


export default (App);
