import Image from './Image';
import React from 'react';
import { getImages, handleSearch } from '../redux/actions'
import { connect } from 'react-redux';

class Theme extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getImages(this.props.img);
        this.props.handleSearch(this.props.img)

    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.img !== this.props.img) {
    //         this.props.getImages(this.props.img);

    //     }
    // }
    render() {
        console.log(this.props.searchTxt);
        return (
            <>
                <h3>{this.props.searchTxt} images</h3>
                {
                    this.props.images.map((item, i) => {
                        return (
                            <Image alt={item.alt} key={i} src={item.src.small} />
                        )
                    })
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.images,
        searchTxt: state.searchTxt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (text) => dispatch(getImages(text)),
        handleSearch: (text) => dispatch(handleSearch(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme);

