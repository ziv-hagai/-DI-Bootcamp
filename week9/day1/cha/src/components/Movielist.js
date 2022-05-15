import { connect } from 'react-redux';
import { showDetails } from '../actions/index';

const Movielist = (props) => {
    return (
        props.movies.map((movie, i) => {
            return (
                <div key={i}>
                    <span>{movie.title}</span>
                    <button onClick={() => props.showDetails(movie)}>details</button>
                </div>
            )
        })
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    showDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Movielist)