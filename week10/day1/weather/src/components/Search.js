import React from "react";
import { connect } from 'react-redux';
import { complete, choose } from '../redux/actions';

class Search extends React.Component {
    render() {
        return (
            <div >
                <input type='text' placeholder="search..." onChange={(e) => this.props.complete(e.target.value)} ></input>
                <div name='list'>
                    {
                        this.props.cities.map((city, i) => {
                            return (
                                <div key={i} id={city} onClick={(e) => this.props.choose(city)}><strong>{city.LocalizedName}</strong><span> ({city.Country.ID})</span></div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities,
        // chosen: state.chosen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        complete: (text) => dispatch(complete(text)),
        choose: (city) => dispatch(choose(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
