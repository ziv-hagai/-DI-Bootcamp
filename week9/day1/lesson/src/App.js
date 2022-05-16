import React from 'react'
import Hello from './components/Hello'
import './App.css';
import { handleChangeFromRedux } from './redux/actions';
import { handleChangeFromReduxTwo } from './redux/actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property_one: 'PROP ONE',
      property_two: 'PROP TWO'
    }
  }

  handeChangeAppState = (e) => {
    this.setState({ property_one: e.target.value })
  }

  render() {
    // get property2 from store and display on page
    // add a new input to change property2 on store, add new action and case
    return (
      <div className="App" >
        <header className="App-header" style={{ backgroundColor: this.state.color }}>
          <h2>Redux example</h2>
          <p>property_one: {this.state.property_one} </p>
          <p><input type='text' onChange={this.handeChangeAppState} /></p>
          <p>property_two: {this.state.property_two} </p>
          <p>prop_one: {this.props.prop_one} </p>
          <p><input type='text' onChange={this.props.myHandleChange} /></p>
          <p>two: {this.props.prop_two} </p>
          <p><input type='text' onChange={this.props.myHandleChangeTwo} /></p>

          <Hello from_app={this.state.property_one} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prop_one: state.property_one,
    prop_two: state.property_two
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myHandleChange: (e) => dispatch(handleChangeFromRedux(e.target.value)),
    myHandleChangeTwo: (e) => dispatch(handleChangeFromReduxTwo(e.target.value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
