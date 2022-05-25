import React from "react";
import { connect } from 'react-redux';
import Day from './Day';

class Week extends React.Component {


    render() {
        if (this.props.week) {

            console.log(this.props.week.DailyForecasts);
            return (
                this.props.week.DailyForecasts.map((day, i) => {
                    return (
                        <Day key={i}
                            name={day.Date}
                            icon={day.Day.Icon}
                            min={day.Temperature.Minimum.Value}
                            max={day.Temperature.Maximum.Value} />
                    )
                })
            )
        }

    }
}
const mapStateToProps = (state) => {
    return {
        week: state.week,
    }
}

export default connect(mapStateToProps)(Week)