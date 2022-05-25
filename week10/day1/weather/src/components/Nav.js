import { Link } from 'react-router-dom';
import React from "react";
import { connect } from 'react-redux';
import { changeMetric } from '../redux/actions';

class Nav extends React.Component {

    render() {
        return (
            <div >
                <span>WHAT'StheWEATHER</span>
                celsius<input type='checkbox' defaultChecked={this.props.metric} onChange={this.props.changeMetric} />
                <Link className='nav' to='/'> Home</Link>
                <Link className='nav' to='/favs'> Favorites</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        metric: state.metric,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMetric: () => dispatch(changeMetric()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

