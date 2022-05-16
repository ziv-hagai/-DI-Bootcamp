import React, { Component } from 'react';

import { connect } from 'react-redux';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';

import { setSearchField } from './redux/actions';
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
