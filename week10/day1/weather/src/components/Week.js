import React from "react";
import { connect } from 'react-redux';
import Day from './Day';
import { showWeek } from '../redux/actions';

class Week extends React.Component {
    //     componentDidMount() {
    //         if (this.props.day) {

    //             console.log('mount');

    //             this.props.showWeek()
    //         }
    //     }
    //     componentDidUpdate() {
    //         if (this.props.day) {
    //             console.log('update');
    //             this.props.showWeek()
    //         }
    //     }

    render() {
        if (this.props.week) {

            console.log(this.props.week.DailyForecasts);
            return (
                this.props.week.DailyForecasts.map((day, i) => {
                    return (
                        <Day key={i} name={day.Date} icon={day.Day.Icon} min={day.Temperature.Minimum.Value} max={day.Temperature.Maximum.Value} />
                    )
                })
            )
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
        week: state.week,
        day: state.day
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showWeek: () => dispatch(showWeek()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Week)