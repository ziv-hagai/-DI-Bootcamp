import City from './City';
import React from "react";
import { connect } from 'react-redux';

// const allStorage = () => {
let favs = [],
    keys = Object.keys(localStorage),
    i = keys.length;
while (i--) {
    favs.push(JSON.parse(localStorage.getItem(keys[i])));
}
// const x = JSON.parse(favs[1]);
// console.log(favs.length, favs);
// return favs;
// }
// allStorage()

class Favorites extends React.Component {
    render() {
        if (favs.length) {
            console.log('hi', favs);
            return (
                favs.map((item, i) => {
                    return (
                        <City key={i} cityKey={item.cityKey} name={item.city}
                            img={item.img}
                            text={item.text}
                            temp={item.temp} />
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
        day: state.day,
        cityName: state.cityName,
        cityKey: state.cityKey
    }
}

export default connect(mapStateToProps)(Favorites)

