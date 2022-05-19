import { connect } from 'react-redux';
import { handleSearch, getImages } from '../redux/actions';
import React from 'react';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }
  handleSubmit = (e) => {

    this.props.handleSearch(this.state.text)
    this.props.getImages(this.state.text)
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (text) => dispatch(handleSearch(text)),
    getImages: (text) => dispatch(getImages(text))

  }
}

export default connect(null, mapDispatchToProps)(SearchBox);
