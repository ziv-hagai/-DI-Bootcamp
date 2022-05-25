

const initState = {
    cities: [],
    cityName: '',
    cittyKey: '',
    day: '',
    week: '',
    metric: true
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'COMPLETE':
            return { ...state, cities: action.payload }
        case 'DAY':
            return { ...state, day: { ...action.payload }, cities: [] }
        case 'METRIC':
            return { ...state, metric: !state.metric }
        case 'WEEK':
            return { ...state, week: { ...action.payload } }
        case 'CHOOSE':
            return { ...state, cityName: action.payload.name, cityKey: action.payload.key }
        default:
            return { ...state }
    }
}
