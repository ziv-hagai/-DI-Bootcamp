

export const setSearchField = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      console.log(users);
      dispatch({ type: 'CHANGE_SEARCHFIELD', payload: users })
    })
    .catch(err => console.error(err));
}

// this.setState({ robots: users })

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => { this.setState({ robots: users }) });