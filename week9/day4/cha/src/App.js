import React from 'react';
import Todo from './components/Todo';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import { getTodos } from './redux/actions'

class App extends React.Component {

  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        {
          this.props.todos.map((item, i) => {
            return (
              <Todo key={i} id={item.id} title={item.title} completed={item.completed} />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
