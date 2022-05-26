import City from './City';
import React from "react";
import { connect } from 'react-redux';

class Favorites extends React.Component {

    componentDidMount() {
        console.log(this.props.local);
    }

    render() {
        if (this.props.local.length) {
            return (
                this.props.local.map((item, i) => {
                    return (

                        <City key={i} cityKey={item.cityKey}
                            name={item.city}
                            img={item.img}
                            text={item.text}
                            temp={Math.round(item.temp)} />
                    );
                })
            )
        } else {
            return (
                <>loading favs</>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        local: state.local,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getLocal: (text) => dispatch(getLocal()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)


