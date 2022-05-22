import { store } from '../index.js';

// export const search = (text) => {
//     return {
//         type: 'SEARCH',
//         payload: text
//     }
// };

export const choose = (city) => {
    console.log(city);
    return {
        type: 'CHOOSE',
        payload: city
    }
};

// store.getState().reducer.text
export const complete = (text) => (dispatch) => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro${text ? '&q=' + text : ''}`;

    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'COMPLETE', payload: data })
        })
        .catch(e => console.log(e))

};


