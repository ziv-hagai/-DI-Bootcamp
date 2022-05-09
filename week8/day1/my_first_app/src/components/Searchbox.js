const SearchBox = (props) => {
    return (
        <div>
            search: <input type='text' onChange={props.searchFunc}/>
            <button onClick={props.clickFunc}>search</button>
        </div>
    )
}

export default SearchBox;