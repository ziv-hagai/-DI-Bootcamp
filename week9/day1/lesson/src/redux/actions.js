export const handleChangeFromRedux = (value) => {
    return {
        type: 'CHANGE_PROP_ONE',
        payload: value
    }
}

export const handleChangeFromReduxTwo = (value) => {
    return {
        type: 'CHANGE_PROP_TWO',
        payload: value
    }
}


export const handleChangeFromReduxThree = () => {
    return {
        type: 'CHANGE_TEXT',
    }
}