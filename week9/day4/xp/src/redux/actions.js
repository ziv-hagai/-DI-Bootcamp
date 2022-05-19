// import store from '../index';

export const handleSearch = (value) => {
    console.log(value);
    return {
        type: 'SEARCH',
        payload: value
    }
};

export const getImages = (text) => (dispatch) => {
    fetch(`https://api.pexels.com/v1/search?query=${text}&per_page=30`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: '563492ad6f91700001000001a1688a6ca62140bdbb307559e6da437d'
        }
    })
        .then(photos => {
            return (
                photos.json()
            )
        })
        .then(data => {
            console.log(data.photos);
            dispatch({ type: 'GET_IMAGES', payload: data.photos })
        })
        .catch(err => {
            console.log(err);
        })
};
