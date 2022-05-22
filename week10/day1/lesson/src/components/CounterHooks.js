import { useEffect, useState, createContext } from 'react';
import Comp from './Comp';

export const Context = createContext();

const CounterHooks = (props) => {
    const [count, setCount] = useState(0);
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         })

    // }, [])

    // useEffect(() => {
    //     console.log(count);
    // }, [count])

    return (
        <>
            count with hooks: {count}
            <button onClick={() => setCount(count + 1)} >+</button>
            <button onClick={() => setCount(count - 1)} >-</button>
            {/* {
                users.map((item, i) => {
                    return (
                        <div key={i}>
                            {item.name}
                        </div>
                    )
                }
                )} */}
            {/* <Comp count={count} setCount={setCount} /> */}
            <Context.Provider value={{ count, setCount }}>
                <Comp count={count} setCount={setCount} />
            </Context.Provider>
        </>
    )

}

export default CounterHooks