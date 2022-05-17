const initstate = {
    list: [],
    currentIndex: -1
}

export const reducer = (state = initstate, action = {}) => {
    switch (action.type) {
        case 'INSERT':
            return { ...state, list: [...state.list, action.payload], currentIndex: -1 };
        case 'UPDATE':
            let newList = [...state.list]
            newList.splice(state.currentIndex, 1, action.payload);
            return { ...state, list: newList, currentIndex: -1 };
        case 'UPDATE_INDEX':
            return { ...state, currentIndex: action.payload };
        case 'DELETE':
            let newListTwo = [...state.list];
            newListTwo.splice(action.payload, 1)
            return { ...state, list: newListTwo, currentIndex: -1 };
        default:
            return { ...state }
    }
}