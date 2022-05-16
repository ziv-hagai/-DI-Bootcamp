export const changeFirst = (value) => {
    return {
        type: 'CHANGE_FIRST',
        payload: value
    }
};
export const changeSecond = (value) => {
    return {
        type: 'CHANGE_SECOND',
        payload: value
    }
};

export const calculate = (value) => {
    return {
        type: 'CALCULATE',
        payload: value
    }
}
