const initstate = {
    first: '',
    second: '',
    answer: {}
}

export const reducer = (state = initstate, action = {}) => {
    switch (action.type) {
        case 'CHANGE_FIRST':
            return { ...state, first: action.payload };
        case 'CHANGE_SECOND':
            return { ...state, second: action.payload };
        case 'CALCULATE':
            return { ...state, answer: action.payload };
        default:
            return { ...state }
    }
}