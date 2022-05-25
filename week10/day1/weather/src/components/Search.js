import React from "react";
import { connect } from 'react-redux';
import { complete, choose, showDay, showWeek } from '../redux/actions';

class Search extends React.Component {
    handleClick = (city) => {
        this.props.choose(city)
        console.log(this.props.city);

        this.props.showDay()
        this.props.showWeek()

    }
    render() {
        return (
            <div >
                <input type='text' placeholder="search..." onChange={(e) => this.props.complete(e.target.value)} ></input>
                <div name='list'>
                    {
                        this.props.cities.map((city, i) => {
                            return (
                                <div key={i} id={city} /*onClick={(e) => this.props.choose(city)}*/ onClick={() => this.handleClick(city)}><strong>{city.LocalizedName}</strong><span> ({city.Country.ID})</span></div>
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
        city: state.city
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        complete: (text) => dispatch(complete(text)),
        choose: (city) => dispatch(choose(city)),
        showDay: () => dispatch(showDay()),
        showWeek: () => dispatch(showWeek()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
