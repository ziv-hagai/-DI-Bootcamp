import dayApi from './jsons/dayApi.json';
import weekApi from './jsons/weekApi.json';
import searchApi from './jsons/searchApi.json';

const initState = {
    cities: [],
    city: '',
    day: '',
    week: '',
    metric: true
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'COMPLETE':
            // const arr = payload
            console.log(state.cities);
            return { ...state, cities: [...searchApi] }
        case 'DAY':
            return { ...state, day: { ...dayApi }, city: { ...searchApi[0] } }
        case 'WEEK':
            return { ...state, week: { ...weekApi } }
        case 'CHOOSE':
            console.log(action.payload);
            return { ...state, city: { ...action.payload } }
        default:
            return { ...state }
    }
}
