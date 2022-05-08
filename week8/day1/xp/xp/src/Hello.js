// 2
const Hello = () => {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5+5;
    return (
            <>
                <h1>Hello World!</h1>
                {myelement}
                <p>React is {sum} times better with JSX</p>

            </>
    )
}

export default Hello;