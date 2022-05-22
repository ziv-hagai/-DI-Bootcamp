import React from "react";
import { connect } from 'react-redux';
import { search, complete, choose } from '../redux/actions';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }
    search = (e) => {
        this.setState({ text: e });
        console.log(this.state.text);
    }
    render() {
        return (
            <div >
                <input type='text' placeholder="search..." onChange={(e) => this.search(e.target.value)} ></input>
                <div name='list'>
                    {
                        this.props.cities.map((city, i) => {
                            console.log('hi');
                            return (
                                <div key={i} id={i} onClick={(e) => this.props.choose(e)}>{city.LocalizedName}</div>
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
        chosen: state.chosen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // complete: (text) => dispatch(complete(text)),
        choose: (e) => dispatch(choose(e.target.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
