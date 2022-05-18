export const GET_USERS = 'GET_USERS';
export const SEARCH = 'SEARCH';

export const handleSearch = (value) => {
    return {
        type: SEARCH,
        payload: value
    }
}


export const getUsers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            dispatch({ type: GET_USERS, payload: data })
        })
        .catch(err => {
            console.log(err);
        })
}