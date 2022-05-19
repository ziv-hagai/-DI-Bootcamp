export const getTodos = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
        .then(todos => {
            return (
                todos.json()
            )
        })
        .then(data => {
            dispatch({ type: 'GET_TODOS', payload: data })
        })
        .catch(err => {
            console.log(err);
        })
}
