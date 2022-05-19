const initState = {
    images: [],
    searchTxt: ''
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'GET_IMAGES':
            return { ...state, images: [...action.payload] }
        case 'SEARCH':
            return { ...state, searchTxt: action.payload }
        default:
            return { ...state }
    }
}
