import { store } from '../index.js';

export const showDay = () => (dispatch) => {
    console.log('showDay');
    console.log(store.getState());
    dispatch({ type: 'DAY', payload: {} })
    // fetch(`http://dataservice.accuweather.com/currentconditions/v1/${store.getState().city}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         dispatch({ type: 'SHOW', payload: data })
    //     })
    //     .catch(e => {
    //         console.log(e);
    //         dispatch({ type: 'SHOW', payload: [] })
    //     })
}

export const choose = (city) => {
    console.log('choose');
    return {
        type: 'CHOOSE',
        payload: city
    }
};

export const complete = (text) => (dispatch) => {
    console.log('complete');
    dispatch({ type: 'COMPLETE', payload: [] })
    //     fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro&q=${text}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             dispatch({ type: 'COMPLETE', payload: data })
    //         })
    //         .catch(e => {
    //             console.log(e);
    //             dispatch({ type: 'COMPLETE', payload: [] })
    //         })
}

export const showWeek = () => (dispatch) => {
    console.log('showWeek');
    console.log(store.getState());
    fetch(`https://dataservice.accuweather.com//forecasts/v1/daily/5day/${store.getState().city.Key}?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro&metric=${store.getState().metric}`)
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
