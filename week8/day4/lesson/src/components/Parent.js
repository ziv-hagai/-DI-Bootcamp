
const Parent = (props) => {
    console.log(props);
    if(props.username==='admin'){
        return(
        <h1>Admin Page</h1>
        )
    }
    return props.children;
}

export default Parent