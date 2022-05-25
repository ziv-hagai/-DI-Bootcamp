import City from './City';
import Week from './Week';
import React from "react";
import { connect } from 'react-redux';
class Home extends React.Component {
    render() {
        // console.log(local)
        // console.log(this.props.cityKey)
        // console.log(local.includes(this.props.cityKey))

        if (this.props.cityName) {
            return (
                <div >
                    <City
                        // isFav={local.includes(this.props.cityKey)}
                        cityKey={this.props.cityKey}
                        name={this.props.cityName}
                        img={`https://www.accuweather.com/images/weathericons/${this.props.day.WeatherIcon}.svg`}
                        text={this.props.day.WeatherText}
                        temp={this.props.day.Temperature.Metric.Value} />
                    <div id='week'>
                        <Week />
                    </div>
                </div>

            );
        } else {
            return (
                <>loading</>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        day: state.day,
        cityName: state.cityName,
        cityKey: state.cityKey
    }
}

export default connect(mapStateToProps)(Home)
