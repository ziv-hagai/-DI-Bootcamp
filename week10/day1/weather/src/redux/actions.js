import { store } from '../index.js';
import dayApi from './jsons/dayApi.json';
import weekApi from './jsons/weekApi.json';
import searchApi from './jsons/searchApi.json';

export const showDay = () => (dispatch) => {
    console.log('showDay');
    // console.log(store.getState().cityKey);
    // dispatch({ type: 'DAY', payload: dayApi })
    fetch(`https://dataservice.accuweather.com/currentconditions/v1/${store.getState().cityKey}?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({ type: 'DAY', payload: data })
        })
        .catch(e => {
            console.log(e);
            dispatch({ type: 'DAY', payload: [] })
        })
}

export const changeMetric = () => {
    console.log('changeMetric');
    return {
        type: 'METRIC',
    }
};

export const getLocal = () => {
    console.log('getLocal');
    const favs = JSON.parse(localStorage.getItem('favs')) || []
    // console.log(favs);
    return {
        type: 'LOCAL', payload: favs
    }
};

export const choose = (city) => {
    console.log('choose');
    return {
        type: 'CHOOSE',
        payload: city
    }
};

export const complete = (text) => (dispatch) => {
    console.log('complete', text);
    // dispatch({ type: 'COMPLETE', payload: searchApi })
    fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro&q=${text}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            dispatch({ type: 'COMPLETE', payload: data })
        })
        .catch(e => {
            console.log(e);
            dispatch({ type: 'COMPLETE', payload: [] })
        })
}

export const showWeek = () => (dispatch) => {
    console.log('showWeek');
    // console.log(store.getState());
    // dispatch({ type: 'WEEK', payload: weekApi })

    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${store.getState().cityKey}?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro&metric=true`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({ type: 'WEEK', payload: data })
        })
        .catch(e => {
            console.log(e);
            dispatch({ type: 'WEEK', payload: [] })
        })
}
