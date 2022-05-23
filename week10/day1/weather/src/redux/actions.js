import { store } from '../index.js';

export const show = () => (dispatch) => {
    console.log('show');
    dispatch({ type: 'SHOW', payload: [] })
    // fetch(`http://dataservice.accuweather.com/currentconditions/v1/${store.getState().chosen}`)
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

