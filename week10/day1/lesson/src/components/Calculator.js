import { useEffect, useReducer, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const initState = {
    result: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'PLUS':
            return { ...state, result: state.result + action.payload }
        case 'MINUS':
            return { ...state, result: state.result - 1 }
        case 'DIVIDE':
            return { ...state, result: state.result / 2 }
        case 'MULTIPLY':
            return { ...state, result: state.result * 2 }
        default:
            return { ...state }
    }
}

const Calculator = (props) => {
    const myInput = useRef()
    const id = useRef(0)
    const [state, dispatch] = useReducer(reducer, initState)
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate('/test')
    }
    useEffect(() => console.log(myInput.current.name), []);

    // id.current = setInterval
    // clearInterval(id.current)

    return (
        <>
            <button onClick={handleRedirect}>Redirect</button>

            <h1>{id.current}</h1>
            <input type='text' name='input' ref={myInput} onChange={useEffect} />
            <h2>Calculator</h2>
            Result: {state.result}
            <button onClick={() => dispatch({ type: 'PLUS', payload: 1 })}>+1</button>
            <button onClick={() => dispatch({ type: 'MINUS' })}>-1</button>
            <button onClick={() => dispatch({ type: 'DIVIDE' })}>/2</button>
            <button onClick={() => dispatch({ type: 'MULTIPLY' })}>*2</button>
        </>
    )
}

export default Calculator