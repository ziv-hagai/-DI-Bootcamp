import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { handleSearch } from '../redux/actions'

const Nav = (props) => {
    return (
        <div>
            <Link to='/mountain'> Mountain</Link>
            <Link to='/beach'> Beach</Link>
            <Link to='/birds'> Birds</Link>
            <Link to='/food'> Food</Link>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         searchTxt: state.searchTxt
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        // searchFunc: (e) => dispatch(handleSearch(e.target.value)),
        // getImages: (e) => dispatch(getImages())

    }
}

export default connect(null, mapDispatchToProps)(Nav);

