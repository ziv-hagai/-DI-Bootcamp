import React from "react";
class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFav: false,
        }
    }
    componentDidMount() {
        this.setState({ isFav: Object.keys(localStorage).includes(this.props.cityKey) })
    }

    componentDidUpdate() {
        if (this.state.isFav !== Object.keys(localStorage).includes(this.props.cityKey)) {
            this.setState({ isFav: Object.keys(localStorage).includes(this.props.cityKey) })
        }
    }
    changeFav = () => {
        if (this.state.isFav) {
            localStorage.removeItem(this.props.cityKey);
            this.setState({ isFav: false })
        } else {
            const favCity = {
                isFav: true,
                cityKey: this.props.cityKey,
                city: this.props.name,
                img: this.props.img,
                text: this.props.text,
                temp: this.props.temp
            }
            localStorage.setItem(this.props.cityKey, JSON.stringify(favCity));
            this.setState({ isFav: true })
        }
    }

    render() {
        console.log(this.state.isFav,
            Object.keys(localStorage).includes(this.props.cityKey))
        return (
            <div >
                save<input type='checkbox' checked={this.state.isFav} onChange={this.changeFav} />
                <h1>{this.props.name}</h1>
                <img src={this.props.img} />
                <p>{this.props.text}</p>
                <p>{this.props.temp} &#176;</p>
            </div>
        );
    }
}

export default City