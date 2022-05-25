import React from "react";
import { connect } from 'react-redux';
import { showDay, showWeek } from '../redux/actions';

class City extends React.Component {
    componentDidMount() {
        // if (this.props.day) {
        console.log('mount');
        this.props.showDay()
        this.props.showWeek()
        // }
    }
    // componentDidUpdate() {
    //     if (this.props.day) {
    //         console.log('update');
    //         this.props.showDay()
    //     }
    // }

    render() {
        console.log('render');
        const day = this.props.day;
        // console.log(day.WeatherIcon);
        if (this.props.day) {
            console.log(this.props.city.LocalizedName)
            return (
                <div >
                    <h1>{this.props.city.LocalizedName}</h1>
                    <img src={`https://www.accuweather.com/images/weathericons/${day.WeatherIcon}.svg`} />
                    <p>{day.WeatherText}</p>
                    <p>{day.Temperature.Metric.Value} &#176;</p>
                </div>
            );
        }
        else {
            return (
                <div >loading...</div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        day: state.day,
        city: state.city
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showDay: () => dispatch(showDay()),
        showWeek: () => dispatch(showWeek()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)