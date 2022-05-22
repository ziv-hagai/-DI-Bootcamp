import { useContext } from "react";
import { Context } from './CounterHooks';

const Comp = (props) => {
    const { count, setCount } = useContext(Context);

    return (
        <>
            <div>
                {/* Comp: {props.count}
                <button onClick={() => props.setCount(count => count + 1)}>+</button>
                <button onClick={() => props.setCount(count => count - 1)}>-</button> */}
                Comp: {count}
                <button onClick={() => setCount(count => count + 1)}>+</button>
                <button onClick={() => setCount(count => count - 1)}>-</button>
            </div>
        </>
    )
}

export default Comp