import React from "react";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFav: this.props.isFav,
        }
    }
    addToFav = () => {
        this.setState({ isFav: !this.state.isFav })

        if (this.state.isFav) {
            localStorage.removeItem(this.props.name);
        } else {
            const favCity = {
                isFav: true,
                cityKey: this.props.cityKey,
                city: this.props.name,
                img: this.props.img,
                text: this.props.text,
                temp: this.props.temp
            }
            localStorage.setItem(this.props.name, JSON.stringify(favCity));
        }
    }

    render() {
        console.log(this.props);

        return (
            <div >
                save<input type='checkbox' defaultChecked={this.props.isFav} onChange={this.addToFav} />
                <h1>{this.props.name}</h1>
                <img src={this.props.img} />
                <p>{this.props.text}</p>
                <p>{this.props.temp} &#176;</p>
            </div>
        );
    }
}

export default City