import React from 'react';
import User from './components/User';
import SearchBox from './components/SearchBox'
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import { getUsers } from './redux/actions'

class App extends React.Component {


  componentDidMount() {
    this.props.getUsers()
  }

  handleChange = (e) => {
    this.setState({ searchTxt: e.target.value })
  }

  render() {
    const { searchTxt, users } = this.props;
    const filterUser = users.filter(item => {
      return item.name.toLowerCase().includes(searchTxt.toLowerCase());
    })
    return (
      <div>
        <h1>Users</h1>
        <SearchBox />
        {
          filterUser.map(item => {
            return (
              <User key={item.id} user={item} />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    searchTxt: state.searchTxt
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
