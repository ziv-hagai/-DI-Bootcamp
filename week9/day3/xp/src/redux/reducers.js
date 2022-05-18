const initState = {
    count: 0,
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
};
