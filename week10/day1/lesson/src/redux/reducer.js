const initState = {
    txt: 'text'
};

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, txt: action.payload }
        default:
            return { ...state }
    }
}