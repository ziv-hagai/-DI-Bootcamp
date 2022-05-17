export const insert = (data) => {
    return {
        type: 'INSERT',
        payload: data
    }
};

export const update = (data) => {
    return {
        type: 'UPDATE',
        payload: data
    }
}

export const updateIndex = (index) => {
    return {
        type: 'UPDATE_INDEX',
        payload: index
    }
}

export const deleteX = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}
