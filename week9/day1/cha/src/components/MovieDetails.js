import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = (props) => {
    console.log(props);
    if (!props.selectedMovie) {
        return (<></>)
    } else {
        return (
            <>
                <ul>
                    <li>Title: {props.selectedMovie.title}</li>
                    <li>Release Date: {props.selectedMovie.releaseDate}</li>
                    <li>Rating: {props.selectedMovie.rating}</li>
                </ul>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails);