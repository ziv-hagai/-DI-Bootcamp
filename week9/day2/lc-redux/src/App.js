import React from 'react'
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import Button from './components/Button';
import Result from './components/Result';
import './App.css';
import { changeFirst, changeSecond, calculate } from './redux/actions';
import { connect } from 'react-redux';

class App extends React.Component {

  getResult = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '9be9c4880fmshbd6010d4d3b88e8p1abf36jsnd3c4ce499b84'
      }
    };
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.props.second}&fname=${this.props.first}`, options)
      .then(response => response.json())
      .then(response => {
        let res = response;
        this.props.resultDispatch(res);
        // console.log(res);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FirstName handleChange={this.props.changeFirstDispatch} />
          <SecondName handleChange={this.props.changeSecondDispatch} />
          <Button getResult={this.getResult} />
          <Result result={this.props.answer.result} perc={this.props.answer.percentage} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    first: state.first,
    second: state.second,
    answer: state.answer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFirstDispatch: (e) => dispatch(changeFirst(e.target.value)),
    changeSecondDispatch: (e) => dispatch(changeSecond(e.target.value)),
    resultDispatch: (e) => dispatch(calculate(e)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

