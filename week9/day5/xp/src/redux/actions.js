export const deletePost = (id) => {
    console.log(id);
    return {
        type: 'DELETE_POST',
        payload: id
    }
};


export const setId = (id) => {
    console.log(id);
    return {
        type: 'SET_ID',
        payload: id
    }
};