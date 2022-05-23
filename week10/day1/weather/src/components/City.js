import React from "react";
import { connect } from 'react-redux';
import { show } from '../redux/actions';

class City extends React.Component {
    componentDidMount() {

        console.log('mount');

        this.props.show()
    }

    componentDidUpdate() {
        if (!this.props.city === {}) {
            console.log('update');
            this.props.show()
        }
    }

    render() {
        console.log('render');
        const current = this.props.current;
        console.log(current.WeatherIcon);

        return (
            <div >
                <h1>{this.props.city.LocalizedName}</h1>
                <img src={`https://www.accuweather.com/images/weathericons/${current.WeatherIcon}.svg`} />
                <p>{current.WeatherText}</p>
                <p>{current.Temperature.Metric.Value} &#176;</p>
            </div>
        );

    }
}


const mapStateToProps = (state) => {
    return {
        current: state.current,
        city: state.city
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        show: () => dispatch(show()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)