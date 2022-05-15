const initstate = {
    property_one: 'PROP ONE 4',
    property_two: 'PROP TWO 2',
    text: 'text'
}

export const reducer = (state = initstate, action = {}) => {
    switch (action.type) {
        case 'CHANGE_PROP_ONE':
            return { ...state, property_one: action.payload };
        case 'CHANGE_PROP_TWO':
            return { ...state, property_two: action.payload };
        case 'CHANGE_TEXT':
            return { ...state, text: state.property_two };
        default:
            return { ...state }
    }
}